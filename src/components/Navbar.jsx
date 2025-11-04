import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-lg font-semibold tracking-tight text-white">
              Fraol Teshome
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="ml-2 flex items-center gap-3">
                <a
                  href="mailto:fraol@example.com"
                  aria-label="Email"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </nav>

            <button
              aria-label="Toggle Menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 pb-4 md:hidden">
              <div className="flex flex-col gap-3 py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-4">
                  <a href="mailto:fraol@example.com" className="text-white/80 hover:text-white"><Mail size={18} /></a>
                  <a href="https://github.com/" className="text-white/80 hover:text-white" target="_blank" rel="noreferrer"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/" className="text-white/80 hover:text-white" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
