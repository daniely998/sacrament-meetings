// app/meetings/page.tsx
import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

export default async function MeetingsListPage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/meetings`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch meetings");
  }

  const meetings: SacramentMeeting[] = await res.json();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Meetings Overview</h1>
      <section className="space-y-6">
        {meetings.map((m) => (
          <MeetingCard key={m.id} meeting={m} />
        ))}
      </section>
    </main>
  );
}
