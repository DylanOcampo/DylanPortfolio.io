import { useEffect, useState } from 'react';
import GradientText from './GradientText';
import { profile } from '../data/content';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" aria-label="Dylan Ocampo — home" className="flex items-center">
          <GradientText
            colors={['#0b3c92', '#1261e1', '#80b2f0']}
            animationSpeed={6}
            className="font-display text-lg tracking-wide sm:text-xl"
          >
            DYLAN OCAMPO
          </GradientText>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/75 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold tracking-wide text-white transition hover:border-brand-400 hover:bg-brand-500/10"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform ${
                menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-5 bg-white transition-transform ${
                menuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ink-900/95 px-6 pb-6 pt-2 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-white/80 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
