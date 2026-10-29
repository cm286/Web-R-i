import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Dishes from './components/Dishes';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Dishes />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
