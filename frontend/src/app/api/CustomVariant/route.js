export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch("http://localhost:8080/admin/product-manage/custom-variant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const contentType = res.headers.get("content-type");

    if (!res.ok) {
      const errorText = contentType?.includes("application/json")
        ? JSON.stringify(await res.json())
        : await res.text();

      console.error("Variant POST failed:", res.status, errorText);
      return new Response(errorText, { status: res.status });
    }

    const data = contentType?.includes("application/json")
      ? await res.json()
      : { message: "Success" };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("POST /CustomVariant error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}



export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return new Response("Missing productId", { status: 400 });
    }

    const res = await fetch(`http://localhost:8080/admin/product-manage/custom-variant?productId=${productId}`);

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

  const res = await fetch(`http://localhost:8080/admin/product-manage/custom-variant/${id}`, {
    method: "DELETE",
  });

  return new Response(null, { status: res.status });
}



export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();

    const res = await fetch(`http://localhost:8080/admin/product-manage/custom-variant/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("PUT /custom-variant failed:", errorText);

      return new Response(JSON.stringify({ error: errorText }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    console.error("PUT /custom-variant error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// export async function DELETE(req, { params }) {
//   const { id } = params;

//   try {
//     const res = await fetch(`http://localhost:8080/admin/product-manage/custom-variant/${id}`, {
//       method: "DELETE",
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       console.error("DELETE /custom-variant failed:", errorText);
//       return new Response(JSON.stringify({ error: errorText }), {
//         status: res.status,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     return new Response(null, { status: 200 });
//   } catch (err) {
//     console.error("DELETE /custom-variant error:", err);
//     return new Response(JSON.stringify({ error: "Internal Server Error" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

