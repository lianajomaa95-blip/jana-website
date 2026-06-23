function Credentials() {
  const roles = [
    "PhD Researcher",
    "Communication Consultant",
    "NLP Specialist",
    "Corporate Trainer",
    "Speaker",
  ]

  return (
    <section className="bg-navy px-8 py-4 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {roles.map((role, index) => (
          <span key={role} className="flex items-center gap-x-5">
            <span className="text-[11px] font-medium tracking-wide text-white">
              {role}
            </span>
            {/* separator dot — hidden after the last item */}
            {index < roles.length - 1 && (
              <span className="text-baby">◆</span>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Credentials