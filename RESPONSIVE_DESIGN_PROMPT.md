# Comprehensive Responsive Design Implementation Prompt
## For Next.js + Material UI + Tailwind CSS Projects

---

## Copy-Paste Prompt for Claude Code

```
You are a frontend developer expert in making web applications responsive. This is a Next.js project that needs to be adapted for full responsive design across all devices.

## PROJECT CONTEXT

**Tech Stack:**
- Next.js 15+ (App Router)
- Material UI 7+ (@mui/material)
- Tailwind CSS 4+ (if configured)
- TypeScript

**Current State:**
The application is fully functional but lacks responsive design. Components and pages need to be updated to work seamlessly on mobile (375px+), tablet (768px+), and desktop (1280px+) devices.

---

## OBJECTIVES

1. **Make the entire application fully responsive** across all breakpoints
2. **Ensure touch-friendly UI** with minimum 44x44px touch targets on mobile
3. **Implement responsive typography** that scales appropriately
4. **Create adaptive layouts** that reflow on smaller screens
5. **Optimize navigation** for mobile (hamburger menus, collapsible sidebars)
6. **Maintain visual hierarchy** and usability at all screen sizes
7. **Ensure the build completes without errors**

---

## BREAKPOINTS STRATEGY

Use Material UI's standard breakpoints:

```typescript
xs: 0px     // Mobile portrait (320px - 599px)
sm: 600px   // Mobile landscape / Small tablet (600px - 959px)
md: 960px   // Tablet (960px - 1279px)
lg: 1280px  // Desktop (1280px - 1919px)
xl: 1920px  // Large desktop (1920px+)
```

**Mobile-First Approach:**
Start with mobile styles as the base, then enhance for larger screens using responsive breakpoints.

---

## COMPONENT PATTERNS TO IMPLEMENT

### 1. BUTTONS

**All Buttons (Primary, Secondary, Outlined):**
```tsx
<Button
  variant="contained"
  sx={{
    minHeight: { xs: 44, sm: 48 },           // Touch-friendly minimum
    fontSize: { xs: '0.875rem', sm: '0.9375rem' },
    px: { xs: 2, sm: 3 },                    // Responsive padding
  }}
>
  Button Text
</Button>
```

**Small Buttons (in cards, secondary actions):**
```tsx
<Button
  size="small"
  sx={{
    minHeight: 36,
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    px: { xs: 1.5, sm: 2 },
  }}
>
  Action
</Button>
```

**Icon Buttons:**
```tsx
<IconButton
  sx={{
    width: { xs: 40, sm: 48 },
    height: { xs: 40, sm: 48 },
  }}
>
  <Icon />
</IconButton>
```

### 2. CARDS

**All Cards:**
```tsx
<Card>
  <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
    {/* Content */}
  </CardContent>
</Card>
```

**Card Headers with Actions:**
```tsx
<Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  mb: 2,
  flexDirection: { xs: 'column', sm: 'row' },
  gap: { xs: 1.5, sm: 0 }
}}>
  <Box sx={{ flex: 1, minWidth: 0 }}>
    {/* Title and subtitle */}
  </Box>
  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
    {/* Action buttons or chips */}
  </Box>
</Box>
```

### 3. TYPOGRAPHY

**Page Titles (H4):**
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

**Section Headers (H5):**
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

**Subsection Headers (H6):**
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

**Body Text:**
```tsx
<Typography
  variant="body1"
  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
>
  Body content
</Typography>
```

**Secondary/Caption Text:**
```tsx
<Typography
  variant="body2"
  color="text.secondary"
  sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
>
  Secondary information
</Typography>
```

**Very Small Text:**
```tsx
<Typography
  variant="caption"
  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
>
  Tiny text (use sparingly)
</Typography>
```

### 4. FORM INPUTS

**Text Fields:**
```tsx
<TextField
  fullWidth
  label="Field Label"
  sx={{
    '& .MuiInputBase-input': {
      fontSize: { xs: '0.875rem', sm: '1rem' }
    }
  }}
/>
```

**Select Dropdowns:**
```tsx
<TextField
  select
  fullWidth
  sx={{
    '& .MuiInputBase-input': {
      fontSize: { xs: '0.875rem', sm: '1rem' }
    }
  }}
>
  <MenuItem value="option1">Option 1</MenuItem>
</TextField>
```

**Form Buttons:**
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

### 5. CHIPS & BADGES

```tsx
<Chip
  label="Status"
  color="primary"
  size="small"
  sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
