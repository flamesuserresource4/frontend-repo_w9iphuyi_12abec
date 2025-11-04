import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointer = (x, y) => {
      // Normalize to -1..1 range
      const nx = (x / window.innerWidth) * 2 - 1;
      const ny = (y / window.innerHeight) * 2 - 1;
      targetRef.current = { x: nx, y: ny };
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    const onMouseMove = (e) => handlePointer(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const tick = () => {
      rafRef.current = 0;
      setParallax((prev) => {
        const lerp = 0.12;
        const nx = prev.x + (targetRef.current.x - prev.x) * lerp;
        const ny = prev.y + (targetRef.current.y - prev.y) * lerp;
        // Queue another frame until we are close
        if (Math.abs(nx - targetRef.current.x) > 0.001 || Math.abs(ny - targetRef.current.y) > 0.001) {
          rafRef.current = requestAnimationFrame(tick);
        }
        return { x: nx, y: ny };
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const translateX = parallax.x * 10; // px
  const translateY = parallax.y * 10; // px
  const rotate = parallax.x * 2; // deg

  return (
    <section id="home" className="relative">
      <div className="relative h-[90vh] w-full overflow-hidden rounded-b-[2rem] border-b border-white/10">
        {/* 3D Interactive Spline Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Gradient overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.2),rgba(255,255,255,0)_40%),linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.85)_100%)]" />

        {/* Foreground content (doesn't block Spline) */}
        <div
          className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl items-center px-6"
          style={{
            transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`,
            transition: 'transform 60ms linear',
            willChange: 'transform',
          }}
        >
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm tracking-widest text-white/70">PORTFOLIO</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              Fraol Teshome
            </h1>
            <p className="mt-4 text-lg text-white/85 sm:text-xl">
              A playful, interactive hero where a cartoon cursor meets a floating Game Boy over a bright orange backdrop. Drag, tap, or move your cursor to explore.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-white/20"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
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
