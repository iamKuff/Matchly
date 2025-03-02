import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: "$50.00",
      date: "Mar 10, 2025",
      status: "completed",
    },
    {
      id: 2,
      type: "withdrawal",
      amount: "$25.00",
      date: "Mar 8, 2025",
      status: "completed",
    },
    {
      id: 3,
      type: "winnings",
      amount: "$35.00",
      date: "Mar 5, 2025",
      status: "completed",
    },
    {
      id: 4,
      type: "deposit",
      amount: "$100.00",
      date: "Mar 1, 2025",
      status: "completed",
    },
  ]

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                transaction.type === "deposit" || transaction.type === "winnings" ? "bg-green-500/20" : "bg-red-500/20"
              }`}
            >
              {transaction.type === "deposit" || transaction.type === "winnings" ? (
                <ArrowDownIcon className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowUpIcon className="h-4 w-4 text-red-500" />
              )}
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none capitalize">{transaction.type}</p>
              <p className="text-sm text-zinc-400">{transaction.date}</p>
            </div>
          </div>
          <div
            className={`font-medium ${
              transaction.type === "deposit" || transaction.type === "winnings" ? "text-green-500" : "text-red-500"
            }`}
          >
            {transaction.amount}
          </div>
        </div>
      ))}
    </div>
  )
}

