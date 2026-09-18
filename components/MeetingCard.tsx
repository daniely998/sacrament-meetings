import { SacramentMeeting } from "../lib/types";
import Link from "next/link";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <article className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <p>Date: {meeting.date}</p>
            <p>Meeting Type: {meeting.meetingType}</p>
            <p>Presiding: {meeting.presiding}</p>
            <p>Conducting: {meeting.conducting}</p>
            <Link
              href={`/meetings/${meeting.id}`}
              className="text-blue-600 hover:underline"
            >
              View Details
            </Link>

        </article>
    );
}