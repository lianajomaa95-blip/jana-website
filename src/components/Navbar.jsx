import { Link } from 'react-router-dom'

function Navbar() {
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
    <header className="border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-8 py-4 md:px-12">

        {/* LEFT: logo + name (clicking goes Home) */}
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-xs font-semibold tracking-wide text-white">
            JS
          </span>
          <span className="text-sm font-semibold text-navy">Jana Saab</span>
        </Link>

        {/* RIGHT: links + contact button */}
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-5 text-[11px] text-navy/60 lg:flex">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-navy">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="rounded-md bg-navy px-4 py-2 text-[11px] font-medium text-white"
          >
            Contact
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navbar