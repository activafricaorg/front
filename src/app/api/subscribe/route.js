import { NextResponse } from 'next/server';
import { notion, DATABASE_ID, DATA_SOURCE_ID } from '@/lib/notion';

// Notion SDK needs Node runtime
export const runtime = 'nodejs';

// ---- Config ----
const TITLE_PROP = 'Email';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;
const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(ALLOWED_ORIGIN),
  })
}

export async function POST(req) {
  try {
    if (!DATABASE_ID) {
      return NextResponse.json(
        { error: 'NOTION_DATABASE_ID is not set' },
        { status: 500 },
      )
    }

    const headers = corsHeaders(ALLOWED_ORIGIN);
    let body;

    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers })
    }

    const email = (body?.email || '').trim()
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400, headers })
    }

    const existing = await notion.dataSources.query({
      data_source_id: DATA_SOURCE_ID,
      filter: {
        property: TITLE_PROP,
        rich_text: {
          contains: email,
        },
      },
    })

    if ((existing.results?.length || 0) > 0) {
      return NextResponse.json({ ok: true, duplicate: true }, { status: 200, headers })
    }

    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        [TITLE_PROP]: { title: [{ text: { content: email } }] },
      },
    })

    return NextResponse.json({ ok: true }, { status: 200, headers })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}