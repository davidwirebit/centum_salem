# Centum Brand & Mobile Style Guide

## HOW TO USE THIS GUIDE

1. **Read the reference components** to learn the brand
2. **Apply the same patterns** to pages that need rebranding
3. **Ensure mobile responsiveness** using the mobile patterns below

---

## STEP 1: LEARN THE BRAND

Read these files carefully to understand the new Centum brand:

### Core Components (READ THESE FIRST)
```
src/app/components/Hero.jsx          → Main hero pattern, colors, typography
src/app/components/Footer.jsx        → Footer layout, links, colors
src/app/components/Navbar.jsx        → Navigation, mobile menu
src/app/components/Section3.jsx      → Section layout pattern
src/app/components/CardLanding.jsx   → Card component pattern
src/app/components/BlueCard.jsx      → Benefit card with icon
```

### Full Page Examples
```
src/app/page.js                      → Homepage structure
src/app/pasarela-pagos/page.jsx      → Product page pattern
src/app/tarjetas-centumpay/page.jsx  → Another product page
src/app/components/HeroPasarelaPagos.jsx → Hero variant
```

### Key Things to Notice
- Dark backgrounds (#0A0A0A, #111111, #161616)
- Gold accent color (#D4A853) for highlights
- White text for headings, gray (#A1A1A6) for body
- Border color (#2D2D2D)
- font-manrope for headings, font-inter for body
- rounded-lg buttons (not rounded-full)
- Subtle borders on cards and sections

---

## STEP 2: IDENTIFY OLD BRAND

Pages with OLD brand have:
- Blue backgrounds (#212A59, #386EB1, #1e2756)
- Yellow accents (#ffc107)
- Light/white backgrounds
- font-poppins
- rounded-full or rounded-[80px] buttons

**These need to be converted to the new dark theme.**

---

## STEP 3: MOBILE RESPONSIVENESS

### Text Sizes
| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero H1 | text-[32px] | md:text-[50px] |
| Section H2 | text-[26px] | md:text-[40px] |
| Subtitle | text-[16px] | md:text-[20px] |
| Body | text-base | md:text-lg |

### Layout Patterns
```jsx
flex flex-col md:flex-row          // Stack → Row
text-center md:text-left           // Center → Left
items-center md:items-start        // Center → Start
w-full md:w-auto                   // Full width → Auto
px-4 md:px-6                       // Padding
py-8 md:py-16                      // Vertical padding
gap-6 md:gap-12                    // Gaps
mb-[50px] md:mb-[100px]            // Margins
```

### Images
```jsx
// Hide decorative images on mobile
className="hidden md:block"

// Constrain image size on mobile
className="max-w-[280px] md:max-w-[460px] h-auto"
```

---

## WORK COORDINATION

| Page | Assigned To | Status |
|------|-------------|--------|
| terminales-tpv | Claude (main) | NEEDS REBRAND |
| dispersion-nomina | Claude (main) | NEEDS REBRAND |
| nominas | Agent 1 | Pending |
| nomina-formulario | Agent 1 | Pending |
| business | Agent 1 | Pending |
| clasica | Agent 2 | Pending |
| form-one | Agent 2 | Pending |
| solicitud-tarjeta | Agent 2 | Pending |

**Task: Rebrand to new dark theme + ensure mobile responsive**

---

## PAGES TO DELETE (different business)
- credito-nominas
- credito-personal
- creditos-pyme
- simulador-credito
