import './index.css'; // This is the only CSS we need
import Hero from './features/Hero/Hero';

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Future sections like <Cast /> will go here */}
    </main>
  );
}

export default App;