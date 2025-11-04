import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background tint */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />

      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Projects />
        {/* An anchor for #contact links; content can be expanded later */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">Get in touch</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Email me at <a href="mailto:fraol@example.com" className="underline decoration-white/40 underline-offset-4 hover:decoration-white">fraol@example.com</a> or reach out on LinkedIn and GitHub via the header.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Fraol Teshome. All rights reserved.
      </footer>
    </div>
  );
}
