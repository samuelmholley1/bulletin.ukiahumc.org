interface ThresholdMomentProps {
  data: {
    id: string
    title: string
    content: Array<{
      speaker: string
      text: string
    }>
  }
}

export default function ThresholdMoment({ data }: ThresholdMomentProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
      <div className="space-y-4">
        {data.content.map((item, index) => (
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