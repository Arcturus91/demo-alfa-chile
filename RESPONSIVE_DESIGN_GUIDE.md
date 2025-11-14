# Responsive Design Implementation Guide
## Next.js + Material UI + Tailwind CSS

This document outlines all responsive design patterns implemented in the Alfa Chile Demo application.

---

## Table of Contents
1. [Breakpoints](#breakpoints)
2. [Component Patterns](#component-patterns)
3. [Typography Scaling](#typography-scaling)
4. [Touch Targets](#touch-targets)
5. [Layout Patterns](#layout-patterns)
6. [Quick Reference](#quick-reference)

---

## Breakpoints

Using Material UI's standard breakpoints:

```typescript
xs: 0px     // Mobile portrait
sm: 600px   // Mobile landscape / Small tablet
md: 960px   // Tablet
lg: 1280px  // Desktop
xl: 1920px  // Large desktop
```

---

## Component Patterns

### Buttons

**Primary/Action Buttons:**
```tsx
<Button
  sx={{
    minHeight: { xs: 44, sm: 48 },
    fontSize: { xs: '0.875rem', sm: '0.9375rem' },
    px: { xs: 2, sm: 3 }
  }}
>
  Action
</Button>
```

**Small Buttons (in cards):**
```tsx
<Button
  size="small"
  sx={{
    minHeight: 36,
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    px: { xs: 1.5, sm: 2 }
  }}
>
  Action
</Button>
```

### Cards

```tsx
<Card>
  <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
    {/* Content */}
  </CardContent>
</Card>
```

### Chips

```tsx
<Chip
  label="Status"
  size="small"
  sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
/>
```

### Text Fields

```tsx
<TextField
  fullWidth
  sx={{
    '& .MuiInputBase-input': {
      fontSize: { xs: '0.875rem', sm: '1rem' }
    }
  }}
/>
```

### Progress Bars

```tsx
<LinearProgress
  variant="determinate"
  value={progress}
  sx={{ height: { xs: 6, sm: 8 } }}
/>
```

### Grid Spacing

```tsx
<Grid container spacing={{ xs: 2, sm: 3 }}>
  <Grid item xs={12} sm={6} md={4}>
    {/* Content */}
  </Grid>
</Grid>
```

---

## Typography Scaling

### Page Titles (H4)
```tsx
<Typography
  variant="h4"
  sx={{
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
    fontWeight: 700,
    mb: { xs: 2, sm: 3 }
  }}
>
  Page Title
</Typography>
```

### Section Headers (H5)
```tsx
<Typography
  variant="h5"
  sx={{
    fontSize: { xs: '1.25rem', sm: '1.5rem' },
    fontWeight: 700
  }}
>
  Section Header
</Typography>
```

### Subsection Headers (H6)
```tsx
<Typography
  variant="h6"
  sx={{
    fontSize: { xs: '1rem', sm: '1.25rem' },
    fontWeight: 700
  }}
>
  Subsection
</Typography>
```

### Body Text
```tsx
<Typography
  variant="body1"
  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
>
  Body content
</Typography>
```

### Secondary/Caption Text
```tsx
<Typography
  variant="body2"
  color="text.secondary"
  sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
>
  Secondary information
</Typography>
```

### Small Text
```tsx
<Typography
  variant="caption"
  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
>
  Very small text
</Typography>
```

---

## Touch Targets

**Minimum Sizes for Mobile:**
- Buttons: 44px height minimum
- Icon Buttons: 44px × 44px minimum
- List Items: 48px height minimum
- Chips/Tags: No minimum (but use readable font sizes)

**Implementation:**
```tsx
// Button
<Button sx={{ minHeight: 44 }}>

// IconButton
<IconButton sx={{ width: 44, height: 44 }}>

// ListItemButton
<ListItemButton sx={{ minHeight: 48 }}>
```

---

## Layout Patterns

### Flex Containers with Wrapping

```tsx
<Box sx={{
  display: 'flex',
  gap: { xs: 1, sm: 2 },
  flexWrap: 'wrap',
  mb: { xs: 2, sm: 3 }
}}>
  {/* Items */}
</Box>
```

### Responsive Direction

```tsx
<Box sx={{
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: { xs: 1.5, sm: 0 }
}}>
  {/* Items */}
</Box>
```

### Conditional Display

```tsx
// Hide on mobile
<Box sx={{ display: { xs: 'none', md: 'block' } }}>
  Desktop Only
</Box>

// Hide on desktop
<Box sx={{ display: { xs: 'block', md: 'none' } }}>
  Mobile Only
</Box>
```

### Responsive Padding/Margins

```tsx
<Box sx={{
  px: { xs: 2, sm: 3, md: 4 },
  py: { xs: 2, sm: 3, md: 4 },
  mb: { xs: 2, sm: 3 },
  mt: { xs: 1, sm: 2 }
}}>
```

---

## Quick Reference

### Common Responsive Values

| Element | XS (Mobile) | SM (Tablet) | MD+ (Desktop) |
|---------|-------------|-------------|---------------|
| **Button Height** | 44px | 48px | 48px |
| **Button Font** | 0.875rem | 0.9375rem | 0.9375rem |
| **H4 (Page Title)** | 1.5rem | 1.75rem | 2rem |
| **H5 (Section)** | 1.25rem | 1.5rem | 1.5rem |
| **H6 (Subsection)** | 1rem | 1.25rem | 1.25rem |
| **Body** | 0.875rem | 1rem | 1rem |
| **Caption** | 0.75rem | 0.875rem | 0.875rem |
| **Chip Font** | 0.7rem | 0.8125rem | 0.8125rem |
| **Card Padding** | 16px (2) | 24px (3) | 24px (3) |
| **Grid Spacing** | 16px (2) | 24px (3) | 24px (3) |
| **Progress Bar Height** | 6px | 8px | 8px |
| **Gap (Small)** | 8px (1) | 16px (2) | 16px (2) |
| **Gap (Medium)** | 12px (1.5) | 16px (2) | 16px (2) |

### MUI Spacing Scale
```
1 = 8px
2 = 16px
3 = 24px
4 = 32px
```

---

## Header & Navigation

### Mobile Header
- Hamburger menu for sidebar toggle
- Shortened logo text on extra small screens
- Hidden nav links (shown in user menu)
- Responsive icon/avatar sizes

### Module Navigation Tabs
- Horizontal scroll on mobile with custom scrollbar
- Full width display on desktop
- Responsive padding and font sizes

### Sidebar
- **Desktop (≥960px):** Permanent drawer with collapse feature
- **Mobile (<960px):** Temporary drawer (overlay)
- Auto-close on navigation for mobile
- Touch-friendly menu items (48px min height)

---

## Charts

### All Chart Components
```tsx
// BarChart
<Box sx={{ height: { xs: 180, sm: 220, md: 250 } }}>

// DonutChart
<Box sx={{
  width: { xs: 140, sm: 160 },
  height: { xs: 140, sm: 160 }
}}>

// LineChart
<Box sx={{ height: { xs: 180, sm: 220, md: 250 } }}>
```

### Chart Headers
```tsx
<Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  mb: { xs: 2, sm: 3 },
  flexWrap: 'wrap',
  gap: 1
}}>
  <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
    Chart Title
  </Typography>
  <Typography variant="caption" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
    Period
  </Typography>
</Box>
```

---

## Forms

### Form Layout
```tsx
<Grid container spacing={{ xs: 2, sm: 3 }}>
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      label="Field"
      sx={{
        '& .MuiInputBase-input': {
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }
      }}
    />
  </Grid>
</Grid>
```

### Form Buttons
```tsx
<Button
  type="submit"
  variant="contained"
  size="large"
  sx={{
    minHeight: { xs: 44, sm: 48 },
    fontSize: { xs: '0.875rem', sm: '1rem' },
    px: { xs: 3, sm: 4 }
  }}
>
  Submit
</Button>
```

---

## List/Card Views

### List Items
```tsx
<Card>
  <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      mb: 2,
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 1.5, sm: 0 }
    }}>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          Title
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Chip label="Status" size="small" />
      </Box>
    </Box>
  </CardContent>
</Card>
```

---

## Best Practices

### 1. Always Use Responsive Breakpoints
Never use fixed pixel values for sizes that should adapt

### 2. Touch-Friendly Targets
Minimum 44x44px for all interactive elements on mobile

### 3. Readable Typography
Never go below 0.7rem (11.2px) for any text

### 4. Flexible Layouts
Use flexbox with wrap or responsive grid columns

### 5. Test at All Breakpoints
- 375px (iPhone SE)
- 600px (iPad Mini portrait)
- 960px (iPad landscape)
- 1280px (Desktop)

### 6. Spacing Consistency
Use MUI spacing scale (multiples of 8px)

### 7. Progressive Enhancement
Mobile-first: Start with mobile styles, enhance for larger screens

---

## Component Library Reference

### Updated Components
- ✅ Header (mobile hamburger menu)
- ✅ Sidebar (responsive drawer)
- ✅ AppLayout (drawer state management)
- ✅ Charts (all 4 chart types)
- ✅ Grid (custom responsive grid)
- ✅ Dashboard page
- ✅ Production module (all 7 pages)
- ✅ Quality module (all 7 pages)
- ✅ Laboratory module (all 4 pages)
- ✅ KPI indicators page
- ✅ Login page

### Testing Checklist
- [ ] Mobile portrait (375px)
- [ ] Mobile landscape (667px)
- [ ] Tablet portrait (768px)
- [ ] Tablet landscape (1024px)
- [ ] Desktop (1280px+)
- [ ] Touch targets accessible
- [ ] Text readable at all sizes
- [ ] No horizontal scroll
- [ ] Drawers work correctly

---

**Last Updated:** November 2025
**Framework:** Next.js 15 + Material UI 7 + Tailwind CSS 4
