import aboutPhoto from '../assets/jana-about.jpg'

function About() {
  return (
    <section className="border-b border-slate-100 bg-white px-8 py-16 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">

        {/* LEFT: text */}
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[7px] w-[7px] border border-navy bg-baby" />
            <span className="text-xs tracking-[0.2em] text-navy">WELCOME</span>
          </div>

          <h2 className="mb-4 font-serif text-2xl font-medium text-navy md:text-3xl">
            Meet Jana!
          </h2>

          <p className="max-w-2xl text-sm leading-loose text-navy md:text-base">
            I help individuals and organizations to integrate AI tools successfully
            in their work in the GCC. My work combines research, strategy, and
            practical solutions to help people communicate more effectively, build
            stronger professional identities, and boost their digital presence
            through branding.
          </p>

          <a className="mt-6 inline-block cursor-pointer border-b border-navy pb-0.5 text-sm font-medium text-navy md:text-base">
            More about me →
          </a>
        </div>

        {/* RIGHT: photo */}
        <div className="relative flex-shrink-0">
          <img
            src={aboutPhoto}
            alt="Jana Saab"
            width="240"
            height="300"
            className="h-72 w-56 rounded-xl object-cover shadow-sm"
          />
          <div className="absolute -bottom-3 -right-3 -z-10 h-16 w-16 rounded-xl bg-baby" />
        </div>

      </div>
    </section>
  )
}

export default About