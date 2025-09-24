import { GoForItItem } from '@/types/bulletin'

interface GoForItProps {
  title: string
  attribution: string
  content: GoForItItem[]
}

export default function GoForIt({ title, attribution, content }: GoForItProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">{title}</h3>
      <div className="bg-purple-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.map((item, index) => (
            <p key={index} className={`text-gray-700 leading-relaxed ${
              item.side === 'All' ? 'col-span-full text-center font-bold' : ''
            }`}>
              <span className="font-semibold text-purple-700">{item.side}:</span> {item.text}
            </p>
          ))}
        </div>
        <p className="text-right mt-4 italic text-gray-600">— {attribution}</p>
      </div>
    </div>
  )
}