interface OffertoryProps {
  title: string
  song: string
  artist: string
  offeringNote: string
}

export default function Offertory({ title, song, artist, offeringNote }: OffertoryProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div>
        <div className="text-center mb-4">
          <h4 className="text-lg font-serif font-semibold text-black">&ldquo;{song}&rdquo;</h4>
          <p className="text-md font-serif italic text-black">{artist}</p>
        </div>
        <p className="text-sm font-serif text-center italic text-black">{offeringNote}</p>
      </div>
    </div>
  )
}