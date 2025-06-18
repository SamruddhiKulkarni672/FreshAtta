export async function GET() {
  try {
    const res = await fetch("http://localhost:8080/admin/product/grain/nutrients");
    if (!res.ok) {
      throw new Error("Failed to fetch nutrients");
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("API Error (nutrients):", error);
    return new Response(JSON.stringify({ message: "Error fetching nutrients" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
