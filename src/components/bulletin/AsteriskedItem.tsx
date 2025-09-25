interface AsteriskedItemProps {
  data: {
    id: string
    title: string
    hymnTitle?: string
    number?: string
    source?: string
    content?: string[]
  }
}

export default function AsteriskedItem({ data }: AsteriskedItemProps) {
  return (
    <div id={data.id} className="my-6">
      <h3 className="text-lg font-sans font-bold uppercase mb-2 text-black">{data.title}</h3>
      {data.hymnTitle && (
        <div className="flex justify-between items-baseline mb-3">
          <p className="text-lg font-serif italic text-black">
            &ldquo;{data.hymnTitle}&rdquo;
          </p>
          <p className="text-md font-sans font-semibold text-black">
            {data.number} {data.source}
          </p>
        </div>
      )}
      {data.content && (
        <div className="space-y-1">
          {data.content.map((line, index) => (
            <p key={index} className="font-serif text-black leading-relaxed text-center">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}