import { redirect } from "next/navigation";

// No bare framework 404 — these all funnel to the Curiosity Tax on /matches.
export default function Page() {
  redirect("/matches");
}
