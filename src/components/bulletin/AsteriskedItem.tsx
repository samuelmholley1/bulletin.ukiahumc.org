interface AsteriskedItemProps {
  title: string
  hymnTitle?: string
  number?: string
  source?: string
}

export default function AsteriskedItem({ title, hymnTitle, number, source }: AsteriskedItemProps) {
  return (
    <div className="my-6">
      <h3 className="text-lg font-sans font-bold uppercase mb-2 text-black">{title}</h3>
      {hymnTitle && (
        <div className="flex justify-between items-baseline">
          <p className="text-lg font-serif italic text-black">
            &ldquo;{hymnTitle}&rdquo;
          </p>
          <p className="text-md font-sans font-semibold text-black">
            {number} {source}
          </p>
        </div>
      )}
    </div>
  )
}