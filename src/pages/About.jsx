import aboutPhoto from '../assets/jana-about.webp'

function About() {
  const combines = ["Communication", "AI", "Natural Language Processing", "Applied Linguistics", "Research"]
  const drives = [
    "Communicate with confidence",
    "Adapt to emerging technologies",
    "Build meaningful professional identities",
    "Turn knowledge into impact",
    "Navigate change with clarity",
  ]
  const highlights = [
    "PhD Researcher", "Communication Consultant", "NLP Specialist",
    "Corporate Trainer", "Speaker", "Content Strategist",
  ]

  return (
    <div>
      {/* NAVY header band — story text + photo */}
      <section className="bg-navy px-8 py-16 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.75 w-1.75 bg-baby" />
              <span className="text-xs tracking-[0.2em] text-baby">ABOUT</span>
            </div>
            <h1 className="font-serif text-3xl font-medium text-white md:text-4xl">My Story</h1>
            <p className="mt-5 text-sm leading-loose text-white/70">
              My journey began with a passion for language, communication, and
              understanding how people create meaning. That passion evolved into
              research, university teaching, consulting, and discovering the
              relationship between communication and artificial intelligence.
            </p>
          </div>
          <div className="relative shrink-0">
            <img
              src={aboutPhoto}
              alt="Jana Saab"
              width="260"
              height="340"
              className="h-80 w-60 rounded-xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-3 -right-3 -z-10 h-20 w-20 rounded-xl bg-baby" />
          </div>
        </div>
      </section>

      {/* WHITE — my work combines */}
      <section className="border-b border-slate-100 bg-white px-8 py-14 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-xl font-medium text-navy">My work combines</h2>
          <div className="flex flex-wrap gap-2.5">
            {combines.map((item) => (
              <span key={item} className="rounded border border-[#BFD9F2] bg-white px-4 py-2 text-xs text-navy">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-navy">
            My mission is to help people and organizations communicate more
            effectively, think critically, and create meaningful impact.
          </p>
        </div>
      </section>

      {/* WHITE — what drives me */}
      <section className="bg-[#F5F9FD] px-8 py-14 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-xl font-medium text-navy">What Drives Me</h2>
          <ul className="grid max-w-2xl gap-3 sm:grid-cols-2">
            {drives.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy/70">
                <span className="mt-0.5 font-semibold text-navy">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHITE — professional highlights */}
      <section className="border-t border-slate-100 bg-white px-8 py-14 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-xl font-medium text-navy">Professional Highlights</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((role) => (
              <div key={role} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-navy">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About