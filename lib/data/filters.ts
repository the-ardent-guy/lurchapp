import { STATIC_PROFILES } from "./profiles";

// The demo pool has no real height/wealth/etc fields, so we derive stable,
// deterministic ones from each profile id. This keeps the "Humans discarded"
// counter honest: it reflects the actual pool against the active filters,
// not an invented statistic. ghostRisk is a REAL field on each profile.

const INDUSTRY_STANDARD_INCHES = 72; // 6'0"
const GHOST_THRESHOLD = 65;

function hash(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

const heightInches = (id: string) => 60 + (hash(id) % 18); // 60"–77"
const wealthTier = (id: string) => hash(id + "wealth") % 3; // 0 = none
const holdsFish = (id: string) => hash(id + "fish") % 2 === 0; // ~half
const asksHeightFirst = (id: string) => hash(id + "height") % 5 < 2; // ~40%
const textsTheirEx = (id: string) => hash(id + "ex") % 3 === 0; // ~33%
const wontTextFirst = (id: string) => hash(id + "first") % 2 === 0; // ~half

const POOL = STATIC_PROFILES.filter((p) => p.id !== "unavailable");
export const POOL_SIZE = POOL.length;

export interface FilterFlags {
  height?: boolean; // Industry Standard 6'0"+
  classist?: boolean; // generational wealth only
  ghostProof?: boolean; // hide high ghost risk
  noFish?: boolean; // women gag: hide fish-pic / gym-mirror types
  measuredEnough?: boolean; // men gag: hide people who ask your height first
  noExTexters?: boolean; // hide people still texting their ex
  initiators?: boolean; // only people who'll text first
}

export function countDiscarded(f: FilterFlags): number {
  return POOL.filter((p) => {
    if (f.height && heightInches(p.id) < INDUSTRY_STANDARD_INCHES) return true;
    if (f.classist && wealthTier(p.id) === 0) return true;
    if (f.ghostProof && p.ghostRisk >= GHOST_THRESHOLD) return true;
    if (f.noFish && holdsFish(p.id)) return true;
    if (f.measuredEnough && asksHeightFirst(p.id)) return true;
    if (f.noExTexters && textsTheirEx(p.id)) return true;
    if (f.initiators && wontTextFirst(p.id)) return true;
    return false;
  }).length;
}
