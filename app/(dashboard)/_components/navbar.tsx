"use client";

import NavbarRoutes from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
