import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const game = searchParams.get("game") || "global"

  let query = supabase
    .from("profiles")
    .select("id, username, avatar_url, earnings")
    .order("earnings", { ascending: false })
    .limit(100)

  if (game !== "global") {
    query = query.eq("main_game", game)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

