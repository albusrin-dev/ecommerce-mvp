"use client"

import { useRouter } from "next/navigation"
import Button from "./Button"

type Product = {
  name: string
  price: number
}

export default function ProductCard({ name, price }: Product) {
  const router = useRouter()

  const handleCheckout = () => {
    router.push(
      `/checkout?name=${encodeURIComponent(name)}&price=${price}`
    )
  }

  return (
    <div className="bg-[#1f2833] rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition">

      <div className="h-40 bg-gray-700 rounded-lg" />

      <h2 className="text-lg font-semibold">{name}</h2>

      <p className="text-xl font-bold">₱{price}</p>

      <Button text="Buy Now" onClick={handleCheckout} />

    </div>
  )
}