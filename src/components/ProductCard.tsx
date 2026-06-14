"use client"

import { useRouter } from "next/navigation"
import Button from "./Button"
import { siteConfig } from "@/config/site"

type Product = {
  id: string
  name: string
  price: number
}

export default function ProductCard({ id, name, price }: Product) {
  const router = useRouter()

  const handleCheckout = () => {
    router.push(`/checkout?id=${id}`

    )
  }

  return (
    <div className="bg-[#1f2833] rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition">

      <div className="h-40 bg-gray-700 rounded-lg" />

      <h2 className="text-lg font-semibold">{name}</h2>

      <p className="text-xl font-bold">₱{price}</p>

      <Button text= {siteConfig.cta.button_two} onClick={handleCheckout} />

    </div>
  )
}