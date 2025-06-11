"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, Package, List } from "lucide-react";
import Image from "next/image";

import { Command, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Helper function to navigate only if needed
    const handleNavigation = (path: string) => {
        if (pathname !== path) {
            router.push(path);
        }
    };

    const navItems = [
        {
            label: "Dashboard",
            icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
            path: "/admin",
        },
        {
            label: "Manage Products",
            icon: <Package className="mr-2 h-4 w-4" />,
            path: "/admin/products",
        },
        {
            label: "Manage Orders",
            icon: <List className="mr-2 h-4 w-4" />,
            path: "/admin/orders",
        },
        {
            label: "add grain",
            icon: (
                <Image
                    src="/images/grain.svg"
                    alt="Golden Wheat Flour"
                    width={40}
                    height={50}
                    className="mr-2 h-4 w-4"
                />
            ),
            path: "/admin/grain",
        },

        {
            label: "add grain-combo",
            icon: (
                <Image
                    src="/images/grain.svg"
                    alt="Golden Wheat Flour"
                    width={40}
                    height={50}
                    className="mr-2 h-4 w-4"
                />
            ),
            path: "/admin/grainCombo",
        },
    ];

    return (
        <div className="bg-[#392211] mt-8 mx-4">
            <Command className="rounded-none">
                <CommandList className="bg-[#001d35] text-white">
                    <CommandEmpty>No results found.</CommandEmpty>

                    {navItems.map((item) => (
                        <CommandItem
                            key={item.path}
                            onSelect={() => handleNavigation(item.path)}
                            className={`my-2 cursor-pointer ${
                                pathname === item.path ? "bg-[#004d7a]" : ""
                            }`}
                        >
                            {item.icon}
                            {item.label}
                        </CommandItem>
                    ))}
                </CommandList>
            </Command>
        </div>
    );
};

export default Sidebar;
