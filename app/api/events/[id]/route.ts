import { NextResponse } from 'next/server';

// Dummy data for example purposes
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Handle GET request to get item by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  
  // Convert id to a number for comparison
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(item); // Return the item with the given ID
}