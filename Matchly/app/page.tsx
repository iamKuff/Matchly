import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GamepadIcon as GameController, Trophy, Users, Wallet, ArrowRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      <header className="border-b border-zinc-800">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <GameController className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Matchly</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/tournaments" className="text-sm font-medium text-zinc-400 hover:text-white">
              Tournaments
            </Link>
            <Link href="/wagers" className="text-sm font-medium text-zinc-400 hover:text-white">
              Wager Matches
            </Link>
            <Link href="/leaderboards" className="text-sm font-medium text-zinc-400 hover:text-white">
              Leaderboards
            </Link>
            <Link href="/community" className="text-sm font-medium text-zinc-400 hover:text-white">
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Compete. Win. <span className="text-emerald-500">Earn on Matchly.</span>
                </h1>
                <p className="max-w-[600px] text-zinc-400 md:text-xl">
                  Join thousands of gamers competing in tournaments and wager matches. Prove your skills and win real
                  money.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="w-full min-[400px]:w-auto bg-emerald-500 hover:bg-emerald-600 text-black"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/tournaments">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    >
                      Browse Tournaments
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-zinc-800">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Gaming tournament"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How It <span className="text-emerald-500">Works</span>
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to compete, win, and earn rewards from your gaming skills.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                <div className="p-3 bg-emerald-500/10 rounded-full">
                  <GameController className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Connect Your Games</h3>
                <p className="text-center text-zinc-400">
                  Link your gaming accounts to automatically track stats and verify match results.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                <div className="p-3 bg-emerald-500/10 rounded-full">
                  <Trophy className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Compete & Win</h3>
                <p className="text-center text-zinc-400">
                  Join tournaments or create wager matches to compete against other players for prizes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border border-zinc-800 rounded-lg bg-zinc-900/50">
                <div className="p-3 bg-emerald-500/10 rounded-full">
                  <Wallet className="h-10 w-10 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Cash Out Earnings</h3>
                <p className="text-center text-zinc-400">
                  Withdraw your winnings securely to your preferred payment method.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Featured <span className="text-emerald-500">Games</span>
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We support a variety of popular games for tournaments and wager matches.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
              {["Fortnite", "Call of Duty", "Apex Legends", "League of Legends", "Valorant"].map((game) => (
                <div
                  key={game}
                  className="flex flex-col items-center space-y-2 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <GameController className="h-8 w-8 text-emerald-500" />
                  </div>
                  <span className="font-medium text-center">{game}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Upcoming <span className="text-emerald-500">Tournaments</span>
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join these featured tournaments and compete for cash prizes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Fortnite Solo Cup",
                  game: "Fortnite",
                  date: "Mar 15, 2025",
                  prize: "$500",
                  players: "64",
                },
                {
                  title: "Call of Duty Team Battle",
                  game: "Call of Duty",
                  date: "Mar 20, 2025",
                  prize: "$1,000",
                  players: "32",
                },
                {
                  title: "Apex Legends Championship",
                  game: "Apex Legends",
                  date: "Apr 5, 2025",
                  prize: "$2,500",
                  players: "20",
                },
              ].map((tournament) => (
                <div
                  key={tournament.title}
                  className="flex flex-col border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="h-40 bg-zinc-800 relative">
                    <img
                      src="/placeholder.svg?height=160&width=320"
                      alt={tournament.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 left-2 bg-emerald-500 text-black px-2 py-1 text-xs font-bold rounded">
                      {tournament.game}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-2">{tournament.title}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mb-4">
                      <span>{tournament.date}</span>
                      <span className="mx-2">•</span>
                      <span>{tournament.players} Players</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="font-bold text-emerald-500">{tournament.prize} Prize Pool</div>
                      <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                        Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/tournaments">
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                  View All Tournaments
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our <span className="text-emerald-500">Community</span>
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with other gamers, find teammates, and stay updated on the latest tournaments.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full min-[400px]:w-auto bg-emerald-500 hover:bg-emerald-600 text-black"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Join Now
                  </Button>
                </Link>
                <Link href="/community">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-[400px]:w-auto border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Players Are <span className="text-emerald-500">Saying</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  quote:
                    "Rematch has completely changed how I compete in games. The tournaments are well organized and the payouts are fast!",
                  name: "Alex_Pro",
                  game: "Fortnite Player",
                },
                {
                  quote:
                    "I've won over $2,000 in wager matches on Rematch. The platform is easy to use and the community is great.",
                  name: "GameMaster99",
                  game: "Call of Duty Player",
                },
                {
                  quote:
                    "The anti-cheat measures and match verification make Rematch the most trustworthy platform for competitive gaming.",
                  name: "NinjaWarrior",
                  game: "Apex Legends Player",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 p-6 border border-zinc-800 rounded-lg bg-zinc-900/50"
                >
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-emerald-500 fill-emerald-500" />
                    ))}
                  </div>
                  <p className="text-center text-zinc-300 italic">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-zinc-400">{testimonial.game}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-800 py-6 md:py-0 bg-zinc-900">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <div className="flex items-center gap-2">
            <GameController className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-medium">Matchly</span>
          </div>
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Matchly. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-zinc-300">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="/contact" className="text-xs text-zinc-500 hover:text-zinc-300">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

