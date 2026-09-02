type CardProps = {
  image: string;
  name: string;
  house: string;
  ancestry: string;
  wand: {
    wood: string;
    core: string;
  };
  patronus: string;
};

const houseColors: Record<string, string> = {
  gryffindor: "#740001",
  slytherin: "#1a472a",
  ravenclaw: "#0e1a40",
  hufflepuff: "#ecb939",
};

function valueOrFallback(value?: string | null) {
  return value?.trim() || "not available";
}

export default function Card({
  image,
  name,
  house,
  ancestry,
  wand,
  patronus,
}: CardProps) {
  const houseName = valueOrFallback(house);
  const houseColor = houseColors[house?.toLowerCase()] ?? "#D9D9D9";
  const wandDetails = [wand.wood, wand.core].filter(Boolean).join(" / ");

  return (
    <article
      className="flex h-[162px] w-[270px] overflow-hidden rounded-[10px] border border-black/10 bg-white shadow-sm"
      style={{ fontFamily: "var(--font-oswald)" }}
    >
      <div className="relative w-[98px] shrink-0 bg-[#f2f2f2]">
        {image ? (
          <img
            src={image}
            alt={valueOrFallback(name)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-2 text-center text-[10px] font-light uppercase text-black/60">
            Not available
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1 text-[#1a1a1a]">
        <div className="px-2 pt-1 text-lg font-bold uppercase leading-tight tracking-[0.04em]">
          {valueOrFallback(name)}
        </div>
        <div
          className="mt-1 px-2 py-0.5 text-[12px] font-medium uppercase leading-tight text-white"
          style={{ backgroundColor: houseColor }}
        >
          {houseName}
        </div>
        <div className="space-y-1 px-2 pt-1 text-[14px] font-light leading-tight text-black/80">
          <div>Ancestry: {valueOrFallback(ancestry)}</div>
          <div>Wand: {valueOrFallback(wandDetails)}</div>
          <div>Patronus: {valueOrFallback(patronus)}</div>
        </div>
      </div>
    </article>
  );
}
