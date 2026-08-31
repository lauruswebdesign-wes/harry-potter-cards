import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="mx-auto w-full max-w-[1230px] px-0 py-8">
        <CardGrid />
      </main>

      <Footer />
    </div>
  );
}
