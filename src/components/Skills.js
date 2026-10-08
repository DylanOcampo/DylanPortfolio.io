import { creativeTools, skillGroups } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export const Skills = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="skills" className="relative bg-ink-900 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Skills</h2>
          <p className="mt-3 text-white/60">
            The stack I use to build player-facing web apps, APIs and real-time systems end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-300">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-800 px-3 py-1.5 text-sm text-white/85"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-white/15 p-5 text-sm text-white/60">
          <span className="font-semibold text-white/80">Background in 3D &amp; game tools:</span>
          {creativeTools.map(({ name, Icon }) => (
            <span key={name} className="inline-flex items-center gap-1.5">
              <Icon className="h-4 w-4 text-white/50" aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
