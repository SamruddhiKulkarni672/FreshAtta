// app/admin/layout.js
"use client";

import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h1 className="text-2xl font-bold">Admin</h1>
        <nav className="space-y-2">
          <Link href="/admin" className="block hover:text-orange-400">Dashboard</Link>
          <Link href="/admin/products" className="block hover:text-orange-400">Products</Link>
          <Link href="/admin/orders" className="block hover:text-orange-400">Orders</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
