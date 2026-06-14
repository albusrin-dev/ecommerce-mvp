import Button from "./Button"
import { siteConfig } from "@/config/site"


export default function CTA() {
  return (
    <section className="py-24 text-center">

      <div className="container flex flex-col items-center gap-6">

        <h2 className="text-4xl font-bold">
          {siteConfig.cta.button}
        </h2>

        <Button text={siteConfig.cta.text} />

      </div>

    </section>
  )
}