import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { full_name, username, email, password } = await request.json();
    const response = await fetch(process.env.BE_URL + 'api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        full_name,
        username,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to signup. Please try again.');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(err);
  }
}
