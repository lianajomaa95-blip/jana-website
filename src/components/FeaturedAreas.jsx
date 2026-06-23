function FeaturedAreas() {
  const areas = [
    "Artificial Intelligence & Communication",
    "Natural Language Processing (NLP)",
    "Applied Linguistics",
    "Strategic Communication",
    "Workplace Communication",
    "Personal Branding",
    "Digital Transformation",
  ]

  return (
    <section className="border-b border-slate-100 bg-white px-8 py-16 md:px-12">
      <div className="mx-auto max-w-5xl text-center">

        {/* section label (centered) */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-1.75 w-1.75 border border-navy bg-baby" />
          <span className="text-xs tracking-[0.2em] text-navy/60">FEATURED AREAS</span>
        </div>

        {/* tag pills */}
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2.5">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded border border-[#BFD9F2] px-4 py-2 text-xs text-navy"
            >
              {area}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedAreas