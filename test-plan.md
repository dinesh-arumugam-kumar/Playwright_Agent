# GreenKart E-commerce Application Test Plan

## Application Overview

GreenKart is an e-commerce web application for purchasing vegetables and fruits online. The application allows users to browse products, search for items, adjust quantities, add items to cart, apply promo codes, and complete the checkout process. The application features a home page with product listings, a top deals/offers page with discounted items, a shopping cart, and a checkout flow with country selection and terms acceptance.

## Test Scenarios

### 1. Homepage and Product Browsing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage displays all products

**File:** `tests/homepage/display-products.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/seleniumPractise/#/
  2. Wait for the page to load completely
  3. Verify the GreenKart header is visible
  4. Verify the search box is present and displays placeholder text 'Search for Vegetables and Fruits'
  5. Verify the cart icon is visible in the header
  6. Verify the items counter shows '0' and price counter shows '0'
  7. Scroll down to view all product listings
  8. Verify at least 30 products are displayed with names, prices, and quantity controls

**Expected Results:**
  - Page loads successfully with title 'GreenKart - veg and fruits kart'
  - Header with GREENKART branding is visible
  - Search box with proper placeholder text is displayed
  - Cart icon and item/price counters are visible in the header
  - All products display with images, names, prices (₹ symbol), quantity spinners (-, number, +), and ADD TO CART button

#### 1.2. Verify navigation links are functional

**File:** `tests/homepage/navigation.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Verify the 'Top Deals' link is visible
  3. Click on the 'Top Deals' link
  4. Verify the URL changes to #/offers
  5. Verify the offers page loads with a table of discounted products
  6. Click on the GreenKart logo or use browser back navigation
  7. Verify you return to the home page

