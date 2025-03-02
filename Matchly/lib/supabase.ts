import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Profile = {
  id?: string
  username?: string
  avatar_url?: string
  discord_username?: string
  twitter_username?: string
  game_accounts?: {
    fortnite?: string
    cod?: string
    valorant?: string
    apex?: string
  }
}

export type Tournament = {
  id: string
  name: string
  game: string
  start_date: string
  prize_pool: number
  max_players: number
}

export type Wager = {
  id: string
  creator_id: string
  opponent_id: string | null
  game: string
  amount: number
  status: string
}

export type GameAccount = {
  id: string
  user_id: string
  game: string
  account_id: string
}

