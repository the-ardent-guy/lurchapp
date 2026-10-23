import { STATIC_PROFILES } from "./profiles";

// The demo pool has no real height/wealth fields, so we derive stable,
// deterministic ones from each profile id. This keeps the "Humans discarded"
// counter honest: it reflects the actual pool against the active filters,
// not an invented statistic.

const INDUSTRY_STANDARD_INCHES = 72; // 6'0"

function hash(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

function heightInches(id: string): number {
  return 60 + (hash(id) % 18); // 60"–77"
}

// 0 = no generational wealth, 1 = comfortable, 2 = old money
function wealthTier(id: string): number {
  return hash(id + "wealth") % 3;
}

// The pool a swiper would actually see (exclude the deleted/unavailable card).
const POOL = STATIC_PROFILES.filter((p) => p.id !== "unavailable");

export const POOL_SIZE = POOL.length;

export function countDiscarded(heightOn: boolean, classistOn: boolean): number {
  return POOL.filter((p) => {
    const tooShort = heightOn && heightInches(p.id) < INDUSTRY_STANDARD_INCHES;
    const tooPoor = classistOn && wealthTier(p.id) === 0;
    return tooShort || tooPoor;
  }).length;
}
