"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Trophy, Swords, BarChart3, Users, Wallet, Settings, HelpCircle } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2">
      <Link href="/dashboard">
        <Button
          variant={pathname === "/dashboard" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/dashboard"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </Link>
      <Link href="/tournaments">
        <Button
          variant={pathname === "/tournaments" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/tournaments"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <Trophy className="mr-2 h-4 w-4" />
          Tournaments
        </Button>
      </Link>
      <Link href="/wagers">
        <Button
          variant={pathname === "/wagers" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/wagers"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <Swords className="mr-2 h-4 w-4" />
          Wager Matches
        </Button>
      </Link>
      <Link href="/leaderboards">
        <Button
          variant={pathname === "/leaderboards" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/leaderboards"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Leaderboards
        </Button>
      </Link>
      <Link href="/community">
        <Button
          variant={pathname === "/community" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/community"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <Users className="mr-2 h-4 w-4" />
          Community
        </Button>
      </Link>
      <Link href="/wallet">
        <Button
          variant={pathname === "/wallet" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/wallet"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <Wallet className="mr-2 h-4 w-4" />
          Wallet
        </Button>
      </Link>
      <Link href="/settings">
        <Button
          variant={pathname === "/settings" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/settings"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </Link>
      <Link href="/help">
        <Button
          variant={pathname === "/help" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            pathname === "/help"
              ? "bg-emerald-500 hover:bg-emerald-600 text-black"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          )}
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          Help & Support
        </Button>
      </Link>
    </nav>
  )
}

