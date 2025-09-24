interface ContemporaryReadingProps {
  data: {
    id: string
    title: string
    poemTitle: string
    author: string
    content: string[]
  }
}

export default function ContemporaryReading({ data }: ContemporaryReadingProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
      <div className="text-center mb-4">
        <h4 className="text-lg font-serif font-bold text-black">{data.poemTitle}</h4>
        <p className="text-sm font-serif italic text-black">by {data.author}</p>
      </div>
      <div className="space-y-2">
        {data.content.map((line, index) => (
          <p key={index} className="font-serif text-black leading-relaxed text-center">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}