"use client"

import { useSearchParams } from "next/navigation"
import Button from "@/components/Button"

export default function CheckoutPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name")
  const price = searchParams.get("price")

  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="bg-[#1f2833] p-8 rounded-2xl flex flex-col gap-6 w-full max-w-md">

        <h1 className="text-2xl font-bold">Checkout</h1>

        <div>
          <p className="text-gray-400">Product</p>
          <p className="text-lg">{name}</p>
        </div>

        <div>
          <p className="text-gray-400">Price</p>
          <p className="text-xl font-bold">₱{price}</p>
        </div>

        <Button text="Proceed to Payment" />

      </div>

    </main>
  )
}