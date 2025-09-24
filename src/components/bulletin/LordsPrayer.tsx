interface LordsPrayerProps {
  title: string
  content: string[]
}

export default function LordsPrayer({ title, content }: LordsPrayerProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">{title}</h3>
      <div className="bg-rose-50 p-6 rounded-lg">
        <div className="space-y-2 text-center">
          {content.map((line, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}