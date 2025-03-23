import { NavBar } from "../components/index";

function Home() {
  return (
    <>
      <NavBar />
      {/* Add dummy content to allow scrolling */}
      <main className="min-h-screen">
        <section className="h-[250vh]  flex items-center justify-center">
          <h2 className="text-3xl text-gray-700">
            Scroll down to see the NavBar effect in action
          </h2>
        </section>
      </main>
    </>
  );
}

export default Home;
