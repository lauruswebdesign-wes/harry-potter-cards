export default function Header() {
  return (
    <header className="bg-[#20103D] text-white">
      <div className="mx-auto flex max-w-[1230px] items-center justify-between px-6 py-5">
        <div
          className="text-3xl tracking-[0.08em] md:text-4xl"
          style={{ fontFamily: "var(--font-jaro)" }}
        >
          HARRY POTTER
        </div>

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-white/80 md:flex">
          <span>Characters</span>
          <span>Houses</span>
          <span>Spellbook</span>
        </nav>
      </div>
    </header>
  );
}
