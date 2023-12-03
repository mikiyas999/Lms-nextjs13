import { Navbar } from "../_components/navbar";
import Sidebar from "../_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:pl-56 z-50 fixed inset-y-0 w-full h-[80px]">
        <Navbar />
      </div>
      <div className="h-full hidden md:flex flex-col z-50 inset-y-0 fixed w-56">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
