interface OffertoryProps {
  data: {
    id: string
    title: string
    song: string
    artist: string
    offeringNote: string
  }
}

export default function Offertory({ data }: OffertoryProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{data.title}</h3>
      <div>
        <div className="text-center mb-4">
          <h4 className="text-lg font-serif font-semibold text-black">&ldquo;{data.song}&rdquo;</h4>
          <p className="text-md font-serif italic text-black">{data.artist}</p>
        </div>
        <p className="text-sm font-serif text-center italic text-black">{data.offeringNote}</p>
      </div>
    </div>
  )
}