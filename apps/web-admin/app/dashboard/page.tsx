import {
  UsersIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  ActivityIcon,
} from "lucide-react";
import { CookieConsent } from "@workspace/ui/components/cookie-consent";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSignIcon,
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    change: "+180.1% from last month",
    icon: UsersIcon,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    icon: ShoppingCartIcon,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201 since last hour",
    icon: ActivityIcon,
  },
];

const recentSales = [
  { name: "Olivia Martin", email: "olivia@email.com", amount: "+$1,999.00" },
  { name: "Jackson Lee", email: "jackson@email.com", amount: "+$39.00" },
  {
    name: "Isabella Nguyen",
    email: "isabella@email.com",
    amount: "+$299.00",
  },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
  { name: "Sofia Davis", email: "sofia@email.com", amount: "+$39.00" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <CookieConsent />
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your business metrics
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Overview chart placeholder */}
        <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-4">
          <h2 className="text-lg font-semibold">Overview</h2>
          <div className="mt-4 flex h-[300px] items-end gap-2">
            {[40, 25, 55, 45, 65, 50, 70, 60, 75, 55, 80, 65].map(
              (h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-md bg-primary"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {
                      [
                        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                      ][i]
                    }
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Recent sales */}
        <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-3">
          <h2 className="text-lg font-semibold">Recent Sales</h2>
          <p className="text-sm text-muted-foreground">
            You made 265 sales this month.
          </p>
          <div className="mt-6 space-y-6">
            {recentSales.map((sale) => (
              <div key={sale.email} className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {sale.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {sale.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{sale.email}</p>
                </div>
                <div className="font-medium">{sale.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
