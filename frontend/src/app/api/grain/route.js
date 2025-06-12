export async function GET(request) {
  const pathname = new URL(request.url).pathname;

  // Route: /api/grain/combo fetch grainCombo
  if (pathname.includes('/grain/combo')) {
    const res = await fetch('http://192.168.1.39:8080/admin/product/grain-combo');
    const data = await res.json();
    return Response.json(data);
  }

  // Default: /api/grain fetch grains
  const res = await fetch('http://192.168.1.39:8080/admin/product/grain');
  const data = await res.json();
  return Response.json(data);
}

export async function POST(request) {
  const pathname = new URL(request.url).pathname;
  const body = await request.json();

  // Route: /api/grain/combo  add grainCombo
  if (pathname.includes('/grain/combo')) {
    const res = await fetch('http://192.168.1.39:8080/admin/product/grain-combo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return Response.json(data);
  }

  // Default: /api/grain  add grain
  const res = await fetch('http://192.168.1.39:8080/admin/product/grain', {
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

  const res = await fetch(`http://192.168.1.39:8080/admin/product/grain/${id}`, {
    method: 'DELETE',
  });

  return new Response(null, { status: res.status });
}
