function Services() {
  const services = [
    {
      title: "Communication Consulting",
      desc: "Helping organizations enhance their communication strategies, messaging, and audience engagement.",
    },
    {
      title: "AI & Communication Consulting",
      desc: "Helping teams use AI tools easily while maintaining authentic and meaningful communication.",
    },
    {
      title: "Corporate Training",
      desc: "Providing engaging training that helps professionals develop practical skills they can directly apply.",
    },
    {
      title: "NLP Consulting",
      desc: "Offering organizations ways to understand how language technologies can support communication, analysis, and innovation.",
    },
    {
      title: "Research & Analysis",
      desc: "Showing research-based insights that support decision-making and strategic growth.",
    },
    {
      title: "Personal Branding",
      desc: "Enhancing organizations' ways of communication to position themselves as trusted voices in their field.",
    },
    {
      title: "Speaking Engagements",
      desc: "Delivering presentations, workshops, and keynote talks on communication, AI, NLP, and professional development.",
    },
  ]

  return (
    <div>
      {/* NAVY header band */}
      <section className="bg-navy px-8 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[7px] w-[7px] bg-baby" />
            <span className="text-xs tracking-[0.2em] text-baby">SERVICES</span>
          </div>
          <h1 className="font-serif text-3xl font-medium text-white md:text-4xl">
            What I Offer
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-loose text-white md:text-base">
            Practical &amp; research-based services that help individuals and
            organizations communicate with clarity and confidence in the age of AI.
          </p>
        </div>
      </section>

      {/* WHITE services grid */}
      <section className="bg-white px-8 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-b-xl border border-slate-200 border-t-[3px] border-t-navy bg-white p-6 transition hover:shadow-md"
              >
                <h3 className="mb-2.5 text-sm font-semibold text-navy md:text-base">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-navy md:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services