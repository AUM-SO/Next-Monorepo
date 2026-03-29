import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@workspace/ui/components/app-sidebar";
import { TooltipProvider } from "@workspace/ui/components/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
