from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
DECK = ROOT / "materials/workshop/html-deck/ai-dashboard-gas-workshop.html"
URL = DECK.as_uri()
VIEWPORTS = [(1440, 810), (1280, 720)]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for width, height in VIEWPORTS:
        page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
        page.goto(URL, wait_until="networkidle", timeout=30_000)
        count = page.locator(".slide").count()
        assert count == 28, count
        assert all(page.locator("img").nth(i).evaluate("img => img.complete && img.naturalWidth > 0") for i in range(page.locator("img").count()))
        overflow = []
        for i in range(count):
            page.evaluate("i => [...document.querySelectorAll('.slide')].forEach((s,j) => s.classList.toggle('active', j === i))", i)
            metrics = page.locator(".slide.active").evaluate("el => ({title: el.dataset.title, h: el.scrollHeight, ch: el.clientHeight, w: el.scrollWidth, cw: el.clientWidth})")
            if metrics["h"] > metrics["ch"] + 2 or metrics["w"] > metrics["cw"] + 2:
                overflow.append(metrics)
        assert not overflow, f"{width}x{height}: {overflow}"

        # Navigation from first slide through the closing slide and back one step.
        page.goto(URL, wait_until="networkidle")
        # Ensure ONLY ONE slide is visible at any given time (no background/overlay bleed)
        assert page.evaluate("() => [...document.querySelectorAll('.slide')].filter(s => window.getComputedStyle(s).display !== 'none').length") == 1
        assert page.evaluate("() => document.elementFromPoint(window.innerWidth/2, window.innerHeight/2).closest('.slide').dataset.title") == "Dari ChatGPT ke Dashboard Internal"

        for _ in range(count - 1):
            page.keyboard.press("ArrowRight")
        assert page.locator("#counter").inner_text() == "28 / 28"
        assert page.locator(".slide.active").get_attribute("data-title") == "Penutup"
        assert page.locator(".slide.active .slide-no").inner_text() == "28 / 28"
        assert page.evaluate("() => document.elementFromPoint(window.innerWidth/2, window.innerHeight/2).closest('.slide').dataset.title") == "Penutup"
        page.keyboard.press("ArrowLeft")
        assert page.locator(".slide.active").get_attribute("data-title") == "Sumber teknis dan provenance"
        assert page.evaluate("() => document.elementFromPoint(window.innerWidth/2, window.innerHeight/2).closest('.slide').dataset.title") == "Sumber teknis dan provenance"

        # Reproduce the user path: cover -> slide 3 via two next clicks.
        page.goto(URL, wait_until="networkidle")
        page.locator("#next").click(); page.locator("#next").click()
        assert page.locator("#counter").inner_text() == "03 / 28"
        assert page.locator(".slide.active").get_attribute("data-title") == "Masalah kerja yang ingin dibantu"
        assert page.locator(".slide.active .slide-no").inner_text() == "03 / 28"
        # Must be visibly shown to user eyes (not covered by slide 28!)
        assert page.evaluate("() => document.elementFromPoint(window.innerWidth/2, window.innerHeight/2).closest('.slide').dataset.title") == "Masalah kerja yang ingin dibantu"
        assert page.evaluate("() => [...document.querySelectorAll('.slide')].filter(s => window.getComputedStyle(s).display !== 'none').length") == 1

        # Test reload: on reload, slide 3 must persist and remain visible!
        page.reload(wait_until="networkidle")
        assert page.locator("#counter").inner_text() == "03 / 28"
        assert page.evaluate("() => document.elementFromPoint(window.innerWidth/2, window.innerHeight/2).closest('.slide').dataset.title") == "Masalah kerja yang ingin dibantu"
        assert page.evaluate("() => [...document.querySelectorAll('.slide')].filter(s => window.getComputedStyle(s).display !== 'none').length") == 1

        # Notes must be populated and overview must activate.
        page.goto(URL, wait_until="networkidle")
        page.keyboard.press("n")
        assert page.locator("#notesPanel").is_visible()
        assert "Buka dengan ekspektasi" in page.locator("#notesText").inner_text()
        page.keyboard.press("o")
        assert page.locator("body").evaluate("body => body.classList.contains('overview')")
        page.keyboard.press("Escape")
        assert not page.locator("body").evaluate("body => body.classList.contains('overview')")

        out = ROOT / "output/playwright"
        out.mkdir(parents=True, exist_ok=True)
        page.goto(URL, wait_until="networkidle")
        page.screenshot(path=str(out / f"deck-{width}x{height}-cover.png"))
        page.close()
    browser.close()
print("PASS: HTML deck QA")
