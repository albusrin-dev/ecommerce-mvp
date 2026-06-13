"use client"

import Button from "./Button"
import { siteConfig } from "@/config/site"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const handlePrimaryCTA = () => {
    // default product (first product)
    const product = siteConfig.products[0]

    router.push(
      `/checkout?name=${encodeURIComponent(product.name)}&price=${product.price}`
    )
  }

  return (
    <section
      className="min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url('${siteConfig.hero.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <span className="text-sm bg-[#1f2833] px-3 py-1 rounded-full w-fit">
            {siteConfig.hero.badge}
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {siteConfig.brand.name.split(" ")[0]}{" "}
            <span className="text-[#ccff00]">
              {siteConfig.brand.highlight}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-gray-400 max-w-md">
            {siteConfig.brand.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Button
              text={siteConfig.hero.primaryCTA}
              onClick={handlePrimaryCTA}
            />
            <Button
              text={siteConfig.hero.secondaryCTA}
              variant="secondary"
            />
          </div>

        </div>

        {/* RIGHT SIDE (empty for image focus) */}
        <div />

      </div>
    </section>
  )
}