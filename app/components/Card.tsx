type CardProps = {
  name: string;
  accent?: string;
};

export default function Card({ name, accent = "#D9D9D9" }: CardProps) {
  return (
    <article
      className="flex h-[162px] w-[270px] overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-sm"
      style={{ fontFamily: "var(--font-oswald)" }}
    >
      <div className="flex w-[98px] items-center justify-center bg-[#f2f2f2]">
        <div
          className="h-[112px] w-[72px] rounded-[6px] border border-black/10"
          style={{ backgroundColor: accent }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-2 px-4 py-3 text-[#1a1a1a]">
        <div className="text-lg font-bold uppercase tracking-[0.08em]">{name}</div>
        <div className="text-[11px] font-light uppercase tracking-[0.1em] text-black/80">
          House
        </div>
        <div className="text-[11px] font-light uppercase tracking-[0.1em] text-black/80">
          Actor
        </div>
        <div className="text-[11px] font-light uppercase tracking-[0.1em] text-black/80">
          Species
        </div>
      </div>
    </article>
  );
}
