import { NextResponse } from 'next/server';
const token = cookies().get("token")

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const url = proccess.env.BE_URL
  const token = cookies().get("token")
  try {
    const response = await fetch(`${url}/api/events/${id}`, {
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
  } catch (error){
    return NextResponse.json(error)
  }
}