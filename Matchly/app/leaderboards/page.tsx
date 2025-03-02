import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { LeaderboardTable } from "@/components/leaderboard-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LeaderboardsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-white">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Leaderboards</h2>
            <Tabs defaultValue="global" className="space-y-4">
              <TabsList className="bg-zinc-800 text-zinc-400">
                <TabsTrigger value="global" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Global
                </TabsTrigger>
                <TabsTrigger
                  value="fortnite"
                  className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white"
                >
                  Fortnite
                </TabsTrigger>
                <TabsTrigger value="cod" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Call of Duty
                </TabsTrigger>
                <TabsTrigger
                  value="valorant"
                  className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white"
                >
                  Valorant
                </TabsTrigger>
              </TabsList>
              <TabsContent value="global">
                <LeaderboardTable game="global" />
              </TabsContent>
              <TabsContent value="fortnite">
                <LeaderboardTable game="fortnite" />
              </TabsContent>
              <TabsContent value="cod">
                <LeaderboardTable game="cod" />
              </TabsContent>
              <TabsContent value="valorant">
                <LeaderboardTable game="valorant" />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

