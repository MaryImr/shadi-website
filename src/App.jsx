import './index.css';
import Hero from './features/Hero/Hero';
import Cast from './features/Cast/Cast';
import Archives from './features/Archive/Archives';

function App() {
  return (
    <main className="bg-shadi-cream min-h-screen">
      <Hero />
      <Cast />
      <Archives />
    </main>
  );
}

export default App;