/>
```

### 6. PROGRESS BARS

```tsx
<LinearProgress
  variant="determinate"
  value={progress}
  sx={{ height: { xs: 6, sm: 8 } }}
/>
```

### 7. GRID LAYOUTS

**If using MUI Grid:**
```tsx
<Grid container spacing={{ xs: 2, sm: 3 }}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    {/* Content */}
  </Grid>
</Grid>
```

**If using custom Grid component (check if it supports responsive spacing):**
```tsx
// Test if spacing accepts objects first
// If not, use fixed spacing: spacing={3}
<Grid container spacing={3}>
  <Grid item xs={12} sm={6} md={4}>
    {/* Content */}
  </Grid>
</Grid>
```

### 8. FLEX LAYOUTS

**With Wrapping:**
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

**Responsive Direction:**
```tsx
<Box sx={{
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: { xs: 1.5, sm: 2 },
  alignItems: { xs: 'stretch', sm: 'center' }
}}>
  {/* Items */}
</Box>
```

### 9. LISTS

**List Items (Touch-Friendly):**
```tsx
<ListItem sx={{ minHeight: 48, px: { xs: 1, sm: 2 } }}>
  <ListItemAvatar>
    <Avatar sx={{ width: { xs: 36, sm: 40 }, height: { xs: 36, sm: 40 } }} />
  </ListItemAvatar>
  <ListItemText
    primary={
      <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
        Primary Text
      </Typography>
    }
  />
</ListItem>
```

### 10. NAVIGATION

**Header/AppBar:**
```tsx
<AppBar position="sticky">
  <Toolbar sx={{
    justifyContent: 'space-between',
    px: { xs: 2, sm: 3, md: 4 },
    minHeight: { xs: 56, sm: 64 }
  }}>
    {/* Logo, nav, actions */}
  </Toolbar>
</AppBar>
```

**Sidebar/Drawer:**
```tsx
// Mobile: Temporary drawer (overlay)
// Desktop: Permanent drawer

const isMobile = useMediaQuery(theme.breakpoints.down('md'));

<Drawer
  variant={isMobile ? 'temporary' : 'permanent'}
  open={isMobile ? mobileOpen : true}
  onClose={handleDrawerClose}
  sx={{
    '& .MuiDrawer-paper': {
      width: { xs: 260, md: drawerWidth }
    }
  }}
>
  {/* Sidebar content */}
</Drawer>
```

---

## NAVIGATION PATTERNS

### Hamburger Menu for Mobile

**Header with Menu Icon:**
```tsx
const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('md'));

{isMobile && (
  <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={() => setMobileDrawerOpen(true)}
    sx={{ mr: 1 }}
  >
    <MenuIcon />
  </IconButton>
)}
```

### Responsive Navigation Tabs

```tsx
<Box sx={{
  overflowX: 'auto',
  display: 'flex',
  gap: { xs: 1, sm: 2 },
  '&::-webkit-scrollbar': {
    height: '4px'
  }
}}>
  {tabs.map(tab => (
    <Tab
      key={tab.id}
      sx={{
        whiteSpace: 'nowrap',
        minWidth: 'auto',
        px: { xs: 1.5, sm: 2 },
        fontSize: { xs: '0.875rem', sm: '0.9375rem' }
      }}
    />
  ))}
</Box>
```

---

## CONDITIONAL DISPLAY

**Hide on Mobile:**
```tsx
<Box sx={{ display: { xs: 'none', md: 'block' } }}>
  Desktop Only Content
</Box>
```

**Hide on Desktop:**
```tsx
<Box sx={{ display: { xs: 'block', md: 'none' } }}>
  Mobile Only Content
</Box>
```

**Shortened Text on Mobile:**
```tsx
<Typography>
  <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
    Full Text Here
  </Box>
  <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
    Short
  </Box>
</Typography>
```

---

## CHARTS & DATA VISUALIZATION

**Responsive Chart Container:**
```tsx
<Box sx={{
  height: { xs: 180, sm: 220, md: 250 },
  width: '100%'
}}>
  {/* Chart component */}
</Box>
```

**Chart Headers:**
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
    Time Period
  </Typography>
</Box>
```

**Donut/Pie Charts:**
```tsx
<Box sx={{
  display: 'flex',
  gap: { xs: 2, sm: 3, md: 4 },
  alignItems: 'center',
  flexDirection: { xs: 'column', md: 'row' }
}}>
  {/* Chart */}
  <Box sx={{
    width: { xs: 140, sm: 160, md: 200 },
    height: { xs: 140, sm: 160, md: 200 }
  }}>
    {/* Donut chart */}
  </Box>

  {/* Legend */}
  <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
    {/* Legend items */}
  </Box>
</Box>
```

