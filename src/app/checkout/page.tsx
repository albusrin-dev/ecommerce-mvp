"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { siteConfig } from "@/config/site"

export default function CheckoutPage() {
  const searchParams = useSearchParams()


  const id = searchParams.get("id")
  const product = siteConfig.products.find(p => p.id === id)

  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    if (!product) {
      alert("Invalid product")
      return
    }

    try {
      setLoading(true)

      // simulate payment delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // redirect to success page
      window.location.href = `/success?id=${id}`

    } catch (error) {
      console.error(error)
      alert("Payment failed")
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
          <p className="text-lg">{product?.name}</p>
        </div>

        <div>
          <p className="text-gray-400">Price</p>
          <p className="text-xl font-bold">₱{product?.price}</p>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="bg-[#ccff00] text-black py-3 rounded-xl font-semibold hover:opacity-80 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : <h1>{siteConfig.checkout.button}</h1>}
        </button>

      </div>

    </main>
  )
}