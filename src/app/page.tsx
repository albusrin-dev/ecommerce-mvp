import Hero from "@/components/Hero"
import ProductCard from "@/components/ProductCard"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main>

      <Hero />

      {/* PRODUCT SECTION */}
      <section className="py-24">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ProductCard name="Workout Program" price={999} />
          <ProductCard name="Nutrition Plan" price={799} />
          <ProductCard name="Coaching Access" price={1499} />

        </div>
      </section>

      <CTA />

    </main>
  )
}