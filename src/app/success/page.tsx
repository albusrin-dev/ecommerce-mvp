"use client"

import { useSearchParams } from "next/navigation"

export default function SuccessPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name")
  const price = searchParams.get("price")

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#1f2833] p-8 rounded-2xl text-center flex flex-col gap-4">

        <h1 className="text-3xl font-bold text-[#ccff00]">
          Payment Successful
        </h1>

        <p className="text-gray-400">
          Your order has been confirmed.
        </p>

        <div className="mt-4">
          <p>{name}</p>
          <p className="font-bold">₱{price}</p>
        </div>

      </div>
    </main>
  )
}