import { redirect } from "next/navigation";
import { SacramentMeeting } from "@/lib/types";

// Helper: format today's date as YYYY-MM-DD
function getTodayId(): string {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export default async function CurrentMeetingPage() {
  const todayId = getTodayId();

  const res = await fetch("/api/meetings", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch meetings");

  const meetings: SacramentMeeting[] = await res.json();

  // Normalize both sides to YYYY-MM-DD before comparing
  const normalize = (d: string) => new Date(d).toISOString().split("T")[0];
  const meeting = meetings.find((m) => normalize(m.date) === todayId);

  if (meeting) {
    redirect(`/meetings/${meeting.id}`);
  } else {
    redirect("/meetings");
  }
}
