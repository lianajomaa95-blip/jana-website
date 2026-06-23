import janaPhoto from '../assets/jana.webp'

function Hero() {
  return (
    <section className="bg-white px-8 py-16 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-14">

        {/* LEFT: text */}
        <div className="flex-1">
          {/* eyebrow / tagline */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-6 bg-navy" />
            <span className="text-xs tracking-[0.2em] text-navy/60">
              COMMUNICATION · AI · WORKPLACE TRANSFORMATION
            </span>
          </div>

          {/* headline */}
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy md:text-5xl">
            Communicate Better in the Age of AI
          </h1>

          {/* roles */}
          <p className="mt-4 text-base text-navy/80">
            PhD Researcher · Consultant · Trainer
          </p>

          {/* intro */}
          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/60">
            I help individuals and organizations integrate AI tools successfully
            into their work across the GCC.
          </p>

          {/* buttons */}
          <div className="mt-8 flex items-center gap-4">
            <a className="cursor-pointer rounded-md bg-navy px-6 py-3 text-sm font-medium text-white">
              Get in touch
            </a>
            <a className="cursor-pointer border-b border-navy pb-0.5 text-sm font-medium text-navy">
              Explore services →
            </a>
          </div>
        </div>

        {/* RIGHT: photo with accent square */}
        <div className="relative shrink-0">
          <img
            src={janaPhoto}
            alt="Jana Saab"
            width="176"
            height="208"
            className="h-52 w-44 rounded-xl object-cover shadow-sm"
          />
          <div className="absolute -bottom-3 -right-3 -z-10 h-16 w-16 rounded-xl bg-baby" />
        </div>

      </div>
    </section>
  )
}

export default Hero