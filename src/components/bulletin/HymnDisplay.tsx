interface HymnDisplayProps {
  title: string
  hymnTitle: string
  number: string
  source: string
  verse?: string
}

export default function HymnDisplay({ title, hymnTitle, number, source, verse }: HymnDisplayProps) {
  return (
    <div className="my-6">
      <h3 className="text-lg font-sans font-bold uppercase mb-2 text-black">{title}</h3>
      <div className="flex justify-between items-baseline">
        <p className="text-lg font-serif italic text-black">
          &ldquo;{hymnTitle}&rdquo; {verse && <span className="text-sm font-normal">({verse})</span>}
        </p>
        <p className="text-md font-sans font-semibold text-black">
          {number} {source}
        </p>
      </div>
    </div>
  )
}