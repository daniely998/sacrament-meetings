'use server'

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { addMeeting, removeMeeting, editMeeting } from './meetings-db';

const MeetingTypeSchema = z.enum(['testimony', 'regular', 'stake', 'general']);

const HymnSchema = z.object({
  number: z.coerce.number().int().positive('Hymn number must be a positive integer.'),
  title: z.string().min(1, 'Hymn title is required.'),
});

const SpeakerSchema = z.object({
  name: z.string().min(1, 'Speaker name is required.'),
  topic: z.string().min(1, 'Speaker topic is required.'),
  type: z.enum(['speaker', 'musical-number']),
});

const WardBusinessItemSchema = z.object({
  description: z.string().min(1, 'Ward business item is required.'),
});

const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required.'),
  meetingType: MeetingTypeSchema,
  presiding: z.string().min(2, 'Presiding leader is required.'),
  conducting: z.string().min(2, 'Conducting leader is required.'),
  announcements: z.array(z.string()).optional().default([]),
  openingHymn: HymnSchema,
  openingPrayer: z.string().min(2, 'Opening prayer is required.'),
  wardBusiness: z.array(WardBusinessItemSchema).optional().default([]),
  stakeBusiness: z.boolean().default(false),
  sacramentHymn: HymnSchema,
  speakers: z.array(SpeakerSchema).optional().default([]),
  closingHymn: HymnSchema,
  closingPrayer: z.string().min(2, 'Closing prayer is required.'),
});

export type State = {
    errors?: {
        date?: string[];
        meetingType?: string[];
        presiding?: string[];
        conducting?: string[];
        announcements?: string[];
        openingHymnNumber?: string[];
        openingHymnTitle?: string[];
        openingPrayer?: string[];
        wardBusiness?: string[];
        stakeBusiness?: string[];
        sacramentHymnNumber?: string[];
        sacramentHymnTitle?: string[];
        speakers?: string[];
        closingHymnNumber?: string[];
        closingHymnTitle?: string[];
        closingPrayer?: string[];
    };
    message?: string | null;
};

type FieldErrors = NonNullable<State['errors']>;

const fieldMap: Record<string, keyof FieldErrors> = {
    'openingHymn.number': 'openingHymnNumber',
    'openingHymn.title': 'openingHymnTitle',
    'sacramentHymn.number': 'sacramentHymnNumber',
    'sacramentHymn.title': 'sacramentHymnTitle',
    'closingHymn.number': 'closingHymnNumber',
    'closingHymn.title': 'closingHymnTitle',
};

function getValidationErrors(error: z.ZodError): State {
    const errors: FieldErrors = {};

    for (const issue of error.issues) {
        const path = issue.path.join('.');
        const field = fieldMap[path] ?? issue.path[0] as keyof FieldErrors;

        if (field) {
            errors[field] = [...(errors[field] ?? []), issue.message];
        }
    }

    return {
        errors,
        message: 'Missing or invalid fields. Please correct the errors below.',
    };
}

export async function createMeeting(_prevState: State, formData: FormData): Promise<State> {
    const raw = {
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        announcements: formData.getAll('announcements').map(String).map((value) => value.trim()).filter(Boolean),
        openingHymn: {
        number: formData.get('openingHymnNumber'),
        title: formData.get('openingHymnTitle'),
        },
        openingPrayer: formData.get('openingPrayer'),
        wardBusiness: formData.getAll('wardBusiness')
        .map(String)
        .map((value) => value.trim())
        .filter(Boolean)
        .map((description) => ({ description })),
        stakeBusiness: formData.get('stakeBusiness') === 'on',
        sacramentHymn: {
        number: formData.get('sacramentHymnNumber'),
        title: formData.get('sacramentHymnTitle'),
        },
        speakers: formData.getAll('speakers').map(String).map((value) => value.trim()).filter(Boolean).map((name) => ({
        name,
        topic: 'General',
        type: 'speaker' as const,
        })),
        closingHymn: {
        number: formData.get('closingHymnNumber'),
        title: formData.get('closingHymnTitle'),
        },
        closingPrayer: formData.get('closingPrayer'),
    };

    const parsed = MeetingFormSchema.safeParse(raw);

    if (!parsed.success) {
        return getValidationErrors(parsed.error);
    }

    const meeting = parsed.data;

    try {
        await addMeeting(meeting);
    } catch (error) {
        console.error('Error creating meeting: ', error);
        throw new Error('Failed to create meeting.');
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function updateMeeting(id: number, _prevState: State, formData: FormData): Promise<State> {
    const raw = {
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        announcements: formData.getAll('announcements').map(String).map((value) => value.trim()).filter(Boolean),
        openingHymn: {
        number: formData.get('openingHymnNumber'),
        title: formData.get('openingHymnTitle'),
        },
        openingPrayer: formData.get('openingPrayer'),
        wardBusiness: formData.getAll('wardBusiness')
        .map(String)
        .map((value) => value.trim())
        .filter(Boolean)
        .map((description) => ({ description })),
        stakeBusiness: formData.get('stakeBusiness') === 'on',
        sacramentHymn: {
        number: formData.get('sacramentHymnNumber'),
        title: formData.get('sacramentHymnTitle'),
        },
        speakers: formData.getAll('speakers').map(String).map((value) => value.trim()).filter(Boolean).map((name) => ({
        name,
        topic: 'General',
        type: 'speaker' as const,
        })),
        closingHymn: {
        number: formData.get('closingHymnNumber'),
        title: formData.get('closingHymnTitle'),
        },
        closingPrayer: formData.get('closingPrayer'),
    };

    const parsed = MeetingFormSchema.safeParse(raw);

    if (!parsed.success) {
        return getValidationErrors(parsed.error);
    }

    const meeting = parsed.data;

    try {
        await editMeeting(id, meeting);
    } catch (error) {
        console.error('Error updating meeting: ', error);
        throw new Error('Failed to update meeting.');
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function deleteMeeting(id: number) {
    try {
        await removeMeeting(id);
    } catch (error) {
        console.error('Error deleting meeting: ', error);
        throw new Error('Failed to detele meeting.');
    }

    revalidatePath('/meetings');
    redirect('/meetings');
}