import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-amber-200">
          <Navbar /> {/* 4 */}
          <Hero /> {/* 1 */}
          <About /> {/* 2 */}
          <Features /> {/* 5 */}
          <Story /> {/* 6 */}
          <Contact /> {/* 7 */}
          <Footer /> {/* 8 */}
      </main>
  );
}

export default App;
