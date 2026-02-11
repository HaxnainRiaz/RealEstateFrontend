import { NextResponse } from 'next/server';
import { MOCK_USER } from '@/lib/constants/mockData';

/**
 * Identity Managed Node
 * Provides institutional profile forensics and authorization logic.
 */
export async function GET() {
    await new Promise(res => setTimeout(res, 400));
    return NextResponse.json(MOCK_USER);
}
