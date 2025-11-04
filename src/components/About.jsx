import { User, Code } from 'lucide-react';

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'FastAPI',
    'MongoDB',
    'Framer Motion',
    'Three.js',
  ];

  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <User size={14} /> About
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Designer-minded Frontend Engineer</h2>
            <p className="mt-4 text-white/80">
              I'm Fraol Teshome, a developer who enjoys crafting immersive, interactive interfaces.
              I combine aesthetic design with robust engineering to ship reliable products.
            </p>
            <p className="mt-3 text-white/70">
              Lately, I've been exploring creative coding with WebGL and 3D scenes to bring ideas to life on the web.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="mb-3 flex items-center gap-2 text-white/90">
              <Code size={16} />
              <span className="text-sm font-medium tracking-wide">Core Skills</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
