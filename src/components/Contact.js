import { SiArtstation } from 'react-icons/si';
import { TbBrandGithub, TbBrandLinkedin, TbMail } from 'react-icons/tb';
import { profile } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const CONTACT_ITEMS = [
  { Icon: TbMail, label: profile.email, href: `mailto:${profile.email}` },

];

const SOCIAL_LINKS = [
  { Icon: TbBrandLinkedin, label: 'LinkedIn', href: profile.links.linkedin },
  { Icon: TbBrandGithub, label: 'GitHub', href: profile.links.github },
  { Icon: SiArtstation, label: 'ArtStation', href: profile.links.artstation },
];

export const Contact = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-900 to-ink-900 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 text-center transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="font-display text-3xl text-white sm:text-4xl">Let&apos;s build something together</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Reach out directly or find me on any of the platforms below.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          {CONTACT_ITEMS.map(({ Icon, label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/50 hover:bg-white/20"
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ) : (
              <span key={label} className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
                <Icon className="h-4 w-4" /> {label}
              </span>
            ),
          )}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white hover:text-brand-700"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
