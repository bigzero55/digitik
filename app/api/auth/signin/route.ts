import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const cookieStore = cookies();
  try {
    const { email, password } = await request.json();

    const response = await fetch(`${process.env.BE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const { message, code } = errorData;
      return NextResponse.json(
        { error: { message, code } || 'Failed to login' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const { token } = data.user;

    cookieStore.set('token', token, {
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
    });

    return NextResponse.json({ data }, { status: 201 });
  } catch (err: any) {
    
    return NextResponse.json(
      { error: 'Internal server error', details: err.message },
      { status: 500 }
    );
  }
}
