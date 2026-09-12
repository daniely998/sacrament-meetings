import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Lamont',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother Hills',
    wardBusiness: [{ description: 'Sustaining of new Deacon' }],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: "O God, the Eternal Father" },
    speakers: [
      { name: 'Brother Hawkinds', topic: 'Finding Lost Keys', type: 'speaker' },
      { name: 'Sister Chen', topic: 'Love for Christ', type: 'speaker' },
      { name: 'Sister Winslow', topic: 'Comforted by the Spirit', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Brother West',
    announcements: ['Ward Party: May 16']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Smith',
    openingHymn: { number: 62, title: 'All Creatures of Our God and King' },
    openingPrayer: 'Brother Johnson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 171, title: "With Humble Heart" },
    speakers: [
      { name: 'Sister Choi', topic: 'Blessings of the Temples', type: 'speaker' },
      { name: 'Brother Graham', topic: 'In Gloomy Days', type: 'speaker' }
    ],
    closingHymn: { number: 111, title: 'Rock of Ages' },
    closingPrayer: 'Sister Winslow'
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Lamont',
    openingHymn: { number: 114, title: 'Come unto Him' },
    openingPrayer: 'Sister Graham',
    wardBusiness: [{ description: 'Sustaining of new ward members' }],
    stakeBusiness: false,
    sacramentHymn: { number: 112, title: "Savior, Redeemer of My Soul" },
    speakers: [
      { name: 'Brother Jones', topic: 'As A Ward', type: 'speaker' },
      { name: 'Brother Wilson', topic: 'Why I Go to Church', type: 'speaker' }
    ],
    closingHymn: { number: 52, title: 'The Day Dawn is Breaking' },
    closingPrayer: 'Brother Chen',
    announcements: ['New ward member welcome party: May 24']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
    openingPrayer: 'Sister Hanks',
    wardBusiness: [{ description: 'Sustaining of new Priest' }],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: "I Stand All Amazed" },
    speakers: [
      { name: 'Sister Poulter', topic: 'My Father in Heaven', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 294, title: 'Love at Home' },
    closingPrayer: 'Sister Holland',
    announcements: ['Stake Conference: June 7']
  }
  // ... add remaining records
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}