---

## TABLES

**Responsive Table Options:**

**Option 1: Hide Columns on Mobile**
```tsx
<TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
  Desktop Only Column
</TableCell>
```

**Option 2: Card View on Mobile**
```tsx
// On mobile, render as cards instead of table
{isMobile ? (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    {data.map(item => (
      <Card key={item.id}>
        <CardContent>
          {/* Card layout */}
        </CardContent>
      </Card>
    ))}
  </Box>
) : (
  <Table>
    {/* Traditional table */}
  </Table>
)}
```

**Option 3: Horizontal Scroll**
```tsx
<Box sx={{ overflowX: 'auto' }}>
  <Table sx={{ minWidth: 650 }}>
    {/* Table content */}
  </Table>
</Box>
```

---

## SPACING & PADDING

**Container Padding:**
```tsx
<Container sx={{
  px: { xs: 2, sm: 3, md: 4 },
  py: { xs: 2, sm: 3, md: 4 }
}}>
```

**Margins:**
```tsx
sx={{
  mb: { xs: 2, sm: 3 },      // Margin bottom
  mt: { xs: 1, sm: 2 },      // Margin top
  mx: { xs: 1, sm: 2, md: 3 } // Margin horizontal
}}
```

**Gaps:**
```tsx
sx={{
  gap: { xs: 1, sm: 2 },           // Small gaps
  gap: { xs: 1.5, sm: 2, md: 3 }   // Medium gaps
}}
```

---

## IMPLEMENTATION STEPS

### Phase 1: Core Layout Components
1. Update Header/AppBar with mobile hamburger menu
2. Convert Sidebar to responsive drawer (temporary on mobile, permanent on desktop)
3. Update main layout wrapper to handle drawer state
4. Add responsive padding/spacing to AppLayout/Container

### Phase 2: Typography & Spacing
1. Update all page titles (H1-H6) with responsive font sizes
2. Update body text and captions
3. Adjust spacing (margins, padding, gaps) to be responsive

### Phase 3: Components
1. Update all buttons (primary, secondary, icon buttons)
2. Update all form inputs with responsive font sizing
3. Update cards with responsive padding
4. Update chips, badges, and progress bars
5. Update any charts or data visualizations

### Phase 4: Page-Specific Updates
1. List pages: Make card grids responsive
2. Detail pages: Responsive info grids
3. Form pages: Stack form fields on mobile
4. Dashboard: Responsive stat cards and charts

### Phase 5: Navigation & UX
1. Implement mobile navigation patterns
2. Add touch-friendly tap targets (min 44x44px)
3. Test scrolling and overflow behavior
4. Optimize for landscape mode on tablets

### Phase 6: Testing & Verification
1. Run `npm run build` to check for TypeScript errors
2. Test at all breakpoints:
   - 375px (iPhone SE)
   - 600px (Mobile landscape)
   - 768px (iPad portrait)
   - 1024px (iPad landscape)
   - 1280px+ (Desktop)
3. Verify touch targets on mobile
4. Check text readability at all sizes

---

## CRITICAL REQUIREMENTS

### Touch Targets
- **Minimum 44x44px** for all interactive elements on mobile
- Buttons: `minHeight: { xs: 44, sm: 48 }`
- Icon buttons: `width/height: { xs: 44, sm: 48 }`
- List items: `minHeight: 48`

### Typography Hierarchy
- Never go below **0.7rem (11.2px)** for any text
- Maintain clear visual hierarchy at all screen sizes
- Body text minimum: **0.875rem on mobile, 1rem on desktop**

### Layout Integrity
- No horizontal scrolling (unless intentional like image galleries)
- Content must be readable without zooming
- Maintain proper spacing and breathing room
- Touch targets must not overlap

### Performance
- Use MUI's `useMediaQuery` with SSR: `const isMobile = useMediaQuery(theme.breakpoints.down('md'));`
- Avoid inline media queries in component logic where possible
- Use MUI's `sx` prop for responsive styling

---

## COMMON PATTERNS REFERENCE

### MUI Spacing Scale
```
0.5 = 4px
1   = 8px
1.5 = 12px
2   = 16px
3   = 24px
4   = 32px
```

### Responsive Font Sizes
```
Extra Small:  xs: '0.7rem',  sm: '0.75rem'
Small:        xs: '0.75rem', sm: '0.875rem'
Body:         xs: '0.875rem', sm: '1rem'
Subtitle:     xs: '1rem',    sm: '1.25rem'
H6:           xs: '1rem',    sm: '1.25rem'
H5:           xs: '1.25rem', sm: '1.5rem'
H4:           xs: '1.5rem',  sm: '1.75rem', md: '2rem'
H3:           xs: '1.75rem', sm: '2rem',    md: '2.5rem'
```

