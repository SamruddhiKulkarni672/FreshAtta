export async function GET() {
  try {
    const res = await fetch("http://192.168.1.39:8080/admin/product-manage/product");
    if (!res.ok) {
      console.error("GET /product failed:", res.status);
      return new Response("Failed to fetch products", { status: 500 });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("GET /product error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  const pathname = new URL(req.url).pathname;

  //   Handle grain combo
  if (pathname.includes("/grain/combo")) {
    const body = await req.json();
    const res = await fetch("http://192.168.1.39:8080/admin/product/grain-combo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return Response.json(data);
  }

  //   Handle product variant
  if (pathname.includes("/product-variant")) {
    const body = await req.json();
    const res = await fetch("http://192.168.1.39:8080/admin/product-manage/product-variant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return Response.json(data);
  }

  //   Handle normal product upload via FormData
  try {
    const formData = await req.formData();

    const newFormData = new FormData();
    for (const [key, value] of formData.entries()) {
      newFormData.append(key, value);
    }

    const res = await fetch("http://192.168.1.39:8080/admin/product-manage/product", {
      method: "POST",
      body: newFormData,
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("POST /product failed:", res.status, text);
      return new Response(text || "Failed to add product", { status: res.status });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: res.status,
    });
  } catch (error) {
    console.error("POST /product error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}




export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(
      `http://192.168.1.39:8080/admin/product-manage/product/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("DELETE /product failed:", res.status, errText);
      return new Response(errText || "Failed to delete product", { status: res.status });
    }

    return new Response(null, { status: res.status });
  } catch (error) {
    console.error("DELETE /product error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}


export async function PUT(req) {
  try {
    const formData = await req.formData();

    const productDTO = JSON.parse(formData.get("ProductDTO"));
    const images = formData.getAll("images");

    const backendFormData = new FormData();
    backendFormData.append("ProductDTO", JSON.stringify(productDTO));
    images.forEach((file) => {
      backendFormData.append("images", file);
    });

    const res = await fetch("http://192.168.1.39:8080/admin/product-manage/product", {
      method: "PUT",
      body: backendFormData,
    });

    if (!res.ok) {
      console.error("PUT /product failed:", res.status);
      return new Response("Failed to update product", { status: 500 });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error("PUT error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}


 