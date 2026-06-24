import { useState } from 'react'

function Services() {
  const services = [
    { title: "Communication Consulting", desc: "Helping organizations deliver their messages with clarity and purpose." },
    { title: "AI & Communication", desc: "Guiding professionals on using AI effectively with a human touch." },
    { title: "Corporate Training", desc: "Delivering practical workshops that transform theory into practice." },
    { title: "Research & Analysis", desc: "Transforming data and research into valuable insights." },
    { title: "Personal Branding", desc: "Offering businesses communication strategies to build their digital presence." },
    { title: "Workshops", desc: "Sharing ideas that inspire learning, growth, and innovation." },
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="border-b border-slate-100 bg-white px-8 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center gap-3">
          <span className="h-[7px] w-[7px] border border-navy bg-baby" />
          <span className="text-xs tracking-[0.2em] text-navy">HOW I CAN HELP</span>
        </div>

        <div className="max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {services.map((service, i) => {
            const isOpen = openIndex === i
            return (
              <div key={service.title}>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-base font-medium text-navy md:text-lg">
                    {service.title}
                  </span>
                  <span className={`text-xl text-navy transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-4 text-sm leading-relaxed text-navy md:text-base">
                    {service.desc}
                  </p>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services