import { NextResponse } from 'next/server';

// Dummy data for example purposes
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Handle GET request
export async function GET() {
  return NextResponse.json(items); // Return the list of items
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