**Expected Results:**
  - 'Top Deals' link is clickable and functional
  - Clicking 'Top Deals' navigates to the offers page (#/offers)
  - Offers page displays with a sortable table of products with discounts
  - Navigation back to home page works correctly

#### 1.3. Verify search functionality filters products

**File:** `tests/homepage/search.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Click on the search box
  3. Type 'Tomato' in the search field
  4. Verify only Tomato product is displayed
  5. Verify other products are hidden from the results
  6. Clear the search box
  7. Verify all products are displayed again
  8. Search for 'Mango'
  9. Verify only Mango product is shown

**Expected Results:**
  - Search box accepts input without errors
  - Search filters products in real-time based on the search term
  - Only matching products are displayed in search results
  - Clearing search restores the full product list
  - Search is case-insensitive and matches product names

### 2. Product Interaction and Cart Management

**Seed:** `tests/seed.spec.ts`

#### 2.1. Test quantity increment and decrement controls

**File:** `tests/cart/quantity-controls.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Find the Tomato product card
  3. Verify the quantity spinner shows '1' by default
  4. Click the '+' button to increment quantity
  5. Verify the spinbutton value changes to '2'
  6. Click the '+' button again
  7. Verify the spinbutton value changes to '3'
  8. Click the '–' button to decrement quantity
  9. Verify the spinbutton value changes back to '2'
  10. Click the '–' button to decrement to '1'
  11. Verify you cannot decrement below '1' (test if applicable)

**Expected Results:**
  - Quantity spinner displays '1' as default value
  - '+' button increments quantity correctly
  - '–' button decrements quantity correctly
  - Quantity value updates in real-time without page reload
  - Quantity cannot go below 1 (if such validation exists)

#### 2.2. Test adding single product to cart

**File:** `tests/cart/add-single-product.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Find the Brocolli product
  3. Verify the ADD TO CART button is displayed
  4. Click the ADD TO CART button
  5. Verify the button changes to show '✔ ADDED' or similar confirmation
  6. Verify the header cart counter shows '1' item
  7. Verify the header price counter shows '120' (price of Brocolli)
  8. Click the Cart link in the header
  9. Verify Brocolli appears in the cart with quantity 1 and price ₹120

**Expected Results:**
  - ADD TO CART button is functional and clickable
  - Button changes state after clicking to show item was added
  - Cart counter in header updates to show correct number of items
  - Price total in header updates to show correct total amount
  - Item appears in cart with correct product name, quantity, and price

#### 2.3. Test adding multiple different products to cart

**File:** `tests/cart/add-multiple-products.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Click ADD TO CART for Brocolli (₹120)
  3. Click ADD TO CART for Cauliflower (₹60)
  4. Click ADD TO CART for Tomato (₹16)
  5. Verify the items counter shows '3'
  6. Verify the price counter shows '196' (120+60+16)
  7. Click the Cart link
  8. Verify all three products appear in the cart
  9. Verify each product shows quantity 1 and correct individual prices
  10. Verify the total shows ₹196

**Expected Results:**
  - Multiple ADD TO CART clicks add all items to cart
  - Cart counter increments correctly for each addition
  - Price counter accumulates the sum of all added product prices
  - Cart page displays all added products
  - Cart shows correct quantities and prices for each item
  - Total price is calculated correctly

#### 2.4. Test removing item from cart

**File:** `tests/cart/remove-item.spec.ts`

**Steps:**
  1. Add Brocolli to cart (₹120)
  2. Click the Cart link to navigate to cart page
  3. Verify Brocolli is in the cart
  4. Click the '×' button next to Brocolli to remove it
  5. Verify the product is removed from the cart
  6. Verify the cart becomes empty or shows the next product if multiple items
  7. Verify the header counters update to reflect removal

**Expected Results:**
  - Remove button (×) is functional and clickable
  - Clicking remove deletes the product from the cart
  - Cart updates immediately after removal
  - Cart counters and totals update correctly

### 3. Checkout and Order Processing

**Seed:** `tests/seed.spec.ts`

#### 3.1. Test empty cart checkout attempt

**File:** `tests/checkout/empty-cart.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Click the Cart link
  3. Verify the cart is empty (shows 'Your cart is empty!' message)
  4. Verify the PROCEED TO CHECKOUT button is visible and disabled or exists

**Expected Results:**
  - Empty cart displays appropriate empty state message
  - PROCEED TO CHECKOUT button is present

#### 3.2. Test checkout with single product

**File:** `tests/checkout/single-product-checkout.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Add Brocolli to cart
  3. Click the Cart link to navigate to cart page
  4. Verify the cart shows 'Brocolli - 1 Kg' with quantity 1 and price ₹120
  5. Verify the cart summary shows: 'No. of Items: 1', 'Total Amount: 120', 'Discount: 0%', 'Total After Discount: 120'
  6. Click the PROCEED TO CHECKOUT button
  7. Verify the URL changes to #/country
  8. Verify the checkout page displays a country dropdown with 'Select' as default
  9. Verify a checkbox for 'Agree to the Terms & Conditions' is present
  10. Verify the Proceed button is visible

**Expected Results:**
  - Cart page displays the correct product, quantity, and price
  - Cart summary calculates totals correctly
  - PROCEED TO CHECKOUT button is functional and navigates to country selection page
  - Country selection page loads with proper form elements

#### 3.3. Test promo code functionality

**File:** `tests/checkout/promo-code.spec.ts`

**Steps:**
  1. Add multiple products to cart (total ₹200)
  2. Click the Cart link
  3. Verify the total amount shows ₹200 with 0% discount
  4. Click on the promo code input field
  5. Type a test promo code (e.g., 'TESTCODE')
  6. Click the 'Apply' button
  7. Observe if the discount is applied or if an error message appears
  8. Test with an empty promo code field
  9. Verify the behavior with invalid codes

**Expected Results:**
  - Promo code input field accepts text input
  - Apply button is functional and clickable
  - Valid promo codes apply discount and update the total
  - Invalid codes show appropriate error or message
  - Discount percentage and total after discount update correctly

#### 3.4. Test country selection and terms acceptance

**File:** `tests/checkout/country-selection.spec.ts`

**Steps:**
  1. Add a product to cart
  2. Navigate to checkout and go to the country selection page
  3. Verify the country dropdown displays 'Select' as default
  4. Click on the dropdown to expand it
  5. Verify multiple countries are listed (Afghanistan, India, United States, etc.)
  6. Select 'India' from the dropdown
  7. Verify 'India' is now selected
  8. Verify the Terms & Conditions checkbox is unchecked
  9. Try to click the Proceed button without accepting terms
  10. Verify the button does not proceed (if validation exists)
  11. Click the Terms & Conditions checkbox
  12. Verify the checkbox is now checked
  13. Click the Proceed button
  14. Verify the page navigates to the success/confirmation page

**Expected Results:**
  - Country dropdown opens and displays available countries
  - Selecting a country updates the dropdown value
  - Terms & Conditions checkbox can be toggled
  - Proceed button requires both country selection and terms acceptance
  - Clicking Proceed with valid selections completes the checkout process

#### 3.5. Test order completion and success message

**File:** `tests/checkout/order-completion.spec.ts`

**Steps:**
  1. Add a product to cart
  2. Navigate through the checkout process
  3. Select a country
  4. Accept the Terms & Conditions
  5. Click the Proceed button
  6. Verify the page displays 'Thank you, your order has been placed successfully'
  7. Verify the page displays message about redirecting to home
  8. Verify a 'Home' link is present
  9. Click the Home link
  10. Verify you are redirected to the home page
  11. Verify the cart is now empty (counter shows 0)

**Expected Results:**
  - Order completion page displays success message
  - Success page shows confirmation text about order placement
  - Home link is present and functional
  - Clicking Home redirects to home page
  - Cart resets after successful order (counter shows 0)

### 4. Top Deals/Offers Page

**Seed:** `tests/seed.spec.ts`

#### 4.1. Test offers page table functionality

**File:** `tests/offers/table-display.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/seleniumPractise/#/offers
  2. Verify the page displays a data table with columns: 'Veg/fruit name', 'Price', 'Discount price'
  3. Verify the table contains at least 5 products (Wheat, Tomato, Strawberry, Rice, Potato)
  4. Verify each row displays product name, original price, and discounted price
  5. Verify the table shows 5 rows by default
  6. Verify pagination controls are visible at the top of the table

**Expected Results:**
  - Offers page loads successfully
  - Table displays with proper column headers
  - All products display with correct data
  - Page size is set to 5 items by default
  - Pagination controls are present and functional

#### 4.2. Test table sorting and column headers

**File:** `tests/offers/sorting.spec.ts`

**Steps:**
  1. Navigate to the offers page
  2. Verify the table is sorted by 'Veg/fruit name' in descending order
  3. Click on the 'Veg/fruit name' column header
  4. Verify the sort order changes (should toggle ascending/descending)
  5. Click on the 'Price' column header
  6. Verify the table sorts by the Price column
  7. Click on the 'Discount price' column header
  8. Verify the table sorts by the Discount price column
  9. Verify an alert or indicator shows the current sort order

**Expected Results:**
  - Table initially displays in descending order by name
  - Column headers are clickable and functional
  - Clicking a header sorts the table by that column
  - Sort order toggles between ascending and descending
  - Sort indicator clearly shows the current sort state

#### 4.3. Test pagination functionality

**File:** `tests/offers/pagination.spec.ts`

**Steps:**
  1. Navigate to the offers page
  2. Verify page 1 is currently active
  3. Verify the 'First' and 'Previous' buttons are disabled
  4. Verify the 'Next' and 'Last' buttons are enabled
  5. Click the 'Next' button
  6. Verify page 2 loads with new products
  7. Verify the page number indicator shows '2 (current)'
  8. Click on page number '3'
  9. Verify page 3 loads
  10. Click the 'Last' button
  11. Verify the last page loads (page 4)
  12. Verify the 'Next' and 'Last' buttons are now disabled
  13. Verify the 'Previous' button is enabled
  14. Click the 'First' button
  15. Verify you return to page 1

**Expected Results:**
  - Pagination controls display correctly
  - Page navigation buttons work as expected
  - Table content updates when navigating between pages
  - Current page indicator updates correctly
  - First/Previous/Next/Last buttons enable/disable appropriately

#### 4.4. Test page size selector

**File:** `tests/offers/page-size.spec.ts`

**Steps:**
  1. Navigate to the offers page
  2. Verify the page size dropdown shows '5' as default
  3. Click the page size dropdown
  4. Verify options are available: 5, 10, 20
  5. Select '10' from the dropdown
  6. Verify the table now displays 10 products per page
  7. Select '20' from the dropdown
  8. Verify the table now displays 20 products per page
  9. Verify the pagination adjusts accordingly

**Expected Results:**
  - Page size dropdown is functional
  - Changing page size updates the table immediately
  - Table displays the correct number of rows based on selection
  - Pagination adjusts when page size changes

#### 4.5. Test search functionality in offers page

**File:** `tests/offers/search.spec.ts`

**Steps:**
  1. Navigate to the offers page
  2. Verify the 'Search:' field is visible
  3. Click on the search field
  4. Type 'Tomato' in the search field
  5. Verify the table filters to show only Tomato
  6. Clear the search field
  7. Verify the table shows all products again
  8. Search for 'Wheat'
  9. Verify only Wheat is displayed
  10. Test searching with partial text 'tato'
  11. Verify the search is case-insensitive

**Expected Results:**
  - Search field accepts input
  - Table filters based on search term in real-time
  - Search works across product names
  - Clearing search restores full product list
  - Search is case-insensitive

#### 4.6. Test delivery date picker

**File:** `tests/offers/date-picker.spec.ts`

**Steps:**
  1. Navigate to the offers page
  2. Verify the 'Delivery Date' section is visible at the bottom
  3. Verify the date picker displays three input fields: MM / DD / YYYY
  4. Verify calendar navigation buttons are present (< and >)
  5. Click on the month field and verify it accepts numeric input
  6. Type '03' in the month field
  7. Click on the day field and type '15'
  8. Click on the year field and type '2026'
  9. Verify the date fields update with the entered values
  10. Test the calendar navigation buttons to change dates
  11. Verify the date picker accepts valid dates
  12. Test with invalid date combinations (if validation exists)

**Expected Results:**
  - Delivery date section is visible
  - Date picker fields accept numeric input
  - Date format is MM/DD/YYYY
  - Calendar navigation buttons function correctly
  - Date picker updates with user input

### 5. Navigation and Page Navigation

**Seed:** `tests/seed.spec.ts`

#### 5.1. Test Terms and Conditions page

**File:** `tests/navigation/terms-page.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Add a product to cart
  3. Go to checkout and select a country
  4. Click on the 'Terms & Conditions' link
  5. Verify the page URL changes to #/policy
  6. Verify the page displays policy/terms content
  7. Verify a 'Home' link is present on the policy page
  8. Click the Home link
  9. Verify you return to the home page

**Expected Results:**
  - Terms & Conditions link is clickable from checkout page
  - Policy page loads with URL #/policy
  - Policy page displays terms content
  - Home link on policy page navigates back to home

#### 5.2. Test external link navigation (Course link)

**File:** `tests/navigation/external-links.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Verify the 'Limited offer - FREE Core Java & QA Resume course' link is visible
  3. Verify the link URL points to https://rahulshettyacademy.com/ (external course page)

**Expected Results:**
  - External course link is present and visible
  - Link has correct external URL

#### 5.3. Test Flight Booking external link

**File:** `tests/navigation/flight-booking.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Verify the 'Flight Booking' link is visible in the header
  3. Verify the link URL points to https://rahulshettyacademy.com/dropdownsPractise/

**Expected Results:**
  - Flight Booking link is present in the header
  - Link has correct external URL

### 6. Edge Cases and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 6.1. Test checkout without adding products

**File:** `tests/edge-cases/empty-checkout.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Verify the cart is empty (Items: 0, Price: 0)
  3. Click the Cart link
  4. Verify the cart page shows the empty cart message 'Your cart is empty!'
  5. Verify the PROCEED TO CHECKOUT button is visible
  6. Click PROCEED TO CHECKOUT
  7. Observe the behavior - page may show empty checkout or redirect appropriately

**Expected Results:**
  - Empty cart is properly handled
  - Cart page displays empty state message
  - PROCEED TO CHECKOUT handles empty cart gracefully

#### 6.2. Test proceed to checkout without country selection

**File:** `tests/edge-cases/no-country-selection.spec.ts`

**Steps:**
  1. Add a product to cart
  2. Navigate to checkout country selection page
  3. Verify the country dropdown shows 'Select' (no country selected)
  4. Verify the Terms & Conditions checkbox is unchecked
  5. Click the Proceed button without selecting a country
  6. Observe if the page prevents progression or shows validation error

**Expected Results:**
  - Proceed button is disabled or shows error if country not selected
  - Validation prevents incomplete checkout

#### 6.3. Test checkout without accepting terms

**File:** `tests/edge-cases/no-terms-acceptance.spec.ts`

**Steps:**
  1. Add a product to cart
  2. Navigate to checkout country selection page
  3. Select 'India' from the country dropdown
  4. Leave the Terms & Conditions checkbox unchecked
  5. Click the Proceed button
  6. Observe if the page prevents progression

**Expected Results:**
  - Proceed button is disabled or shows error if terms not accepted
  - Both country selection and terms acceptance are required

#### 6.4. Test browser back button behavior

**File:** `tests/edge-cases/browser-back.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Add a product to cart
  3. Click the Cart link
  4. Click the browser back button
  5. Verify the page goes back to the home page
  6. Verify the product is still in the cart (cart state is maintained)

**Expected Results:**
  - Browser back button navigates correctly
  - Cart state persists across page navigation

#### 6.5. Test product quantity edge cases

**File:** `tests/edge-cases/quantity-limits.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Find a product and set quantity to 1
  3. Click the decrement button multiple times
  4. Verify the quantity does not go below 1
  5. Set quantity to a high number (e.g., 10)
  6. Click the increment button multiple times
  7. Verify there are no upper limit errors
  8. Add the product to cart with high quantity
  9. Verify the cart accepts high quantities and calculates total correctly

**Expected Results:**
  - Quantity cannot decrease below 1
  - Quantity can increase to reasonable numbers
  - Cart calculations are accurate for any valid quantity

#### 6.6. Test search with special characters

**File:** `tests/edge-cases/search-special-chars.spec.ts`

**Steps:**
  1. Navigate to the home page
  2. Click on the search box
  3. Type special characters: @#$%^&*()
  4. Verify the search does not crash or produce errors
  5. Verify no products are shown (as special characters won't match product names)
  6. Clear the search
  7. Verify all products appear again

**Expected Results:**
  - Search handles special characters without crashing
  - Special character searches return no results
  - Search functionality is robust and error-free
