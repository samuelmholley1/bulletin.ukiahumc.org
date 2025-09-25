interface SongLyricsProps {
  data: {
    id: string
    title: string
    songTitle: string
    artist?: string
    lyrics: string[]
  }
}

export default function SongLyrics({ data }: SongLyricsProps) {
  return (
    <div id={data.id} className="my-8">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-sans font-bold uppercase text-black">{data.title}</h3>
        {data.artist && (
          <div className="text-right font-serif text-sm">
            {data.artist}
          </div>
        )}
      </div>
      
      <div className="font-serif text-black leading-relaxed">
        <div className="font-bold mb-4">&ldquo;{data.songTitle}&rdquo;</div>
        {data.lyrics.map((line, index) => (
          <div key={index} className="mb-1">
            {line || '\u00A0'} {/* Non-breaking space for empty lines */}
          </div>
        ))}
      </div>
    </div>
  )
}