import { NextResponse } from 'next/server';
import { MOCK_ANALYTICS } from '@/lib/constants/mockData';

/**
 * Analytics Data Node
 * Provides a synthetic stream of performance telemetry for the Landlord portal.
 */
export async function GET() {
    // Simulated network throughput
    await new Promise(res => setTimeout(res, 500));

    return NextResponse.json(MOCK_ANALYTICS);
}
