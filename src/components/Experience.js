import { education, experience, languagesAndCerts } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export const Experience = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="experience" className="relative bg-ink-800 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Experience</h2>
          <p className="mt-3 text-white/60">4 years building web, real-time and game products in the gaming industry.</p>
        </div>

        <ol className="relative space-y-10 border-l border-white/15 pl-8">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span
                className={`absolute -left-[37px] top-1 h-3.5 w-3.5 rounded-full border-2 ${
                  job.current ? 'border-brand-400 bg-brand-400' : 'border-white/40 bg-ink-800'
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-white">
                  {job.role} <span className="text-white/50">· {job.company}</span>
                </h3>
                <span className="text-sm font-medium text-brand-300">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-white/65">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-300">Education</h3>
            <ul className="space-y-3">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="text-sm font-semibold text-white">{item.degree}</p>
                  <p className="text-sm text-white/55">
                    {item.school} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-300">
              Languages &amp; Certifications
            </h3>
            <p className="text-sm text-white/65">{languagesAndCerts.languages.join(' · ')}</p>
            <ul className="mt-3 space-y-1.5">
              {languagesAndCerts.certifications.map((cert) => (
                <li key={cert} className="flex gap-2 text-sm text-white/55">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
