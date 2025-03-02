import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Users } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-white">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Community</h2>
            <Tabs defaultValue="chat" className="space-y-4">
              <TabsList className="bg-zinc-800 text-zinc-400">
                <TabsTrigger value="chat" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Chat
                </TabsTrigger>
                <TabsTrigger value="forums" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Forums
                </TabsTrigger>
              </TabsList>
              <TabsContent value="chat">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Live Chat</CardTitle>
                    <CardDescription className="text-zinc-400">Connect with other gamers in real-time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] bg-zinc-900 rounded-md mb-4 p-4 overflow-y-auto">
                      {/* Chat messages would go here */}
                      <p className="text-zinc-400">Welcome to the Matchly community chat!</p>
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Type your message..." className="bg-zinc-700 border-zinc-600 text-white" />
                      <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="forums">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Forums</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Discuss strategies, find teammates, and more
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["General Discussion", "Tournament Strategies", "Looking for Team", "Tech Support"].map(
                        (forum) => (
                          <div key={forum} className="flex items-center justify-between p-4 bg-zinc-900 rounded-md">
                            <div>
                              <h3 className="font-semibold">{forum}</h3>
                              <p className="text-sm text-zinc-400">Latest post: 2 hours ago</p>
                            </div>
                            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                              <Users className="mr-2 h-4 w-4" />
                              Join
                            </Button>
                          </div>
                        ),
                      )}
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

