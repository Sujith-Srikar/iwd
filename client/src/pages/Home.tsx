import { NavBar, HeroSection, Features, Footer } from "../components/index";

function Home() {
  return (
    <div className="h-full">
      <NavBar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;