import MeetingDetail from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";

interface MeetingPageProps {
  params: { id: string };
}

export default async function MeetingDetailPage({ params }: MeetingPageProps) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.VERCEL_URL}/api/meetings/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch meeting");
  }

  const meeting: SacramentMeeting = await res.json();

  return (
    <main className="container mx-auto px-4 py-12">
      <MeetingDetail meeting={meeting} />
    </main>
  );
}
