import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = cookies();
  try {
    const { email, password } = await request.json();
    const response = await fetch(`${process.env.BE_URL}api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
    }
    const data = await response.json();
    console.log(data);
    cookieStore.set('token', data.token, {
      maxAge: 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
    });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(err);
  }
}
