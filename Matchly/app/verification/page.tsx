"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GamepadIcon as GameController, CheckCircle, Mail } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function VerificationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || ""
  const [isLoading, setIsLoading] = useState(false)

  async function resendVerification() {
    if (!email) return

    setIsLoading(true)

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
      })

      if (error) throw error

      alert("Verification email resent!")
    } catch (error) {
      console.error("Error resending verification:", error)
      alert("Failed to resend verification email")
    } finally {
      setIsLoading(false)
    }
  }

  // Check auth state
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        router.push("/dashboard")
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [router])

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
        <GameController className="h-6 w-6 text-emerald-500" />
        <span className="font-bold">Rematch</span>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card className="bg-zinc-800 border-zinc-700 text-white">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-full">
                <Mail className="h-10 w-10 text-emerald-500" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Check your email</CardTitle>
            <CardDescription className="text-zinc-400 text-center">
              We've sent a verification link to {email || "your email"}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-zinc-300">
            <p>Click the link in the email to verify your account and complete the registration process.</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black"
              onClick={() => router.push("/login")}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              I've verified my email
            </Button>
            <Button
              variant="outline"
              className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-700"
              onClick={resendVerification}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Resend verification email"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

