import { NextResponse } from 'next/server';
import { MOCK_REQUESTS } from '@/lib/constants/mockData';

/**
 * Application Processing Node
 * Synchronizes application ledger nodes for the tenant and landlord portals.
 */
export async function GET() {
    await new Promise(res => setTimeout(res, 600));
    return NextResponse.json(MOCK_REQUESTS);
}

export async function POST(request) {
    const data = await request.json();
    await new Promise(res => setTimeout(res, 1200));

    return NextResponse.json({
        success: true,
        id: `APP-${Math.floor(Math.random() * 10000)}`,
        timestamp: new Date().toISOString()
    });
}
