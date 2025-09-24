interface ContemporaryReadingProps {
  title: string
  poemTitle: string
  author: string
  content: string[]
}

export default function ContemporaryReading({ title, poemTitle, author, content }: ContemporaryReadingProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div>
        <h4 className="text-lg font-serif font-semibold mb-2 text-black">&ldquo;{poemTitle}&rdquo;</h4>
        <p className="text-md font-serif italic mb-4 text-black">by {author}</p>
        <div className="space-y-2">
          {content.map((line, index) => (
            <p key={index} className="font-serif text-black leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}