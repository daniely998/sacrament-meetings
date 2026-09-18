import Link from 'next/link';
import React from "react";

// Utility: get the most recent Sunday as YYYY-MM-DD
export function getRecentSundayId(): string {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  return sunday.toISOString().split("T")[0];
}

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>
        <Link href="/">Home</Link> | {' '}
        <Link href="/meetings">All Meetings</Link>
      </nav>
      {children}
    </section>
  );
}