import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[88vh] w-full overflow-hidden rounded-b-[2rem] border-b border-white/10">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.8)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm tracking-widest text-white/70">PORTFOLIO</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              Fraol Teshome
            </h1>
            <p className="mt-4 text-lg text-white/85 sm:text-xl">
              Building modern, playful, and interactive web experiences with a strong focus on performance and design.
            </p>

            <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-white/20"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
