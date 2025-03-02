"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GamepadIcon as GameController, Bell, User, LogOut, Settings, Wallet } from "lucide-react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export function DashboardHeader() {
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-900">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <GameController className="h-5 w-5 text-emerald-500" />
          <span>Matchly</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-emerald-500 text-white">
            Dashboard
          </Link>
          <Link
            href="/tournaments"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-500"
          >
            Tournaments
          </Link>
          <Link href="/wagers" className="text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-500">
            Wagers
          </Link>
          <Link
            href="/leaderboards"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-500"
          >
            Leaderboards
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-500"
          >
            Community
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-zinc-800">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
                  <User className="h-4 w-4 text-zinc-300" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-800 border-zinc-700 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-700" />
              <DropdownMenuItem onClick={() => router.push("/profile")} className="hover:bg-zinc-700 cursor-pointer">
                <User className="mr-2 h-4 w-4 text-emerald-500" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/wallet")} className="hover:bg-zinc-700 cursor-pointer">
                <Wallet className="mr-2 h-4 w-4 text-emerald-500" />
                <span>Wallet</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")} className="hover:bg-zinc-700 cursor-pointer">
                <Settings className="mr-2 h-4 w-4 text-emerald-500" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-700" />
              <DropdownMenuItem onClick={handleSignOut} className="hover:bg-zinc-700 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4 text-emerald-500" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

