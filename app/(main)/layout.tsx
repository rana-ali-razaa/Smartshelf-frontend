import { AppSidebar } from "@/components/shared/AppSidebar";
import MobileNavbar from "@/components/shared/MobileNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <>
        <SidebarProvider className="flex flex-col">
            {/* Mobile top bar */}
            <MobileNavbar />

            {/* Main container with sidebar + page */}
            <div className="flex min-h-screen w-full">
                <AppSidebar />

                {/* Content area */}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </SidebarProvider>

    </>
}