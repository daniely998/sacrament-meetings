import { SacramentMeeting, SpeakerItem } from "../lib/types";

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <article className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <p>Date: {meeting.date}</p>
            <p>Meeting Type: {meeting.meetingType}</p>
            <p>Presiding: {meeting.presiding}</p>
            <p>Conducting: {meeting.conducting}</p>
            {meeting.announcements && (
                <section>
                <h2 className="font-semibold">Announcements</h2>
                <ul className="list-disc pl-6">
                    {meeting.announcements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
                </section>
            )}
            <p>Opening Hymn: #{meeting.openingHymn.number} {meeting.openingHymn.title}</p>
            <p>Opening Prayer: {meeting.openingPrayer}</p>
            <section>
                <h2 className="font-semibold">Ward Business</h2>
                <ul className="list-disc pl-6">
                {meeting.wardBusiness.map((item, i) => (
                    <li key={i}>{item.description}</li>
                ))}
                </ul>
            </section>
            <p>Stake Business: {meeting.stakeBusiness ? 'Yes' : 'No'}</p>
            <p>Sacrament Hymn: #{meeting.sacramentHymn.number} {meeting.sacramentHymn.title}</p>
            <section>
                <h2 className="font-semibold">Speakers</h2>
                <ul className="list-disc pl-6">
                {meeting.speakers.map((s: SpeakerItem, i) => (
                    <li key={i}>
                    {s.type === "speaker" ? (
                        <>
                        {s.name} — Topic: {s.topic}
                        </>
                    ) : (
                        <>
                        Musical Number by {s.name}: {s.topic}
                        </>
                    )}
                    </li>
                ))}
                </ul>
            </section>
            <p>Closing Hymn: #{meeting.closingHymn.number} {meeting.closingHymn.title}</p>
            <p>Closing Prayer: {meeting.closingPrayer}</p>

        </article>
    );
}