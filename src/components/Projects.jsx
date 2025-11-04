import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Hero',
    description:
      'A landing page powered by a Spline 3D scene with smooth interactions and responsive design.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description:
      'A data-driven dashboard with live updates, charts, and delightful micro-interactions.',
    tags: ['Vite', 'WebSockets', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Creative Code Experiments',
    description:
      'A collection of playful visuals and generative art sketches for the modern web.',
    tags: ['Canvas', 'WebGL', 'Shaders'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-white/70">A snapshot of work highlighting interactivity, performance, and polish.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target={p.link?.startsWith('#') ? undefined : '_blank'}
              rel={p.link?.startsWith('#') ? undefined : 'noreferrer'}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium text-white">{p.title}</h3>
                  <ExternalLink size={16} className="text-white/60" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-[11px] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
