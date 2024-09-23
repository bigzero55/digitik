import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    cookieStore.delete('token');
    return NextResponse.json({ message: 'logout succes' ,code:"LOGOUT_SUCCESS"});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
