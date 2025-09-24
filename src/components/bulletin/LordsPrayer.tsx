interface LordsPrayerProps {
  title: string
  content: string[]
}

export default function LordsPrayer({ title, content }: LordsPrayerProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div>
        <div className="space-y-1">
          {content.map((line, index) => (
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