### Common Grid Breakpoints
```
Full width mobile, half on tablet:      xs={12} sm={6}
Full width mobile, 2 cols tablet, 4 desktop:  xs={12} sm={6} lg={3}
Full width mobile, 3 cols desktop:      xs={12} md={4}
Half width mobile, 3 cols desktop:      xs={6}  md={4}
```

---

## DELIVERABLES

1. **All pages and components** updated with responsive design
2. **Successful build** with no TypeScript or compilation errors
3. **Responsive design guide document** (optional but recommended) with:
   - All patterns used
   - Component examples
   - Quick reference table
   - Testing checklist
4. **Working hamburger menu** on mobile
5. **Responsive drawer/sidebar** behavior
6. **Touch-friendly UI** throughout

---

## TESTING CHECKLIST

After implementation, verify:

- [ ] Build completes successfully: `npm run build`
- [ ] No TypeScript errors
- [ ] All pages render correctly on mobile (375px)
- [ ] All pages render correctly on tablet (768px)
- [ ] All pages render correctly on desktop (1280px+)
- [ ] Hamburger menu works on mobile
- [ ] Sidebar drawer opens/closes properly
- [ ] All buttons are at least 44px height on mobile
- [ ] All text is readable without zooming
- [ ] No horizontal scrolling on any page
- [ ] Forms are usable on mobile
- [ ] Navigation works smoothly on all devices
- [ ] Charts and visualizations adapt to screen size
- [ ] Touch targets don't overlap
- [ ] Landscape mode works on tablets

---

## SPECIAL CONSIDERATIONS

### Custom Grid Components
If the project uses a custom Grid component:
- Test if it supports responsive spacing: `spacing={{ xs: 2, sm: 3 }}`
- If not, use fixed spacing: `spacing={3}`
- You may see TypeScript errors otherwise

### Tailwind CSS Integration
If Tailwind is configured alongside MUI:
- Prefer MUI's `sx` prop for responsive styling
- Use Tailwind utility classes sparingly for simple responsive utilities
- Avoid mixing Tailwind breakpoints with MUI breakpoints

### Custom Theme
If the project has a custom MUI theme:
- Check for custom breakpoint values
- Respect custom spacing scale if defined
- Use theme colors consistently

---

## EXAMPLE: Complete Responsive Page

```tsx
'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';
import { Add as AddIcon } from '@mui/icons-material';

export default function ResponsivePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppLayout
      title="Page Title"
      module="example"
      showSidebar={true}
    >
      {/* Action Buttons */}
      <Box sx={{
        display: 'flex',
        gap: { xs: 1, sm: 2 },
        mb: { xs: 2, sm: 3 },
        flexWrap: 'wrap'
      }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          {isMobile ? 'Add' : 'Add New Item'}
        </Button>
      </Box>

      {/* Card Grid */}
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 1.5, sm: 0 }
                }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                    {item.title}
                  </Typography>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
```

---

## NOTES

- Focus on **mobile-first** development
- Test frequently at different breakpoints
- Use browser DevTools device emulation
- Consider both portrait and landscape orientations
- Pay attention to **accessibility** (keyboard navigation, screen readers)
- Ensure **performance** on mobile devices
- Use **semantic HTML** where possible
- Follow **Material Design guidelines** for touch targets and spacing

---

## SUCCESS CRITERIA

Your implementation is complete when:

✅ All pages work seamlessly on mobile, tablet, and desktop
✅ Touch targets meet minimum size requirements
✅ Typography is readable at all screen sizes
✅ Navigation is intuitive on all devices
✅ Build completes with zero errors
✅ No horizontal scrolling occurs
✅ UI maintains visual hierarchy across breakpoints
✅ User experience feels native to each device type

---

**Good luck with your responsive design implementation!**
```

---

## HOW TO USE THIS PROMPT

1. **Copy the entire content between the triple backticks** above
2. **Paste into a new Claude Code session**
3. **Customize if needed:**
   - Adjust tech stack versions
   - Add project-specific requirements
   - Modify breakpoints if using custom values
4. **Let Claude analyze your codebase** and implement responsive design
5. **Review the changes** and test at all breakpoints

This prompt is designed to be comprehensive, actionable, and reusable across different Next.js + Material UI + Tailwind projects.
