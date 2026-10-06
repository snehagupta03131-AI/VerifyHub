import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import Analytics from "@/components/dashboard/Analytics";
import RecentRequests from "@/components/dashboard/RecentRequests";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-[#05081a]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="flex-1 p-10">

        <Header />

        <StatsCards />

        <Analytics />

        <RecentRequests />

      </section>

    </main>
  );
}