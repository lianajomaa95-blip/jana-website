function Training() {
  const topics = [
    "AI for Professionals",
    "AI & Communication",
    "Prompt Engineering",
    "Leadership Communication",
    "Workplace Communication",
    "Personal Branding",
    "Business and Professional Writing",
  ]

  return (
    <div>
      {/* NAVY header band */}
      <section className="bg-navy px-8 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1.75 w-1.75 bg-baby" />
            <span className="text-xs tracking-[0.2em] text-baby">TRAINING</span>
          </div>
          <h1 className="font-serif text-3xl font-medium text-white md:text-4xl">
            Sharing Knowledge That Creates Impact
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-loose text-white/70">
            I enjoy creating learning experiences that are practical, engaging, and
            relevant to today's workplace.
          </p>
        </div>
      </section>

      {/* WHITE — training topics */}
      <section className="bg-white px-8 py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.75 w-1.75 border border-navy bg-baby" />
            <span className="text-xs tracking-[0.2em] text-navy/60">TRAINING TOPICS</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-baby text-navy">
                  ✦
                </span>
                <span className="text-sm font-medium text-navy">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE — conferences & events note */}
      <section className="border-t border-slate-100 bg-[#F5F9FD] px-8 py-14 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1.75 w-1.75 border border-navy bg-baby" />
            <span className="text-xs tracking-[0.2em] text-navy/60">CONFERENCES &amp; EVENTS</span>
          </div>
          <h2 className="mb-3 font-serif text-xl font-medium text-navy">
            Where I've shared my work
          </h2>
          <p className="max-w-2xl text-sm leading-loose text-navy/70">
            A selection of conferences, workshops, and speaking engagements I have
            participated in.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Training