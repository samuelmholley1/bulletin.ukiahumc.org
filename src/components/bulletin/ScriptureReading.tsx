interface ScriptureReadingProps {
  title: string
  reference: string
  version: string
  content: string[]
}

export default function ScriptureReading({ title, reference, version, content }: ScriptureReadingProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div>
        <h4 className="text-lg font-serif font-bold mb-2 text-black">{reference}</h4>
        <p className="text-sm font-serif italic mb-4 text-black">{version}</p>
        <div className="max-w-none">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-4 font-serif text-black leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}