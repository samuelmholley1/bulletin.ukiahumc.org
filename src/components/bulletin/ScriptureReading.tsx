interface ScriptureReadingProps {
  data: {
    id: string
    title: string
    reference: string
    version: string
    content: string[]
  }
}

export default function ScriptureReading({ data }: ScriptureReadingProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
      <div>
        <h4 className="text-lg font-sans font-bold mb-2 text-black">{data.reference}</h4>
        <p className="text-sm font-serif italic mb-4 text-black">{data.version}</p>
        <div className="max-w-none">
          {data.content.map((paragraph, index) => (
            <p key={index} className="mb-4 font-serif text-black leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}