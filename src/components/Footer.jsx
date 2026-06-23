import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <footer className="bg-navy px-8 py-9 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row">

        {/* LEFT: logo + tagline */}
        <div className="max-w-xs">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1B3D5C] text-[10px] font-semibold text-baby">
              JS
            </span>
            <span className="text-sm font-medium text-white">Jana Saab</span>
          </div>
          <p className="text-[11px] leading-relaxed text-[#9DC4ED]">
            Empowering Better Communication Through Research, AI, and Human Connection.
          </p>
        </div>

        {/* RIGHT: socials + location */}
        <div className="sm:text-right">
          <div className="mb-3 flex gap-2.5 sm:justify-end">

            <a href="https://www.linkedin.com/in/jana-saab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2C4A66] text-baby transition hover:bg-[#1B3D5C]">
              <FaLinkedinIn size={14} />
            </a>

            <a href="https://www.instagram.com/janasaab28?igsh=MTY4YmRvZ2ptZHhscg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2C4A66] text-baby transition hover:bg-[#1B3D5C]">
              <FaInstagram size={15} />
            </a>

            <a href="mailto:janamsaab15@gmail.com" aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2C4A66] text-baby transition hover:bg-[#1B3D5C]">
              <MdEmail size={16} />
            </a>

          </div>
          <p className="text-[10px] text-[#9DC4ED]">
            Kuwait · Lebanon &nbsp;|&nbsp; janamsaab15@gmail.com
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer