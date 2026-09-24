'use client'
import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/action';

const initialState: State = { message: null, errors: {} };

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(createMeeting, initialState);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">New Meeting</h1>
      </div>

      <form
        action={formAction}
        className="grid gap-6 rounded-2xl border border-slate-200 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:p-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="date" className="grid gap-2 text-sm font-semibold text-white">
            Date
            <input
              type="date"
              name="date"
              id="date"
              aria-describedby="date-error"
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="date-error" aria-live="polite" aria-atomic="true">
              {state.errors?.date?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>

          <label htmlFor="meetingType" className="grid gap-2 text-sm font-semibold text-white">
            Meeting Type
            <select
              name="meetingType"
              id="meetingType"
              aria-describedby="meetingType-error"
              defaultValue="regular"
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            >
              <option value="regular">Regular</option>
              <option value="testimony">Testimony</option>
              <option value="stake">Stake</option>
              <option value="general">General</option>
            </select>
            <div id="meetingType-error" aria-live="polite" aria-atomic="true">
              {state.errors?.meetingType?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>

          <label htmlFor="presiding" className="grid gap-2 text-sm font-semibold text-white">
            Presiding
            <input
              type="text"
              name="presiding"
              id="presiding"
              aria-describedby="presiding-error"
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="presiding-error" aria-live="polite" aria-atomic="true">
              {state.errors?.presiding?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>

          <label htmlFor="conducting" className="grid gap-2 text-sm font-semibold text-white">
            Conducting
            <input
              type="text"
              name="conducting"
              id="conducting"
              aria-describedby="conducting-error"
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="conducting-error" aria-live="polite" aria-atomic="true">
              {state.errors?.conducting?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>
        </div>

        <label htmlFor="announcements" className="grid gap-2 text-sm font-semibold text-white">
          Announcements
          <textarea
            name="announcements"
            id="announcements"
            aria-describedby="announcements-error"
            rows={3}
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
          />
          <div id="announcements-error" aria-live="polite" aria-atomic="true">
            {state.errors?.announcements?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
          </div>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="openingHymnNumber" className="grid gap-2 text-sm font-semibold text-white">
            Opening Hymn Number
            <input
              type="number"
              name="openingHymnNumber"
              id="openingHymnNumber"
              aria-describedby="openingHymnNumber-error"
              min={1}
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="openingHymnNumber-error" aria-live="polite" aria-atomic="true">
              {state.errors?.openingHymnNumber?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>

          <label htmlFor="openingHymnTitle" className="grid gap-2 text-sm font-semibold text-white">
            Opening Hymn Title
            <input
              type="text"
              name="openingHymnTitle"
              id="openingHymnTitle"
              aria-describedby="openingHymnTitle-error"
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="openingHymnTitle-error" aria-live="polite" aria-atomic="true">
              {state.errors?.openingHymnTitle?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>

          <label htmlFor="openingPrayer" className="grid gap-2 text-sm font-semibold text-white md:col-span-2">
            Opening Prayer
            <input
              type="text"
              name="openingPrayer"
              id="openingPrayer"
              aria-describedby="openingPrayer-error"
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="openingPrayer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.openingPrayer?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>
        </div>

        <label htmlFor="wardBusiness" className="grid gap-2 text-sm font-semibold text-white">
          Ward Business
          <textarea
            name="wardBusiness"
            id="wardBusiness"
            aria-describedby="wardBusiness-error"
            rows={3}
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
          />
          <div id="wardBusiness-error" aria-live="polite" aria-atomic="true">
            {state.errors?.wardBusiness?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
          </div>
        </label>

        <label htmlFor="stakeBusiness" className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-800">
          <input type="checkbox" name="stakeBusiness" id="stakeBusiness" aria-describedby="stakeBusiness-error" className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-500" />
          <div id="stakeBusiness-error" aria-live="polite" aria-atomic="true">
            {state.errors?.stakeBusiness?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
          </div>
          Stake business
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="sacramentHymnNumber" className="grid gap-2 text-sm font-semibold text-white">
            Sacrament Hymn Number
            <input
              type="number"
              name="sacramentHymnNumber"
              id="sacramentHymnNumber"
              aria-describedby="sacramentHymnNumber-error"
              min={1}
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="sacramentHymnNumber-error" aria-live="polite" aria-atomic="true">
              {state.errors?.sacramentHymnNumber?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>

          <label htmlFor="sacramentHymnTitle" className="grid gap-2 text-sm font-semibold text-white">
            Sacrament Hymn Title
            <input
              type="text"
              name="sacramentHymnTitle"
              id="sacramentHymnTitle"
              aria-describedby="sacramentHymnTitle-error"
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="sacramentHymnTitle-error" aria-live="polite" aria-atomic="true">
              {state.errors?.sacramentHymnTitle?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>
        </div>

        <label htmlFor="speakers" className="grid gap-2 text-sm font-semibold text-white">
          Speakers
          <textarea
            name="speakers"
            id="speakers"
            aria-describedby="speakers-error"
            rows={4}
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 font-mono text-sm text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
          />
          <div id="speakers-error" aria-live="polite" aria-atomic="true">
            {state.errors?.speakers?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
          </div>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="closingHymnNumber" className="grid gap-2 text-sm font-semibold text-white">
            Closing Hymn Number
            <input
              type="number"
              name="closingHymnNumber"
              id="closingHymnNumber"
              aria-describedby="closingHymnNumber-error"
              min={1}
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="closingHymnNumber-error" aria-live="polite" aria-atomic="true">
              {state.errors?.closingHymnNumber?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>

          <label htmlFor="closingHymnTitle" className="grid gap-2 text-sm font-semibold text-white">
            Closing Hymn Title
            <input
              type="text"
              name="closingHymnTitle"
              id="closingHymnTitle"
              aria-describedby="closingHymnTitle-error"
              required
              className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
            <div id="closingHymnTitle-error" aria-live="polite" aria-atomic="true">
              {state.errors?.closingHymnTitle?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
            </div>
          </label>
        </div>

        <label htmlFor="closingPrayer" className="grid gap-2 text-sm font-semibold text-white">
          Closing Prayer
          <input
            type="text"
            name="closingPrayer"
            id="closingPrayer"
            aria-describedby="closingPrayer-error"
            required
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
          />
          <div id="closingPrayer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.closingPrayer?.map((error) => <p key={error} className="mt-1 text-sm text-red-300">{error}</p>)}
          </div>
        </label>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-xl bg-slate-800 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            {isPending ? 'Saving' : 'Save'}
          </button>
        </div>
      </form>
    </main>
  );
}