import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { RecentTransactions } from "@/components/recent-transactions"

export default function WalletPage() {
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
              <h2 className="text-3xl font-bold tracking-tight">Wallet</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Available Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$245.89</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Pending Withdrawals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$0.00</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Total Deposited</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$500.00</div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-300">Total Withdrawn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$254.11</div>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="deposit" className="space-y-4">
              <TabsList className="bg-zinc-800 text-zinc-400">
                <TabsTrigger value="deposit" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Deposit
                </TabsTrigger>
                <TabsTrigger
                  value="withdraw"
                  className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white"
                >
                  Withdraw
                </TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-zinc-950 data-[state=active]:text-white">
                  Transaction History
                </TabsTrigger>
              </TabsList>
              <TabsContent value="deposit" className="space-y-4">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Deposit Funds</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Add funds to your wallet using your preferred payment method.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Amount</div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-700">
                          $10
                        </Button>
                        <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-700">
                          $25
                        </Button>
                        <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-700">
                          $50
                        </Button>
                        <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-700">
                          $100
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Input
                          type="number"
                          placeholder="Enter custom amount"
                          className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                        />
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Deposit</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Payment Method</div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          className="justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        >
                          <img src="/placeholder.svg?height=24&width=40" alt="Credit Card" className="mr-2 h-6 w-10" />
                          Credit Card
                        </Button>
                        <Button
                          variant="outline"
                          className="justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        >
                          <img src="/placeholder.svg?height=24&width=40" alt="PayPal" className="mr-2 h-6 w-10" />
                          PayPal
                        </Button>
                        <Button
                          variant="outline"
                          className="justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        >
                          <img src="/placeholder.svg?height=24&width=40" alt="Apple Pay" className="mr-2 h-6 w-10" />
                          Apple Pay
                        </Button>
                        <Button
                          variant="outline"
                          className="justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        >
                          <img src="/placeholder.svg?height=24&width=40" alt="Google Pay" className="mr-2 h-6 w-10" />
                          Google Pay
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-zinc-400">
                      Funds will be available immediately after your deposit is processed.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="withdraw" className="space-y-4">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Withdraw Funds</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Withdraw funds from your wallet to your preferred payment method.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">Amount</div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                        />
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-black">Withdraw</Button>
                      </div>
                      <p className="text-sm text-zinc-400">Available balance: $245.89</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Withdrawal Method</div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          className="justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        >
                          <img
                            src="/placeholder.svg?height=24&width=40"
                            alt="Bank Transfer"
                            className="mr-2 h-6 w-10"
                          />
                          Bank Transfer
                        </Button>
                        <Button
                          variant="outline"
                          className="justify-start border-zinc-700 text-zinc-300 hover:bg-zinc-700"
                        >
                          <img src="/placeholder.svg?height=24&width=40" alt="PayPal" className="mr-2 h-6 w-10" />
                          PayPal
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-zinc-400">
                      Withdrawals typically process within 1-3 business days depending on your payment method.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="history" className="space-y-4">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription className="text-zinc-400">
                      View your recent deposits, withdrawals, and winnings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions />
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

