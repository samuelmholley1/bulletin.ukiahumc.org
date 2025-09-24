interface MessageProps {
  title: string
  messageTitle: string
  speaker: string
}

export default function Message({ title, messageTitle, speaker }: MessageProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div className="text-center">
        <h4 className="text-lg font-serif font-semibold mb-2 text-black">&ldquo;{messageTitle}&rdquo;</h4>
        <p className="text-md font-serif italic text-black">{speaker}</p>
      </div>
    </div>
  )
}