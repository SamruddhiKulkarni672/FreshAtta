export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch("http://192.168.1.39:8080/admin/product-manage/product-variant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Variant POST failed:", errorText);
      return new Response("Failed to add variant", { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error("POST /product-variant error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return new Response("Missing productId", { status: 400 });
    }

    const res = await fetch(`http://192.168.1.39:8080/admin/product-manage/product-variant?productId=${productId}`);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Variant GET failed:", errorText);
      return new Response("Failed to fetch variants", { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error("GET /product-variant error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}



export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const res = await fetch(`http://192.168.1.39:8080/admin/product-manage/product-variant/${id}`, {
    method: "DELETE",
  });

  return new Response(null, { status: res.status });
}



export async function PUT(req) {
  try {
    const body = await req.json();

    const res = await fetch("http://192.168.1.39:8080/admin/product-manage/product-variant", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();  
      console.error("PUT /varient failed:", res.status, errorText);

      return new Response(JSON.stringify({ error: "Failed to update product varient" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("PUT /api/varient error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
