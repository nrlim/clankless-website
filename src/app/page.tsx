import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContractInfo from "@/components/ContractInfo";
import Social from "@/components/Social";
import Chart from "@/components/Chart";
import About from "@/components/About";
import HowToBuy from "@/components/HowToBuy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-graphite text-white">
      <Navbar />
      <Hero />
      <ContractInfo />
      <About />
      <HowToBuy />
      <Chart />
      <Social />
      <FAQ />
      <Footer />
    </main>
  );
}
