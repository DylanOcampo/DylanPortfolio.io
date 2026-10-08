export const YoutubeEmbed = ({ embedId, title }) => (
  <div className="relative h-0 w-full overflow-hidden rounded-xl pb-[56.25%]">
    <iframe
      className="absolute left-0 top-0 h-full w-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      title={title || 'Embedded YouTube video'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
