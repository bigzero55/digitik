import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { full_name, username, email, password } = await request.json();

    const response = await fetch(process.env.BE_URL + '/api/auth/signup', {
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
      const errorData = await response.json();
      const { message, code } = errorData;
      return NextResponse.json(
        { error: { message, code } || 'Failed to signup' },
        { status: response.status }
      );
    }
    const data = await response.json();
    return NextResponse.json({ data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: err.message },
      { status: 500 }
    );
  }
}
