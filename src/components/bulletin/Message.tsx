interface MessageProps {
  title: string
  messageTitle: string
  speaker: string
}

export default function Message({ title, messageTitle, speaker }: MessageProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">{title}</h3>
      <div className="bg-orange-50 p-6 rounded-lg text-center">
        <h4 className="text-lg font-semibold mb-2 text-orange-800">&ldquo;{messageTitle}&rdquo;</h4>
        <p className="text-md text-gray-600 italic">{speaker}</p>
      </div>
    </div>
  )
}