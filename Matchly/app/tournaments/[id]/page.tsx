import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, Users, DollarSign } from "lucide-react"

export default function TournamentDetailsPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the tournament details using the id
  const tournament = {
    id: params.id,
    name: "Fortnite Solo Cup",
    game: "Fortnite",
    startDate: "2025-03-15T18:00:00Z",
    prizePool: 500,
    maxPlayers: 64,
    currentPlayers: 32,
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-white">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">{tournament.name}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Game</CardTitle>
                  <Trophy className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{tournament.game}</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Start Date</CardTitle>
                  <Calendar className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{new Date(tournament.startDate).toLocaleDateString()}</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Prize Pool</CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${tournament.prizePool}</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Players</CardTitle>
                  <Users className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {tournament.currentPlayers} / {tournament.maxPlayers}
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle>Tournament Details</CardTitle>
                <CardDescription className="text-zinc-400">
                  Rules, schedule, and other important information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  This is where you would put detailed information about the tournament, including rules, schedule,
                  format, and any other relevant details.
                </p>
              </CardContent>
            </Card>
            <div className="flex justify-end">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Join Tournament</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

