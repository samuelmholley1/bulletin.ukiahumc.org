import { GoForItItem } from '@/types/bulletin'

interface GoForItProps {
  title: string
  attribution: string
  content: GoForItItem[]
}

export default function GoForIt({ title, attribution, content }: GoForItProps) {
  // Separate content by speaker for vertical stacking
  const southItems = content.filter(item => item.side === 'South')
  const northItems = content.filter(item => item.side === 'North')
  const allItems = content.filter(item => item.side === 'All')

  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div className="space-y-2">
        {/* South items */}
        {southItems.map((item, index) => (
          <p key={`south-${index}`} className="font-serif text-black leading-relaxed">
            <span className="font-sans font-bold">{item.side}:</span> {item.text}
          </p>
        ))}
        {/* North items */}
        {northItems.map((item, index) => (
          <p key={`north-${index}`} className="font-serif text-black leading-relaxed">
            <span className="font-sans font-bold">{item.side}:</span> {item.text}
          </p>
        ))}
        {/* All items */}
        {allItems.map((item, index) => (
          <p key={`all-${index}`} className="font-serif text-black leading-relaxed font-bold text-center">
            <span className="font-sans">{item.side}:</span> {item.text}
          </p>
        ))}
        <p className="text-right mt-4 font-serif italic text-black">— {attribution}</p>
      </div>
    </div>
  )
}