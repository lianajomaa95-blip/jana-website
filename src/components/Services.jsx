function Services() {
  const services = [
    {
      title: "Communication Consulting",
      desc: "Helping organizations deliver their messages with clarity and purpose.",
    },
    {
      title: "AI & Communication",
      desc: "Helping professionals use AI effectively with a human touch.",
    },
    {
      title: "Corporate Training",
      desc: "Delivering practical workshops that transform theory into practice.",
    },
    {
      title: "Research & Analysis",
      desc: "Transforming data and research into valuable insights.",
    },
    {
      title: "Personal Branding",
      desc: "Helping professionals communicate their value and build their digital presence.",
    },
    {
      title: "Workshops",
      desc: "Sharing ideas that inspire learning, growth, and innovation.",
    },
  ]

  return (
    <section className="border-b border-slate-100 bg-[#F5F9FD] px-8 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">

        {/* section label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-1.75 w-1.75 border border-navy bg-baby" />
          <span className="text-xs tracking-[0.2em] text-navy/60">SERVICES</span>
        </div>

        {/* heading */}
        <h2 className="mb-8 font-serif text-2xl font-medium text-navy">
          How I can help
        </h2>

        {/* cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-b-xl border border-slate-200 border-t-[3px] border-t-navy bg-white p-5"
            >
              <h3 className="mb-2 text-sm font-semibold text-navy">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-navy/50">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services