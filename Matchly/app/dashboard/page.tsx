import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Wallet, Calendar, BarChart3 } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserStats } from "@/components/user-stats"
import { UpcomingMatches } from "@/components/upcoming-matches"
import { RecentTransactions } from "@/components/recent-transactions"

export default function DashboardPage() {
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
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <div className="flex items-center space-x-2">
                <Link href="/tournaments/new">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                    <Trophy className="mr-2 h-4 w-4" />
                    Create Tournament
                  </Button>
                </Link>
              </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-zinc-800 text-zinc-400">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="tournaments"
                  className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white"
                >
                  Tournaments
                </TabsTrigger>
                <TabsTrigger value="wagers" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Wagers
                </TabsTrigger>
                <TabsTrigger value="stats" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Stats
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-zinc-300">Total Earnings</CardTitle>
                      <Wallet className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1,234.56</div>
                      <p className="text-xs text-zinc-400">+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-zinc-300">Tournaments Won</CardTitle>
                      <Trophy className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-zinc-400">+2 from last month</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-zinc-300">Wager Win Rate</CardTitle>
                      <BarChart3 className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">68%</div>
                      <p className="text-xs text-zinc-400">+4% from last month</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-zinc-800 border-zinc-700">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-zinc-300">Upcoming Matches</CardTitle>
                      <Calendar className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">7</div>
                      <p className="text-xs text-zinc-400">3 tournaments, 4 wagers</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 bg-zinc-800 border-zinc-700">
                    <CardHeader>
                      <CardTitle>Game Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <UserStats />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 bg-zinc-800 border-zinc-700">
                    <CardHeader>
                      <CardTitle>Upcoming Matches</CardTitle>
                      <CardDescription className="text-zinc-400">Your scheduled tournaments and wagers</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <UpcomingMatches />
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 bg-zinc-800 border-zinc-700">
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription className="text-zinc-400">Your recent deposits and withdrawals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentTransactions />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 bg-zinc-800 border-zinc-700">
                    <CardHeader>
                      <CardTitle>Top Players</CardTitle>
                      <CardDescription className="text-zinc-400">
                        Players with the highest earnings this month
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Alex_Pro", earnings: "$5,432", rank: 1 },
                          { name: "GameMaster99", earnings: "$4,321", rank: 2 },
                          { name: "NinjaWarrior", earnings: "$3,456", rank: 3 },
                          { name: "ProGamer123", earnings: "$2,987", rank: 4 },
                          { name: "EliteSniper", earnings: "$2,654", rank: 5 },
                        ].map((player) => (
                          <div key={player.name} className="flex items-center">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-700 mr-2">
                              {player.rank}
                            </div>
                            <div className="flex-1 font-medium">{player.name}</div>
                            <div className="text-emerald-500">{player.earnings}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="tournaments" className="space-y-4">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Your Tournaments</CardTitle>
                    <CardDescription className="text-zinc-400">
                      View and manage your tournament participation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border border-zinc-700 bg-zinc-900">
                        <div className="p-4">
                          <h3 className="font-semibold">Fortnite Solo Cup</h3>
                          <p className="text-sm text-zinc-400">March 15, 2025 • 64 Players • $500 Prize Pool</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            >
                              View Details
                            </Button>
                            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                              Join Tournament
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border border-zinc-700 bg-zinc-900">
                        <div className="p-4">
                          <h3 className="font-semibold">Call of Duty Team Battle</h3>
                          <p className="text-sm text-zinc-400">March 20, 2025 • 16 Teams • $1,000 Prize Pool</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            >
                              View Details
                            </Button>
                            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                              Join Tournament
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border border-zinc-700 bg-zinc-900">
                        <div className="p-4">
                          <h3 className="font-semibold">Apex Legends Championship</h3>
                          <p className="text-sm text-zinc-400">April 5, 2025 • 20 Teams • $2,500 Prize Pool</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            >
                              View Details
                            </Button>
                            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                              Join Tournament
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="wagers" className="space-y-4">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Available Wager Matches</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Find and join wager matches or create your own
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border border-zinc-700 bg-zinc-900">
                        <div className="p-4">
                          <h3 className="font-semibold">1v1 Fortnite Box Fight</h3>
                          <p className="text-sm text-zinc-400">$10 Wager • Best of 3 • Created by ProBuilder</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            >
                              View Details
                            </Button>
                            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                              Accept Wager
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border border-zinc-700 bg-zinc-900">
                        <div className="p-4">
                          <h3 className="font-semibold">2v2 Call of Duty Search & Destroy</h3>
                          <p className="text-sm text-zinc-400">$25 Wager • Best of 5 • Created by TeamElite</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            >
                              View Details
                            </Button>
                            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                              Accept Wager
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border border-zinc-700 bg-zinc-900">
                        <div className="p-4">
                          <h3 className="font-semibold">1v1 Valorant Aim Duel</h3>
                          <p className="text-sm text-zinc-400">$15 Wager • First to 10 • Created by AimGod</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            >
                              View Details
                            </Button>
                            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                              Accept Wager
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stats" className="space-y-4">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Your Gaming Statistics</CardTitle>
                    <CardDescription className="text-zinc-400">
                      View your performance across different games
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Fortnite</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Win Rate</div>
                            <div className="text-2xl font-bold">12%</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">K/D Ratio</div>
                            <div className="text-2xl font-bold">2.34</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Matches Played</div>
                            <div className="text-2xl font-bold">543</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Wins</div>
                            <div className="text-2xl font-bold">65</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Call of Duty</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Win Rate</div>
                            <div className="text-2xl font-bold">18%</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">K/D Ratio</div>
                            <div className="text-2xl font-bold">1.87</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Matches Played</div>
                            <div className="text-2xl font-bold">321</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Wins</div>
                            <div className="text-2xl font-bold">58</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Apex Legends</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Win Rate</div>
                            <div className="text-2xl font-bold">9%</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">K/D Ratio</div>
                            <div className="text-2xl font-bold">1.56</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Matches Played</div>
                            <div className="text-2xl font-bold">278</div>
                          </div>
                          <div className="bg-zinc-900 p-3 rounded-lg">
                            <div className="text-sm text-zinc-400">Wins</div>
                            <div className="text-2xl font-bold">25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

