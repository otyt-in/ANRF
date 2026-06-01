export default function RosewoodConservationPage() {
  return (
    <main className="bg-linen">
      <section className="bg-canopy px-5 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-linen/70">Rosewood conservation</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Protecting East Indian Rosewood through planting, study and field documentation.</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3">
        {[
          ["2000+ saplings", "ANRF has planted more than 2,000 rosewood saplings on farmland near Mundgod."],
          ["Nursery capacity", "A nursery has been built to nurture saplings for future farmland and pilot plot work."],
          ["Pilot plots", "Forest pilot plots are being identified and improved with scientific and institutional collaboration."],
        ].map(([title, copy]) => (
          <article key={title} className="bg-white p-6">
            <h2 className="font-serif text-3xl text-canopy">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-ink/75">{copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
