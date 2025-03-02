import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Edit } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-white">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
              <div className="space-y-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Update your profile information and how others see you on the platform.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                        <AvatarFallback className="bg-zinc-700 text-zinc-300">
                          <User className="h-12 w-12" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2 flex-1">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-zinc-300">Username</label>
                          <Input value="ProGamer123" className="bg-zinc-700" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Add game connections to the profile page */}
                <Card className="bg-zinc-800 border-zinc-700 mt-6">
                  <CardHeader>
                    <CardTitle>Game Connections</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Connect your game accounts to participate in tournaments and wagers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {["Fortnite", "Call of Duty", "Valorant", "Apex Legends"].map((game) => (
                      <div key={game} className="flex items-center justify-between">
                        <span>{game}</span>
                        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                          Connect
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

