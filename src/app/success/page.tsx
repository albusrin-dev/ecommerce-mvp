"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function SuccessPage() {
  const searchParams = useSearchParams()

  const name = searchParams.get("name")
  const price = searchParams.get("price")

  const hasRun = useRef(false)

  // ✅ EMAIL FUNCTIONS
  const sendCustomerEmail = async (name: string, price: string) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CUSTOMER
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables")
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          product: name,
          price: price,
        },
        publicKey
      )
    } catch (error) {
      console.error("Customer email failed:", error)
    }
  }

  const sendOwnerEmail = async (name: string, price: string) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL

    if (!serviceId || !templateId || !publicKey || !ownerEmail) {
      console.error("Missing EmailJS environment variables")
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          product: name,
          price: price,
          email: ownerEmail,
        },
        publicKey
      )
    } catch (error) {
      console.error("Owner email failed:", error)
    }
  }

  // ✅ MAIN PROCESS
  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const processOrder = async () => {
      try {
        // Save order
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

        // Send emails
        if (name && price) {
          await sendCustomerEmail(name, price)
          await sendOwnerEmail(name, price)
        }

      } catch (error) {
        console.error("Order processing failed:", error)
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