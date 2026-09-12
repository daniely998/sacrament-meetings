import { getMeetingById } from "@/lib/meetings-db";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  // Validate id
  if (Number.isNaN(id)) {
    return NextResponse.json(
      { error: 'Invalid meeting id' },
      { status: 400 }
    );
  }

  const meeting = getMeetingById(id);

  if (!meeting) {
    return NextResponse.json(
      { error: 'Meeting not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(meeting);
}
