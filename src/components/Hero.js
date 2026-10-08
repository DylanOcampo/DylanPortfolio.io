import { useEffect, useState } from 'react';
import Dither from './Dither';
import { achievements, profile } from '../data/content';

const PERIOD = 2000;

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const tick = () => {
    const i = loopNum % profile.rotatingRoles.length;
    const fullText = profile.rotatingRoles[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink-900">
      <div className="absolute inset-0">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Dither
            waveColor={[0.07058823529411765, 0.3803921568627451, 0.8823529411764706]}
            disableAnimation={false}
            enableMouseInteraction
            mouseRadius={1}
            colorNum={6}
            pixelSize={2}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/30 via-ink-900/60 to-ink-900" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-32">
        <span className="mb-5 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-200 backdrop-blur">
          Welcome to my portfolio
        </span>

        <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Hi, I&apos;m {profile.name.split(' ')[0]}
          <br />
          <span className="text-brand-400">
            {text}
            <span className="ml-1 inline-block w-[2px] animate-pulse bg-brand-300 align-middle" style={{ height: '0.8em' }} />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{profile.summary}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-200"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <dt className="font-display text-2xl text-brand-300 sm:text-3xl">{item.stat}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{item.label}</dd>
              <dd className="mt-1 text-xs leading-relaxed text-white/60">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
