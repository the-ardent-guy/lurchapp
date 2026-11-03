// Neutral lifestyle photos used as "their other pics" in the detail profile,
// so a card reads like a real dating profile without inventing mismatched faces.
// All from images.unsplash.com (allowed in next.config remotePatterns).

const POOL = [
  { id: "photo-1495474472287-4d71bcdd2085", cap: "the third coffee of the day" },
  { id: "photo-1512820790803-83ca734da794", cap: "books I bought to seem deep" },
  { id: "photo-1502602898657-3e91760cbb34", cap: "that one trip I still talk about" },
  { id: "photo-1485955900006-10f4d324d411", cap: "the plant that is also dying inside" },
  { id: "photo-1517836357463-d25dfeac3438", cap: "gym photo, cropped just badly enough" },
  { id: "photo-1470225620780-dba8ba36b745", cap: "a concert, for the personality" },
  { id: "photo-1414235077428-338989a2e8c0", cap: "I cook. Once. For the photo." },
  { id: "photo-1507525428034-b723cf961d3e", cap: "proof I go outside occasionally" },
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function url(id: string): string {
  return `https://images.unsplash.com/${id}?w=700&q=80&fit=crop`;
}

// Two deterministic, distinct lifestyle shots for a given profile id.
export function lifestyleShots(id: string): { url: string; caption: string }[] {
  const a = hash(id) % POOL.length;
  const b = (hash(id + "x") % (POOL.length - 1));
  const bi = b >= a ? b + 1 : b; // ensure distinct
  return [POOL[a], POOL[bi]].map((p) => ({ url: url(p.id), caption: p.cap }));
}
