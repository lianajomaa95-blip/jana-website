import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Publications", path: "/publications" },
    { name: "Training", path: "/training" },
    { name: "Certifications", path: "/certifications" },
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-8 py-4 md:px-12">

        {/* logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-xs font-semibold tracking-wide text-white">
            JS
          </span>
          <span className="text-sm font-semibold text-navy">Jana Saab</span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-4 lg:flex">
          <ul className="flex items-center gap-5 text-[11px] text-navy/60">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-navy">{link.name}</Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="rounded-md bg-navy px-4 py-2 text-[11px] font-medium text-white">
            Contact
          </Link>
        </div>

        {/* mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="flex flex-col gap-[5px] lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

      </nav>

      {/* mobile dropdown menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="flex flex-col px-8 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-navy/70 hover:text-navy"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-navy px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar