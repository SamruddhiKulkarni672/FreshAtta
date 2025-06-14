// app/api/grain/route.js or app/api/grain/[...path]/route.js
export async function GET(request) {
  const pathname = new URL(request.url).pathname;

  if (pathname.includes("/grain/combo")) {
    const res = await fetch("http://192.168.1.39:8080/admin/product/grain-combo");
    const data = await res.json();
    return Response.json(data);
  }

  const res = await fetch("http://192.168.1.39:8080/admin/product/grain");
  const data = await res.json();
  return Response.json(data);
}

export async function POST(request) {
  const pathname = new URL(request.url).pathname;
  const body = await request.json();

  if (pathname.includes("/grain/combo")) {
    const res = await fetch("http://192.168.1.39:8080/admin/product/grain-combo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return Response.json(data);
  }

  const res = await fetch("http://192.168.1.39:8080/admin/product/grain", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return Response.json(data);
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const res = await fetch(`http://192.168.1.39:8080/admin/product/grain/${id}`, {
    method: "DELETE",
  });

  return new Response(null, { status: res.status });
}

export async function PUT(req) {
  try {
    const body = await req.json();

    const res = await fetch("http://192.168.1.39:8080/admin/product/grain", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.error("PUT /grain failed:", res.status);
      return new Response("Failed to update grain", { status: 500 });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("PUT /api/grain error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

