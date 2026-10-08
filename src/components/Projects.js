import { TbArrowUpRight, TbBrandGithub, TbPhoto } from 'react-icons/tb';
import { featuredProjects, moreProjects } from '../data/content';
import { YoutubeEmbed } from './YoutubeEmbed';
import { useReveal } from '../hooks/useReveal';

const FeaturedCard = ({ project }) => (
  <article className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
    <div>
      <h3 className="font-display text-2xl text-white">{project.title}</h3>
      <p className="mt-1 text-sm font-semibold text-brand-300">{project.subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed text-white/65">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stats.map((stat) => (
          <li key={stat} className="rounded-full border border-white/15 bg-ink-800 px-3 py-1 text-xs font-semibold text-white/80">
            {stat}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.site && (
          <a
            href={project.links.site}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Visit <TbArrowUpRight className="h-4 w-4" />
          </a>
        )}
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand-400"
          >
            <TbBrandGithub className="h-4 w-4" /> Repository
          </a>
        )}
      </div>
    </div>

    <div className="flex flex-col gap-4">
      {project.youtubeId ? (
        <YoutubeEmbed embedId={project.youtubeId} title={`${project.title} demo`} />
      ) : project.image ? (
        <img src={project.image} alt={project.title} className="w-full rounded-xl border border-white/10 object-cover" />
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-ink-800/60 text-center text-white/40">
          <TbPhoto className="h-8 w-8" />
          <p className="px-6 text-xs">
            Add a screenshot or demo video — set <code className="text-white/60">image</code> or{' '}
            <code className="text-white/60">youtubeId</code> for &quot;{project.title}&quot; in{' '}
            <code className="text-white/60">src/data/content.js</code>.
          </p>
        </div>
      )}
    </div>
  </article>
);

const MoreProjectCard = ({ project }) => {
  const Wrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-brand-400/60"
    >
      <div className="aspect-video w-full overflow-hidden bg-ink-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-center text-white/40">
            <TbPhoto className="h-6 w-6" />
            <p className="px-6 text-[11px]">
              Add an image for &quot;{project.title}&quot; in <code className="text-white/60">src/data/content.js</code>.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-semibold text-white">{project.title}</h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{project.description}</p>
        {project.link && (
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-300">
            View project <TbArrowUpRight className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
    </Wrapper>
  );
};

export const Projects = () => {
  const [featuredRef, featuredVisible] = useReveal();
  const [moreRef, moreVisible] = useReveal();

  return (
    <section id="projects" className="relative bg-ink-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Featured Work</h2>
          <p className="mt-3 text-white/60">The two production projects behind the numbers above.</p>
        </div>

        <div ref={featuredRef} className={`space-y-8 transition-all duration-700 ${featuredVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.key} project={project} />
          ))}
        </div>

        <div className="mb-10 mt-24 max-w-2xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">More Projects</h2>
          <p className="mt-3 text-white/60">
            Academic and creative projects spanning game dev, 3D art and AR, from before and alongside the SWE work above.
          </p>
        </div>

        <div
          ref={moreRef}
          className={`grid grid-cols-1 gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
            moreVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {moreProjects.map((project) => (
            <MoreProjectCard key={project.key} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
