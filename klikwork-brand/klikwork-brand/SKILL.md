---
name: klikwork-brand
description: Apply Klikwork brand styling to presentations, documents, PDFs, and HTML artifacts. Use when creating any visual output for Klikwork including slides, one-pagers, proposals, training materials, event materials, or web components. Triggers on requests mentioning Klikwork styling or when creating professional outputs that should follow Klikwork visual identity.
---

# Klikwork Brand Skill

Focused, calm, authoritative design. AI stays invisible. Restraint builds trust.

## Brand Principles

Design supports thinking. Remove noise. One message per screen. If it distracts, remove it. No robots, brains, or AI magic metaphors - show workflows, steps, outcomes.

## Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background dark | `#0b0e14` | (11,14,20) | Primary background (dark mode) |
| White | `#ffffff` | (255,255,255) | Primary text on dark |
| Soft gray | `#e5e7eb` | (229,231,235) | Cards, dividers |
| Mid gray | `#9ca3af` | (156,163,175) | Secondary text |
| Klikwork orange | `#ff5500` | (255,85,0) | Accent only. One per screen. |

## Typography

Font: Roboto (bold headings, regular body). Fallback: Helvetica, system-ui, Arial, sans-serif.

## Output Modes

**Dark Mode** (presentations, one-pagers, HTML): Background `#0b0e14`, text white, logo white.

**Light Mode** (print documents, PDFs): Background white, text `#0b0e14`, logo orange.

## Logo Usage

Located in `assets/logos/`. Three variants: white/, orange/, black/. Each has: beeldmerk.png (icon), full.png (icon+text), tagline.png (with TALENT IMAGINEERS).

**CRITICAL:** beeldmerk.png in orange/ and white/ has black background baked in. NEVER use on light backgrounds.

| Use case | Logo |
|----------|------|
| Presentations (dark) | `white/beeldmerk.png` bottom-right |
| PDF cover (light) | `orange/full.png` |
| PDF header page 2+ | `orange/full.png` smaller, top-right |
| Print documents | `orange/full.png` or `black/full.png` only |

## PDF Generation (FPDF2)

Install: `pip install fpdf2 --break-system-packages`

```python
from fpdf import FPDF
import os

KLIKWORK_DARK = (11, 14, 20)
KLIKWORK_ORANGE = (255, 85, 0)
KLIKWORK_GRAY = (107, 114, 128)

class KlikworkPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.set_auto_page_break(auto=True, margin=25)
        self.logo_path = "/mnt/skills/user/klikwork-brand/assets/logos/orange/full.png"
        
    def header(self):
        if self.page_no() > 1 and os.path.exists(self.logo_path):
            self.image(self.logo_path, x=160, y=10, w=35)
```

Use Helvetica font (built-in, no encoding issues). Margins: 25mm. Avoid Unicode bullets - use `-` or `*` instead.

Section headers: Helvetica Bold 18pt in orange, body in dark.

## HTML Artifacts

Dark theme default. Tailwind: `bg-[#0b0e14]`, `text-white`, `text-[#ff5500]`. Import Roboto from Google Fonts.

## Presentations (.pptx)

Dark background. Title slide centered, beeldmerk bottom-right. Content left-aligned, max 3-4 bullets. Orange for one key word per slide.

## Writing Tone

This section is the single source of truth for Klikwork voice. All other skills should reference this rather than maintaining their own tone rules.

**Voice**: Calm. Direct. Human. No hype. Write like a practitioner sharing what works, not a vendor selling a dream.

**Banned words**: revolutionary, game-changing, cutting-edge, unlock, leverage, disrupt, supercharge, 10x, future-proof, groundbreaking, transform (as hype verb), elevate.

**Dutch language**: use "je/jij" (not "u") unless the prospect's culture clearly requires formal address. Casual but professional.

**English language**: straightforward business English, no Americanisms.

**Writing rules**:
- Short sentences. Active voice. No filler.
- Show, don't tell: "Last week we helped 12 recruiters automate their sourcing" beats "Our AI training transforms recruitment teams"
- Write as a peer, not a vendor. Confident without being pushy.
- Never start with "We're excited to...", "I hope this finds you well", or "As a leader in..."

## Anti-patterns

- Multiple accent colors
- Gradient backgrounds
- AI/robot imagery
- Unicode bullets in PDFs
- reportlab (use FPDF2)
- beeldmerk.png on light backgrounds

## Shared References

- `references/service-portfolio.md` -- canonical list of all Klikwork offerings, tracks, durations, and target groups. Other skills should read this file instead of maintaining their own service descriptions.
