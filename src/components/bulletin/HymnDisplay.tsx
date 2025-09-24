interface HymnDisplayProps {
  data: {
    id: string
    title: string
    hymnTitle: string
    number: string
    source: string
    verse?: string
  }
}

export default function HymnDisplay({ data }: HymnDisplayProps) {
  return (
    <div id={data.id} className="my-6">
      <h3 className="text-lg font-sans font-bold uppercase mb-2 text-black">{data.title}</h3>
      <div className="flex justify-between items-baseline">
        <p className="text-lg font-serif italic text-black">
          &ldquo;{data.hymnTitle}&rdquo; {data.verse && <span className="text-sm font-normal">({data.verse})</span>}
        </p>
        <p className="text-md font-sans font-semibold text-black">
          {data.number} {data.source}
        </p>
      </div>
    </div>
  )
}