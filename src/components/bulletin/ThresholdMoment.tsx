interface ThresholdMomentProps {
  title: string
  content: Array<{
    speaker: string
    text: string
  }>
}

export default function ThresholdMoment({ title, content }: ThresholdMomentProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div className="space-y-4">
        {content.map((item, index) => (
          <div key={index}>
            {item.speaker === 'Reflection' ? (
              <p className="font-serif text-black leading-relaxed italic">
                {item.text}
              </p>
            ) : (
              <p className="font-serif text-black leading-relaxed">
                <strong className="font-sans font-bold mr-2">{item.speaker}:</strong>
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}