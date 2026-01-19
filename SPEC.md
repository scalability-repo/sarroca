# Sarroca 1935 - Website Specification

## Overview

A sophisticated, understated website for **Sarroca 1935 Asset Management** - a family investment vehicle focused on wealth preservation and long-term growth. Founded in 2023, rooted in family heritage dating back to 1935.

**Core Principle**: No "vendehumos" - the design must be genuine, understated, and let the substance speak. No flashy claims, no generic corporate buzzwords, no fake promises.

---

## Design Direction

### Aesthetic: "Heritage Minimalism"
Inspired by established family offices (KKR, Blackstone, Apollo style layouts). Think old Catalan money meets modern restraint. The 1935 date suggests generational wealth and continuity - the design should feel like it's been around for decades, not like a startup trying to look important.

### Color Palette (from PDF brand guidelines)
```css
--olive-primary: #B5A86C      /* Main brand color - sage/olive green */
--olive-dark: #8B7E4E         /* Darker accent for headers */
--olive-muted: #C4B98A        /* Lighter variant for cards/sections */
--cream: #F5F3ED              /* Background, light sections */
--charcoal: #2C2C2C           /* Primary text */
--warm-white: #FAFAF7         /* Page backgrounds */
```

### Typography
- **Headlines**: Playfair Display - elegant, editorial serif
- **Body**: Source Sans 3 - clean, readable, professional
- **Accent**: Letter-spaced uppercase for labels and navigation

### Visual Elements
- Botanical/leaf motif from logo used subtly as decorative elements
- Generous whitespace - let content breathe
- Subtle textures for warmth
- Imagery of Catalan landscape if needed (similar to village in PDF)

---

## Site Structure

### Pages

#### 1. Homepage (`/`)
**Hero Section**
- Large logo with botanical burst
- Tagline: "Preservar. Crecer. Perdurar."
- Subtle scroll indicator

**Philosophy Section**
- Mission statement: "Combinar estabilidad financiera con un enfoque estratégico en el crecimiento y diversificación, asegurando la continuidad y prosperidad del patrimonio familiar."
- 5 core principles as elegant cards:
  1. Preservar y hacer crecer el capital
  2. Impulsar la rentabilidad sostenible
  3. Asegurar la adaptabilidad
  4. Garantizar la continuidad generacional
  5. Consolidar relaciones estratégicas

**Investment Focus Preview**
- Brief overview of the 4 investment pillars
- Link to full thesis page

**Footer**
- Logo, Barcelona location, contact link
- "Est. 1935"

#### 2. Investment Thesis (`/inversiones`)
**The 4 Pillars** (from PDF):

1. **Startups** - Empresas emergentes, diversificación, LP positions
2. **PYMEs** - Empresas consolidadas, ingresos estables, M&A
3. **Financiero (NPLs & RE)** - Préstamos morosos, garantía hipotecaria, LTV <50%
4. **Otros** - Renta variable, activos tangibles (relojes de lujo)

#### 3. Contact (`/contacto`)
- Minimal page
- Large mailto link: **gg@sarroca1935.com**
- Barcelona, Catalunya

---

## Technical Stack

```
Framework:     Next.js 14 (App Router)
UI Library:    shadcn/ui
Styling:       Tailwind CSS
Fonts:         Google Fonts (Playfair Display + Source Sans 3)
Animations:    Framer Motion
```

---

## What We're NOT Doing
- No carousel of AUM figures or success metrics
- No team photos with crossed arms
- No testimonials or "trusted by" logos
- No animated counters
- No aggressive CTAs

## What We ARE Doing
- Clean, editorial layouts
- Meaningful whitespace
- Typography-driven hierarchy
- Subtle micro-interactions
- Content that speaks for itself

---

## Implementation Steps

1. Initialize Next.js + shadcn + Tailwind
2. Set up global styles (colors, fonts)
3. Create Logo component (SVG botanical motif)
4. Build Navigation + Footer
5. Homepage: Hero → Philosophy → Investment Preview
6. Investment Thesis page with 4 pillars
7. Contact page with mailto
8. Animations and responsive polish
