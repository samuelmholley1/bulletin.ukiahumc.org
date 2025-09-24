interface GoForItProps {
  data: {
    id: string
    title: string
    attribution: string
    content: Array<{
      side: string
      text: string
    }>
  }
}

export default function GoForIt({ data }: GoForItProps) {
  // Separate content by speaker for vertical stacking
  const southItems = data.content.filter(item => item.side === 'South')
  const northItems = data.content.filter(item => item.side === 'North')
  const allItems = data.content.filter(item => item.side === 'All')

  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
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
        <p className="text-right mt-4 font-serif italic text-black">— {data.attribution}</p>
      </div>
    </div>
  )
}