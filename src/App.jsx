import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './features/Hero/Hero';
import Cast from './features/Cast/Cast';
import Archives from './features/Archive/Archives';
import Timeline from './features/Timeline/Timeline';
import BaraatCard from './features/EventPages/BaraatCard';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <Hero />
      <Cast />
      <Archives />
      <Timeline />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="bg-[#FAF9F6] min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baraat" element={<BaraatCard />} />
          <Route path="/walima" element={<div className="p-20 text-center">Walima Coming Soon!</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;