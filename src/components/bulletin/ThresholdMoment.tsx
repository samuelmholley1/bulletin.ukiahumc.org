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
      <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">{title}</h3>
      <div className="bg-indigo-50 p-6 rounded-lg space-y-4">
        {content.map((item, index) => (
          <div key={index}>
            {item.speaker === 'Reflection' ? (
              <p className="text-gray-700 leading-relaxed italic">
                {item.text}
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                <strong className="font-semibold mr-2 text-indigo-700">{item.speaker}:</strong>
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}