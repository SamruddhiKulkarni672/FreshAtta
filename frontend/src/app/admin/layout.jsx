"use client";

import { useState } from "react";
import Sidebar from "../../components/ui/Sidebar";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#001d35] text-white">
        <h1 className="text-lg font-semibold">Admin Panel</h1>
        <Button variant="ghost" size="icon" className="text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Sidebar Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-[#001d35] text-white z-50 shadow-lg transition-transform">
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={toggleSidebar}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <Sidebar />
        </div>
      )}

      {/* Sidebar Desktop */}
      <div className="hidden md:block w-[300px] bg-[#001d35] text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="w-full p-4 md:p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
