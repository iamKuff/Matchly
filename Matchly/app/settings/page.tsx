import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-white">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription className="text-zinc-400">
                  Manage your account settings and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" className="bg-zinc-700 border-zinc-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-zinc-700 border-zinc-600 text-white"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <Switch id="notifications" />
                </div>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Save Changes</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

