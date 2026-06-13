"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function SuccessPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name")
  const price = searchParams.get("price")

  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const processOrder = async () => {
      try {
        // ✅ 1. Save order to Google Sheets
        await fetch("/api/save-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: name,
            price: price,
            status: "PAID (MOCK)",
          }),
        })

        // ✅ 2. Send emails (non-blocking system)
        try {
          await emailjs.send(
            "service_d6eoq0l",
            "template_nfaayah",
            {
              product: name,
              price: price,
            },
            "pZWEmS1iCQUogsCgK"
          )

          
          await emailjs.send(
            "service_d6eoq0l",
            "template_92rm59k",
            {
              product: name,
              price: price,
            },
            "pZWEmS1iCQUogsCgK"
          )
        } catch (emailError) {
          console.error("Email failed:", emailError)
        }

      } catch (error) {
        console.error("Order save failed:", error)
      }
    }

    if (name && price) {
      processOrder()
    }
  }, [name, price])

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