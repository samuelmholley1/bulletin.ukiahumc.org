interface EmbeddedPoemProps {
  content: string | string[]
}

export default function EmbeddedPoem({ content }: EmbeddedPoemProps) {
  const lines = Array.isArray(content) ? content : [content]
  
  return (
    <blockquote className="font-serif italic ml-8 my-6 leading-relaxed text-black">
      {lines.map((line, index) => (
        <div key={index} className="mb-1">
          {line}
        </div>
      ))}
    </blockquote>
  )
}