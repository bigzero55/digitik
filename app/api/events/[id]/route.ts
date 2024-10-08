import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const url = process.env.BE_URL;
  const token = cookies().get("token");
  try {
    const response = await fetch(`${url}/api/events/${id}`, {
      method: "GET", 
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error){
    return NextResponse.json(error);
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const url = process.env.BE_URL;
  const token = cookies().get("token");
  const body = await req.json();
  try {
    const response = await fetch(`${url}/api/events/${id}`, {
      method: "PUT", 
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error){
    return NextResponse.json(error);
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const url = process.env.BE_URL;
  const token = cookies().get("token");
  try {
    const response = await fetch(`${url}/api/events/${id}`, {
      method: "DELETE", 
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error){
    return NextResponse.json(error);
  }
}