import Hero from "@/components/Hero"
import ProductCard from "@/components/ProductCard"
import CTA from "@/components/CTA"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <main>

      <Hero />

      {/* PRODUCT SECTION */}
      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">

          {siteConfig.products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
            />
          ))}

        </div>
      </section>

      <CTA />

    </main>
  )
}