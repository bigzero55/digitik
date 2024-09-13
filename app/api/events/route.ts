import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Handle GET request
export async function GET() {
  const token = cookies().get("token")
  const url = process.env.BE_URL
  try {
    const response = await fetch(url+"api/events", {
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

// Handle POST request (to add a new item)
export async function POST(req: Request) {
  const body = await req.json();
  const newItem = { id: items.length + 1, name: body.name };
  items.push(newItem);
  
  return NextResponse.json({ message: "Item added", item: newItem });
}

// Handle PUT request (to update an existing item)
export async function PUT(req: Request) {
  const body = await req.json();
  const item = items.find(i => i.id === body.id);
  
  if (!item) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  item.name = body.name;
  
  return NextResponse.json({ message: "Item updated", item });
}

// Handle DELETE request (to delete an item)
export async function DELETE(req: Request) {
  const body = await req.json();
  const itemIndex = items.findIndex(i => i.id === body.id);
  
  if (itemIndex === -1) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  items.splice(itemIndex, 1); // Remove the item
  
  return NextResponse.json({ message: "Item deleted" });
}