"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GamepadIcon as GameController } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [magicLinkSent, setMagicLinkSent] = useState(false)

  async function handleEmailLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message || "Failed to sign in")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleMagicLinkLogin() {
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      })

      if (error) throw error

      setMagicLinkSent(true)
    } catch (error: any) {
      setError(error.message || "Failed to send magic link")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
        <GameController className="h-6 w-6 text-emerald-500" />
        <span className="font-bold">Rematch</span>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card className="bg-zinc-800 border-zinc-700 text-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription className="text-zinc-400">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          {magicLinkSent ? (
            <CardContent>
              <Alert className="bg-emerald-500/20 border-emerald-500 text-emerald-300">
                <AlertDescription>Check your email for the magic link to sign in!</AlertDescription>
              </Alert>
            </CardContent>
          ) : (
            <form onSubmit={handleEmailLogin}>
              <CardContent className="grid gap-4">
                {error && (
                  <Alert className="bg-red-500/20 border-red-500 text-red-300">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-zinc-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-zinc-300">
                      Password
                    </Label>
                    <Link href="/forgot-password" className="text-sm text-zinc-400 hover:text-emerald-500">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleMagicLinkLogin}
                  disabled={isLoading || !email}
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-700"
                >
                  {isLoading ? "Sending..." : "Sign in with magic link"}
                </Button>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in with password"}
                </Button>
              </CardFooter>
            </form>
          )}
        </Card>
        <div className="text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-emerald-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

