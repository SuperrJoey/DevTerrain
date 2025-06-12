import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json(
            { error: 'Username is required' },
            { status: 400 }
        );
    }

    try {
        const res = await fetch(`https://github.com/users/${username}/contributions`);

        if (!res.ok) {
            throw new Error("Github user not found or API error");
        }

        const html = await res.text();

        return NextResponse.json({ html });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch Github data' },
            { status: 500 }
        );
    }
}