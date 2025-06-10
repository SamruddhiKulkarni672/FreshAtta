// app/admin/page.js
export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Orders</h3>
          <p className="text-xl">42</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Revenue</h3>
          <p className="text-xl">₹12,000</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Products Listed</h3>
          <p className="text-xl">15</p>
        </div>
      </div>
    </div>
  );
}
