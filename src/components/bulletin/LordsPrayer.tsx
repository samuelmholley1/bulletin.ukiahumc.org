interface LordsPrayerProps {
  data: {
    id: string
    title: string
    subtitle?: string
    content: string[]
  }
}

export default function LordsPrayer({ data }: LordsPrayerProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
      {data.subtitle && (
        <h4 className="text-lg font-serif italic mb-4 text-black text-center">{data.subtitle}</h4>
      )}
      <div>
        <div className="space-y-1">
          {data.content.map((line, index) => (
            <p key={index} className={`font-serif text-black leading-relaxed ${
              index % 2 === 1 ? 'pl-8' : ''
            }`}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}