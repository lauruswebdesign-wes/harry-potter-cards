import Card from "./Card";

const placeholderCards = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Albus Dumbledore",
  "Minerva McGonagall",
  "Severus Snape",
  "Lord Voldemort",
  "Ginny Weasley",
];

export default function CardGrid() {
  return (
    <section className="w-full px-4 py-8 md:px-0">
      <div className="mx-auto grid max-w-[1230px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {placeholderCards.map((name, index) => (
          <div key={name} className="flex justify-center">
            <Card
              name={name}
              accent={index % 2 === 0 ? "#D9D9D9" : "#C9C7C7"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
