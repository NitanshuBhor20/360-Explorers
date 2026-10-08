# Remove Base Camp Selection Step Implementation Plan

## Repository Research
The booking flow is implemented entirely in a single Next.js client component at [page.tsx](file:///d:/360-Explorers-main/src/app/adventures/[id]/book/page.tsx).

**Current flow (4 steps):**
1. `'details'` - Fill explorer profile, address, expedition date and team size
2. `'selection'` - "Select Your Base" - tent/seat allocation grid with 24 slots (the step to remove)
3. `'payment'` - Razorpay payment initialization
4. `'ticket'` - Receipt/ticket generation with QR code and PDF download

**Other references to "base camp" in the codebase:**
- `Sponsorship.tsx`, `Testimonials.tsx`, `WorldMap.tsx`: Everest Base Camp as an adventure destination (marketing content - NOT related to the booking flow step)
- `README.md`: QR code for base camp check-in (ticket feature - no change needed)
- These are unrelated to the booking flow step and should NOT be touched.

**Only ONE file needs modification: the booking page itself.**

## Files and Modules
- `src/app/adventures/[id]/book/page.tsx`: Remove the 'selection' step, adjust step progression, remove seat/tent selection UI, update progress indicator from 4 to 3 steps, update navigation buttons.

## Implementation Steps
1. **Update step type and state**: Remove `'selection'` from the step union type, remove `selectedSeat` state variable, rename `handleProceedToSelection` to advance directly to `'payment'`, remove unused `handleProceedToPayment` function.
2. **Update progress indicator**: Remove the Selection entry (2nd step) from the `steps` array, leaving 3 steps: Details → Payment → Ticket.
3. **Remove the entire `selection` render block lines 815-898`: Delete the complete JSX block that renders "Select Your Base" tent grid.
4. **Update details form submission**: Change form onSubmit and button to go directly to payment. Update button text from "Continue to Selection" → "Continue to Payment".
5. **Update payment back navigation**: Change the "Back to Selection" button (in the payment step) to go back to `'details'` instead of `'selection'`, and update its label to "Back to Details".
6. **Clean up unused imports**: Remove `Armchair`, `Tent` imports if no longer used anywhere else in the file.

## Dependencies and Considerations
- No backend changes required. The `handlePaymentComplete` does not reference `selectedSeat`; seat was purely a UI-only selection and was never persisted to the database or payment payload.
- The `OrderSummary` component is used in both details and selection steps; after removal it will only appear in details step and ticket has its own layout - no action needed.
- Progress bar width calculation uses `steps.length - 1` will automatically adjust.

## Validation
- Navigate to any adventure book page `/adventures/[id]/book
- Progress indicator should show 3 steps (Details, Payment, Ticket)
- Fill in details form, click "Continue to Payment" should advance directly to payment step
- Payment step "Back" button should return to details
- Payment flow and ticket generation should work unchanged

## Risks
- **Risk**: Accidentally removing something critical to the payment or ticket flow. **Handling**: Only edit the specific lines identified; payment flow will be kept intact.
- **Risk**: Progress indicator miscalculation. **Handling**: The progress bar uses `steps.findIndex` and `steps.length - 1` which are dynamic, so removing one array entry automatically adjusts.
