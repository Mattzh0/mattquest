export default function GameItem({ title, release_date, short_desc, img_src, rating }) {
  const formattedReleaseDate = new Date(release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-[2px] border-black">
      <img
        src={img_src}
        alt={title}
        className="w-[264px] h-[352px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-black text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">{formattedReleaseDate}</p>
        <p className="text-gray-600">{short_desc}</p>
      </div>
    </div>
  );
}