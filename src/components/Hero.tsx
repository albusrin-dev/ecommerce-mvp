"use client"

import { useSearchParams } from "next/navigation"
import Button from "@/components/Button"
import { useState } from "react"

export default function CheckoutPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name")
  const price = searchParams.get("price")

  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    if (!name || !price) {
      alert("Invalid product data")
      return
    }

    try {
      setLoading(true)

      // Placeholder for Phase 2 (PayMongo API call)
      console.log("Proceeding to payment:", { name, price })

      // TEMP behavior (for now)
      alert("Payment integration coming next phase")

    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">

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

        <button
          onClick={handlePayment}
          disabled={loading}
          className="bg-[#ccff00] text-black py-3 rounded-xl font-semibold hover:opacity-80 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>

      </div>

    </main>
  )
}