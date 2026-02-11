import { NextResponse } from 'next/server';
import { MOCK_ASSETS } from '@/lib/constants/mockData';

/**
 * Global Asset Marketplace Node
 * Serves the primary stream of managed property forensics.
 */
export async function GET() {
    await new Promise(res => setTimeout(res, 800));
    return NextResponse.json(MOCK_ASSETS);
}
