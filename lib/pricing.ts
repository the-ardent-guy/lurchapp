// ─── Lurch pricing constants ────────────────────────────────────────────────
// Single source of truth for every price in the app. Showcase only - no real
// payment processor is wired anywhere. Pay CTAs simulate success / satire.
//
// Curiosity Tax (the subscription paywall) is ₹299/mo EVERYWHERE: /matches,
// Ex on Record unlock, AI wingman. Merch/pay joke prices are deliberately
// DISTINCT and must not be "fixed" into 299.

export const CURIOSITY_TAX_INR = 299; // subscription paywall (matches, ex on record, wingman)
export const SUPER_LURCH_INR = 99; // priority like
export const BOOST_SPIN_INR = 99; // boost roulette spin
export const OPENER_SMILE_INR = 49; // "Hey :)" opening line tier
export const MERCH_TEE_INR = 699; // marketing shop tee
export const PAY_JOKE_TEE_INR = 799; // /pay absurdist tee - do NOT "fix" into 299
export const PAY_JOKE_PUFF_INR = 20; // /pay veg puff - India gag, keep

export const ONBOARDING_STEPS = 7; // gender, preference, attachment, wounds, interests, processing, score
export const SWIPE_FATIGUE_AFTER = 8; // swipes before the fatigue interstitial

// Convenience formatted labels
export const CURIOSITY_TAX_LABEL = `₹${CURIOSITY_TAX_INR}/mo`;
