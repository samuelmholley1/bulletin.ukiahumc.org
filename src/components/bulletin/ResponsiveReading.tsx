import { ResponsiveReadingItem } from '@/types/bulletin'

interface ResponsiveReadingProps {
  title: string
  content: ResponsiveReadingItem[]
}

export default function ResponsiveReading({ title, content }: ResponsiveReadingProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div className="space-y-3">
        {content.map((item, index) => (
          <p key={index} className="leading-relaxed font-serif text-black">
            <strong className="font-sans font-bold mr-2">{item.speaker}:</strong>
            {item.isCongregation ? (
              <span className="font-bold">{item.text}</span>
            ) : (
              <span>{item.text}</span>
            )}
          </p>
        ))}
      </div>
    </div>
  )
}