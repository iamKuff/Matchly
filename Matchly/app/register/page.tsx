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
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [acceptTerms, setAcceptTerms] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!acceptTerms) {
      setError("You must accept the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      })

      if (error) throw error

      if (data.user) {
        // Create a profile record
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: data.user.id,
            username,
          },
        ])

        if (profileError) throw profileError
      }

      // Redirect to verification page or dashboard
      router.push("/verification?email=" + encodeURIComponent(email))
    } catch (error: any) {
      setError(error.message || "Failed to create account")
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
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription className="text-zinc-400">Enter your information to create an account</CardDescription>
          </CardHeader>
          <form onSubmit={onSubmit}>
            <CardContent className="grid gap-4">
              {error && (
                <Alert className="bg-red-500/20 border-red-500 text-red-300">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-zinc-300">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                />
              </div>
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
                <Label htmlFor="password" className="text-zinc-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password" className="text-zinc-300">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="border-zinc-600 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-emerald-500 hover:underline">
                    terms and conditions
                  </Link>
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </CardFooter>
          </form>
        </Card>
        <div className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-500 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

