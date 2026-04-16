import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from './features/Hero/Hero';
import Cast from './features/Cast/Cast';
import Archives from './features/Archive/Archives';
import Timeline from './features/Timeline/Timeline';
import BaraatCard from './features/EventPages/BaraatCard';
import WalimaCard from './features/EventPages/WalimaCard';

function Home() {

  useEffect(() => {
    document.documentElement.classList.add('route-home');
    document.body.classList.add('route-home');

    return () => {
      document.documentElement.classList.remove('route-home');
      document.body.classList.remove('route-home');
    };
  }, []);

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
      <main className="bg-[#FAF9F6] min-h-[100dvh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baraat" element={<BaraatCard />} />
          <Route path="/walima" element={<WalimaCard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;