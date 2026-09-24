'use client';

import { useActionState } from 'react';
import { updateMeeting, type State } from '@/lib/action';
import type { SacramentMeeting } from '@/lib/types';

const initialState: State = { message: null, errors: {} };

const fieldClassName =
  'rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200';

function FieldErrors({ field, errors }: { field: keyof NonNullable<State['errors']>; errors?: State['errors'] }) {
  return (
    <div id={`${field}-error`} aria-live="polite" aria-atomic="true">
      {errors?.[field]?.map((error) => (
        <p key={error} className="mt-1 text-sm text-red-300">
          {error}
        </p>
      ))}
    </div>
  );
}

export default function EditMeetingForm({ meeting }: { meeting: SacramentMeeting }) {
  const updateWithId = updateMeeting.bind(null, meeting.id);
  const [state, formAction, isPending] = useActionState(updateWithId, initialState);

  return (
    <form action={formAction} className="grid gap-6 rounded-2xl border border-slate-200 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor="date" className="grid gap-2 text-sm font-semibold text-white">
          Date
          <input type="date" name="date" id="date" aria-describedby="date-error" defaultValue={meeting.date} required className={fieldClassName} />
          <FieldErrors field="date" errors={state.errors} />
        </label>
        <label htmlFor="meetingType" className="grid gap-2 text-sm font-semibold text-white">
          Meeting Type
          <select name="meetingType" id="meetingType" aria-describedby="meetingType-error" defaultValue={meeting.meetingType} className={fieldClassName}>
            <option value="regular">Regular</option><option value="testimony">Testimony</option><option value="stake">Stake</option><option value="general">General</option>
          </select>
          <FieldErrors field="meetingType" errors={state.errors} />
        </label>
        <label htmlFor="presiding" className="grid gap-2 text-sm font-semibold text-white">
          Presiding
          <input type="text" name="presiding" id="presiding" aria-describedby="presiding-error" defaultValue={meeting.presiding} required className={fieldClassName} />
          <FieldErrors field="presiding" errors={state.errors} />
        </label>
        <label htmlFor="conducting" className="grid gap-2 text-sm font-semibold text-white">
          Conducting
          <input type="text" name="conducting" id="conducting" aria-describedby="conducting-error" defaultValue={meeting.conducting} required className={fieldClassName} />
          <FieldErrors field="conducting" errors={state.errors} />
        </label>
      </div>

      <label htmlFor="announcements" className="grid gap-2 text-sm font-semibold text-white">
        Announcements
        <textarea name="announcements" id="announcements" aria-describedby="announcements-error" rows={3} defaultValue={meeting.announcements?.join('\n')} className={fieldClassName} />
        <FieldErrors field="announcements" errors={state.errors} />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor="openingHymnNumber" className="grid gap-2 text-sm font-semibold text-white">
          Opening Hymn Number
          <input type="number" name="openingHymnNumber" id="openingHymnNumber" aria-describedby="openingHymnNumber-error" min={1} defaultValue={meeting.openingHymn.number} required className={fieldClassName} />
          <FieldErrors field="openingHymnNumber" errors={state.errors} />
        </label>
        <label htmlFor="openingHymnTitle" className="grid gap-2 text-sm font-semibold text-white">
          Opening Hymn Title
          <input type="text" name="openingHymnTitle" id="openingHymnTitle" aria-describedby="openingHymnTitle-error" defaultValue={meeting.openingHymn.title} required className={fieldClassName} />
          <FieldErrors field="openingHymnTitle" errors={state.errors} />
        </label>
        <label htmlFor="openingPrayer" className="grid gap-2 text-sm font-semibold text-white md:col-span-2">
          Opening Prayer
          <input type="text" name="openingPrayer" id="openingPrayer" aria-describedby="openingPrayer-error" defaultValue={meeting.openingPrayer} required className={fieldClassName} />
          <FieldErrors field="openingPrayer" errors={state.errors} />
        </label>
      </div>

      <label htmlFor="wardBusiness" className="grid gap-2 text-sm font-semibold text-white">
        Ward Business
        <textarea name="wardBusiness" id="wardBusiness" aria-describedby="wardBusiness-error" rows={3} defaultValue={meeting.wardBusiness.map((item) => item.description).join('\n')} className={fieldClassName} />
        <FieldErrors field="wardBusiness" errors={state.errors} />
      </label>

      <label htmlFor="stakeBusiness" className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-800">
        <input type="checkbox" name="stakeBusiness" id="stakeBusiness" aria-describedby="stakeBusiness-error" defaultChecked={meeting.stakeBusiness} className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-500" />
        <FieldErrors field="stakeBusiness" errors={state.errors} />
        Stake business
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor="sacramentHymnNumber" className="grid gap-2 text-sm font-semibold text-white">
          Sacrament Hymn Number
          <input type="number" name="sacramentHymnNumber" id="sacramentHymnNumber" aria-describedby="sacramentHymnNumber-error" min={1} defaultValue={meeting.sacramentHymn.number} required className={fieldClassName} />
          <FieldErrors field="sacramentHymnNumber" errors={state.errors} />
        </label>
        <label htmlFor="sacramentHymnTitle" className="grid gap-2 text-sm font-semibold text-white">
          Sacrament Hymn Title
          <input type="text" name="sacramentHymnTitle" id="sacramentHymnTitle" aria-describedby="sacramentHymnTitle-error" defaultValue={meeting.sacramentHymn.title} required className={fieldClassName} />
          <FieldErrors field="sacramentHymnTitle" errors={state.errors} />
        </label>
      </div>

      <label htmlFor="speakers" className="grid gap-2 text-sm font-semibold text-white">
        Speakers
        <textarea name="speakers" id="speakers" aria-describedby="speakers-error" rows={4} defaultValue={meeting.speakers.map((speaker) => speaker.name).join('\n')} className={`${fieldClassName} font-mono text-sm`} />
        <FieldErrors field="speakers" errors={state.errors} />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor="closingHymnNumber" className="grid gap-2 text-sm font-semibold text-white">
          Closing Hymn Number
          <input type="number" name="closingHymnNumber" id="closingHymnNumber" aria-describedby="closingHymnNumber-error" min={1} defaultValue={meeting.closingHymn.number} required className={fieldClassName} />
          <FieldErrors field="closingHymnNumber" errors={state.errors} />
        </label>
        <label htmlFor="closingHymnTitle" className="grid gap-2 text-sm font-semibold text-white">
          Closing Hymn Title
          <input type="text" name="closingHymnTitle" id="closingHymnTitle" aria-describedby="closingHymnTitle-error" defaultValue={meeting.closingHymn.title} required className={fieldClassName} />
          <FieldErrors field="closingHymnTitle" errors={state.errors} />
        </label>
      </div>

      <label htmlFor="closingPrayer" className="grid gap-2 text-sm font-semibold text-white">
        Closing Prayer
        <input type="text" name="closingPrayer" id="closingPrayer" aria-describedby="closingPrayer-error" defaultValue={meeting.closingPrayer} required className={fieldClassName} />
        <FieldErrors field="closingPrayer" errors={state.errors} />
      </label>

      <div className="flex justify-end pt-2">
        <button type="submit" disabled={isPending} className="rounded-xl bg-slate-800 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60">
          {isPending ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
