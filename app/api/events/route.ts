import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const token = cookies().get("token")
  const url = process.env.BE_URL
  try {
    const response = await fetch(`${url}/api/events`, {
      method: "GET", 
      headers: {
        headers: { 
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const token = cookies().get("token")
  const url = process.env.BE_URL

  try {
    const response = await fetch(`${url}/api/events`, {
      method: "POST", 
      headers: {
        headers: { 
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}
