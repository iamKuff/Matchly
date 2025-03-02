import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Swords, DollarSign, User, Clock } from "lucide-react"

export default function WagerMatchDetailsPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the wager match details using the id
  const wager = {
    id: params.id,
    game: "Call of Duty",
    amount: 50,
    creator: "Player1",
    opponent: null,
    status: "Open",
    createdAt: "2025-03-10T12:00:00Z",
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
            <h2 className="text-3xl font-bold tracking-tight">Wager Match Details</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Game</CardTitle>
                  <Swords className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{wager.game}</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Wager Amount</CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${wager.amount}</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Creator</CardTitle>
                  <User className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{wager.creator}</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Status</CardTitle>
                  <Clock className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{wager.status}</div>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle>Wager Match Rules</CardTitle>
                <CardDescription className="text-zinc-400">
                  Important information about this wager match
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  This is where you would put detailed information about the wager match, including rules, game mode,
                  map selection, and any other relevant details.
                </p>
              </CardContent>
            </Card>
            <div className="flex justify-end">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Accept Wager</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

