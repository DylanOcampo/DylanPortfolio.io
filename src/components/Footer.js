import { SiArtstation } from 'react-icons/si';
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';
import GradientText from './GradientText';
import { profile } from '../data/content';

const SOCIAL_LINKS = [
  { Icon: TbBrandLinkedin, label: 'LinkedIn', href: profile.links.linkedin },
  { Icon: TbBrandGithub, label: 'GitHub', href: profile.links.github },
  { Icon: SiArtstation, label: 'ArtStation', href: profile.links.artstation },
];

export const Footer = () => (
  <footer className="border-t border-white/10 bg-ink-900 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <a href="#home" aria-label="Dylan Ocampo — home" className="flex items-center gap-2">
        <GradientText
          colors={['#0b3c92', '#1261e1', '#80b2f0']}
          animationSpeed={6}
          className="font-display text-base tracking-wide"
        >
          DYLAN OCAMPO
        </GradientText>
      </a>

      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand-400 hover:text-brand-300"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <p className="text-xs text-white/40">Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
    </div>
  </footer>
);
