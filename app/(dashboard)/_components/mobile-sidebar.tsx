import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-70 transition pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-0 bg-white" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
