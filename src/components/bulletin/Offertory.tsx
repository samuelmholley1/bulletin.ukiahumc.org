interface OffertoryProps {
  title: string
  song: string
  artist: string
  offeringNote: string
}

export default function Offertory({ title, song, artist, offeringNote }: OffertoryProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold uppercase mb-4 text-gray-800">{title}</h3>
      <div className="bg-teal-50 p-6 rounded-lg">
        <div className="text-center mb-4">
          <h4 className="text-lg font-semibold text-teal-800">&ldquo;{song}&rdquo;</h4>
          <p className="text-md text-gray-600 italic">{artist}</p>
        </div>
        <p className="text-sm text-gray-600 text-center italic">{offeringNote}</p>
      </div>
    </div>
  )
}