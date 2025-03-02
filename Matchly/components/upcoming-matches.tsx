import { CalendarIcon } from "lucide-react"

export function UpcomingMatches() {
  const matches = [
    {
      id: 1,
      title: "Fortnite Solo Cup",
      type: "Tournament",
      date: "Mar 15, 2025",
      time: "6:00 PM",
    },
    {
      id: 2,
      title: "1v1 Box Fight",
      type: "Wager",
      date: "Mar 12, 2025",
      time: "8:30 PM",
    },
    {
      id: 3,
      title: "Call of Duty Team Battle",
      type: "Tournament",
      date: "Mar 20, 2025",
      time: "7:00 PM",
    },
    {
      id: 4,
      title: "2v2 Search & Destroy",
      type: "Wager",
      date: "Mar 14, 2025",
      time: "9:00 PM",
    },
  ]

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <div key={match.id} className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
            <CalendarIcon className="h-5 w-5 text-emerald-500" />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{match.title}</p>
            <p className="text-sm text-zinc-400">
              {match.type} • {match.date} • {match.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

