export async function GET() {
  const res = await fetch('http://localhost:8080/admin/product/grain-combo');
  const data = await res.json();
  return Response.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const res = await fetch('http://localhost:8080/admin/product/grain-combo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return Response.json(data);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await fetch(`http://localhost:8080/admin/product/grain-combo/${id}`, {
    method: 'DELETE',
  });

  return new Response(null, { status: res.status });
}


export async function PUT(request) {
  const pathname = new URL(request.url).pathname;
  const id = pathname.split("/").pop();  
  const body = await request.json();

  const res = await fetch(`http://localhost:8080/admin/product/grain-combo `, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return Response.json(data);
}
