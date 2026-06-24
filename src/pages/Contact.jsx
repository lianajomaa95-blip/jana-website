import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch("https://formspree.io/f/xykqzadr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div>
      {/* NAVY header band */}
      <section className="bg-navy px-8 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[7px] w-[7px] bg-baby" />
            <span className="text-xs tracking-[0.2em] text-baby">CONTACT</span>
          </div>
          <h1 className="font-serif text-3xl font-medium text-white md:text-4xl">
            Let&apos;s Connect!
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-loose text-white md:text-base">
            Whether you&apos;re interested in consulting, training, speaking
            opportunities, or research collaboration, I would like to hear from you.
          </p>
        </div>
      </section>

      {/* WHITE — details + form */}
      <section className="bg-white px-8 py-16 md:px-12">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

          {/* LEFT: contact details */}
          <div>
            <h2 className="mb-6 font-serif text-xl font-medium text-navy md:text-2xl">Get in Touch!</h2>
            <ul className="space-y-4 text-sm text-navy md:text-base">
              <li>
                <span className="block text-[11px] uppercase tracking-wide text-navy md:text-xs">Email</span>
                <a href="mailto:janamsaab15@gmail.com" className="text-navy hover:underline">
                  janamsaab15@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wide text-navy md:text-xs">LinkedIn</span>
                <a href="https://www.linkedin.com/in/jana-saab/" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">
                  linkedin.com/in/jana-saab
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wide text-navy md:text-xs">Instagram</span>
                <a href="https://www.instagram.com/janasaab28?igsh=MTY4YmRvZ2ptZHhscg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">
                  @janasaab28
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wide text-navy md:text-xs">Location</span>
                Kuwait | Lebanon
              </li>
            </ul>
          </div>

          {/* RIGHT: form */}
          <div>
            <h2 className="mb-6 font-serif text-xl font-medium text-navy md:text-2xl">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name" type="text" placeholder="Name" required
                className="w-full rounded-lg border border-navy/30 px-4 py-3 text-sm text-navy outline-none focus:border-navy md:text-base"
              />
              <input
                name="email" type="email" placeholder="Email" required
                className="w-full rounded-lg border border-navy/30 px-4 py-3 text-sm text-navy outline-none focus:border-navy md:text-base"
              />
              <input
                name="organization" type="text" placeholder="Organization"
                className="w-full rounded-lg border border-navy/30 px-4 py-3 text-sm text-navy outline-none focus:border-navy md:text-base"
              />
              <textarea
                name="message" placeholder="Message" rows="5" required
                className="w-full rounded-lg border border-navy/30 px-4 py-3 text-sm text-navy outline-none focus:border-navy md:text-base"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-lg bg-navy px-8 py-3 text-sm font-medium text-white transition hover:bg-navy/90 disabled:opacity-60 md:text-base"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-navy">Thank you! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-navy">Something went wrong. Please email directly.</p>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact