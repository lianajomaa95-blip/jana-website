import { Link } from 'react-router-dom'
import janaPhoto from '../assets/jana.webp'

function Hero() {
  return (
    <section className="bg-white px-8 py-16 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-14">

        {/* LEFT: text */}
        <div className="flex-1">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-6 bg-navy" />
            <span className="text-xs tracking-[0.2em] text-navy">
              COMMUNICATION · AI · WORKPLACE DIGITAL TRANSFORMATION
            </span>
          </div>

          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy md:text-5xl">
            Communicate Better in the Age of AI
          </h1>

          <p className="mt-4 text-base font-medium text-navy md:text-lg">
            PhD Researcher · AI Strategic Communication Consultant · Corporate Trainer
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy md:text-base">
            I help individuals and organizations integrate AI tools successfully
            into their work in the GCC. My work combines research, strategy, and
            practical solutions to help people communicate more effectively, build
            stronger professional identities, and boost their digital presence
            through branding.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-navy px-6 py-3 text-sm font-medium text-white md:text-base"
            >
              Get in touch
            </Link>
            <Link
              to="/services"
              className="border-b border-navy pb-0.5 text-sm font-medium text-navy md:text-base"
            >
              Explore services →
            </Link>
          </div>
        </div>

        {/* RIGHT: photo */}
        <div className="relative flex-shrink-0">
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