import { Link } from 'react-router-dom'

function ContactCTA() {
  return (
    <section className="bg-white px-8 py-16 md:px-12">
      <div className="mx-auto max-w-5xl text-center">

        <h2 className="mb-3 font-serif text-3xl font-medium text-navy md:text-4xl">
          Let&apos;s Connect!
        </h2>

        <p className="mx-auto mb-7 max-w-md text-sm leading-relaxed text-navy md:text-base">
          Whether you&apos;re interested in consulting, training, speaking, or
          research collaboration, I would like to hear from you.
        </p>

        <Link
          to="/contact"
          className="inline-block rounded-md bg-navy px-8 py-3.5 text-sm font-medium text-white md:text-base"
        >
          Get in touch
        </Link>

      </div>
    </section>
  )
}

export default ContactCTA