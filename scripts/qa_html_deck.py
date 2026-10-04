"""Compatibility wrapper for the Node-based HTML deck QA.

The project uses the bundled Playwright Node runtime because Python Playwright
is not a project dependency. Run with: python3 scripts/qa_html_deck.py
"""
from pathlib import Path
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
result = subprocess.run(["node", str(root / "scripts/qa_html_deck.mjs")], cwd=root)
sys.exit(result.returncode)
