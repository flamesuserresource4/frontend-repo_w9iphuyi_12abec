import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { Mail, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(120,119,198,0.15),transparent_60%)]" />

      <Navbar />
      <main className="relative z-0">
        <Hero />
        <About />
        <Projects />

        <section id="contact" className="relative">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur">
              <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something together</h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/75">
                Open to freelance opportunities, collaborations, and full-time roles focused on modern web development and interactive experiences.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:fraol@example.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-white/20"
                >
                  <Mail size={16} /> Email Me
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-white/60">
          © {new Date().getFullYear()} Fraol Teshome. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
