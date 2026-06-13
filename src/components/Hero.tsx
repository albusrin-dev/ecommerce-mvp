import Button from "./Button"

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url('/gym.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">

          <span className="text-sm bg-[#1f2833] px-3 py-1 rounded-full w-fit">
            384K+ Followers Brand
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            NATTY{" "}
            <span className="text-[#ccff00]">NELSON</span>
          </h1>

          <p className="text-gray-400 max-w-md">
            Build a powerful physique, gain real strength, and transform your body with elite training systems.
          </p>

          <div className="flex gap-4">
            <Button text="Transform Your Physique" />
            <Button text="Browse Shop" variant="secondary" />
          </div>

        </div>

        {/* RIGHT SIDE (EMPTY FOR IMAGE FOCUS) */}
        <div />

      </div>
    </section>
  )
}