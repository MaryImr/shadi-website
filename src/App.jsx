import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Hero from './features/Hero/Hero';
import Cast from './features/Cast/Cast';
import Archives from './features/Archive/Archives';
import Timeline from './features/Timeline/Timeline';

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
      <main className="bg-shadi-cream min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baraat" element={<div className="p-20 text-center">Baraat Page Coming Soon!</div>} />
          <Route path="/walima" element={<div className="p-20 text-center">Walima Page Coming Soon!</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;