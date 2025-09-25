interface ResponsiveReadingProps {
  data: {
    id: string
    title: string
    content: Array<{
      speaker: string
      text: string
      isCongregation: boolean
    }>
  }
}

export default function ResponsiveReading({ data }: ResponsiveReadingProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
      <div className="space-y-3">
        {data.content.map((item, index) => (
          <p key={index} className="leading-relaxed font-serif text-black">
            <strong className="font-sans font-bold mr-2">{item.speaker}:</strong>
            <span>{item.text}</span>
          </p>
        ))}
      </div>
    </div>
  )
}