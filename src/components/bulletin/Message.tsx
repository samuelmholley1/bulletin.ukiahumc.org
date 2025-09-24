interface MessageProps {
  data: {
    id: string
    title: string
    messageTitle: string
    speaker: string
  }
}

export default function Message({ data }: MessageProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
      <div className="text-center">
        <h4 className="text-lg font-serif font-semibold mb-2 text-black">&ldquo;{data.messageTitle}&rdquo;</h4>
        <p className="text-md font-serif italic text-black">{data.speaker}</p>
      </div>
    </div>
  )
}