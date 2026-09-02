import Card from "./Card";

const charactersUrl = "https://hp-api.onrender.com/api/characters";

type Character = {
  id: string;
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

export default async function CardGrid() {
  let characters: Character[] = [];

  try {
    const response = await fetch(charactersUrl, { next: { revalidate: 3600 } });

    if (!response.ok) {
      throw new Error(`Character API returned ${response.status}`);
    }

    characters = (await response.json()) as Character[];
  } catch {
    return (
      <section className="px-4 py-8 text-center font-light text-white">
        Characters are not available right now.
      </section>
    );
  }

  return (
    <section className="w-full px-4 py-8 md:px-0">
      <div className="mx-auto grid max-w-[1230px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {characters.map((character) => (
          <div key={character.id} className="flex justify-center">
            <Card
              image={character.image}
              name={character.name}
              house={character.house}
              ancestry={character.ancestry}
              wand={character.wand}
              patronus={character.patronus}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
