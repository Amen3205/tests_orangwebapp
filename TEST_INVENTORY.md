# Test Inventory - Shady Meadows B&B

**Date:** 26 March 2026  
**Total Tests:** 20 unique tests  
**Total Executions:** 60 (20 tests × 3 browsers)  
**Status:** ✅ All tests passing

---

## Test Summary by File

### 1️⃣ booking.spec.js (3 tests)
| Test # | Test Name | Description | Type |
|--------|-----------|-------------|------|
| 1 | Open booking form | Verify that booking form is visible on page | UI Visibility |
| 2 | Homepage loads correctly | Verify that page loads with correct URL | Navigation |
| 3 | Booking form has input fields | Verify that booking form contains input fields | Form Validation |

---

### 2️⃣ home.spec.js (4 tests)
| Test # | Test Name | Description | Type |
|--------|-----------|-------------|------|
| 4 | Home page loads | Verify that home page URL is correct | Navigation |
| 5 | Rooms displayed on page | Verify that room cards are visible | UI Visibility |
| 6 | Navigation menu visible | Verify that navigation menu is displayed | UI Visibility |
| 7 | Footer visible and contains content | Verify that footer is visible and has content | UI Visibility |

---

### 3️⃣ search.spec.js (10 tests)
| Test # | Test Name | Description | Type |
|--------|-----------|-------------|------|
| 8 | Page navigation works | Click Rooms link and verify rooms are visible | Navigation |
| 9 | Contact section visible | Verify that contact section is visible | UI Visibility |
| 10 | Room cards are clickable | Verify that room cards and book buttons are clickable | Interaction |
| 11 | Multiple rooms displayed | Verify that more than one room card is displayed | Content Validation |
| 12 | Room cards have titles | Verify that room titles are visible in cards | Content Validation |
| 13 | Amenities visible on rooms | Verify that room amenity badges are displayed | Content Validation |
| 14 | Booking section scrollable | Click Booking link and verify section is in viewport | Navigation |
| 15 | Room prices visible | Verify that room prices are displayed | Content Validation |
| 16 | Hero section visible | Verify that hero section is visible on page | UI Visibility |
| 17 | Location section with map visible | Verify that location section and map are visible | UI Visibility |

---

### 4️⃣ ui.spec.js (3 tests)
| Test # | Test Name | Description | Type |
|--------|-----------|-------------|------|
| 18 | Mobile responsive | Verify mobile viewport (375x667) renders correctly | Responsive |
| 19 | Navigation visible | Verify navigation menu is visible | UI Visibility |
| 20 | Page reload stable | Verify page reloads without errors | Stability |

---

## Test Categories Breakdown

```
UI Visibility............. 8 tests (40%)
Navigation............... 4 tests (20%)
Content Validation........ 4 tests (20%)
Interaction.............. 1 test  (5%)
Form Validation.......... 1 test  (5%)
Responsive............... 1 test  (5%)
Stability................ 1 test  (5%)
                         ─────────────
                         20 tests (100%)
```

---

## Browsers Tested

- ✅ **Chromium** (Google Chrome equivalent)
- ✅ **Firefox** 
- ✅ **WebKit** (Safari equivalent)

---

## Test Execution Commands

```bash
# Run all tests
npm test

# Run with visible browser
npm run test:headed

# Run with interactive UI
npm run test:ui

# Run specific file
npx playwright test tests/booking.spec.js

# Generate HTML report
npx playwright show-report
```

---

## Key Testing Areas

### Navigation Testing (4 tests)
- Home page loads correctly
- Links navigate to correct sections
- Booking navigation works
- Page navigation between sections

### Content Validation (4 tests)
- Rooms are displayed
- Prices are visible
- Room titles and descriptions visible
- Amenities are shown

### UI/UX Testing (8 tests)
- Navigation menu visibility
- Footer visibility
- Booking form accessibility
- Hero section visibility
- Location section visibility
- Mobile responsiveness (375x667)
- Page reload stability

### Interaction Testing (1 test)
- Room cards clickable
- Booking buttons functional

### Form Testing (1 test)
- Booking form validation
- Input fields present

---

**Last Updated:** 26 March 2026

