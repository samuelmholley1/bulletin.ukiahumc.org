interface PlaceholderBulletinProps {
  date: string
}

export default function PlaceholderBulletin({ date }: PlaceholderBulletinProps) {
  // Format the date for display
  const formatDate = (dateStr: string) => {
    const parts = dateStr.split('-')
    if (parts.length === 3) {
      const year = parts[0]
      const month = parts[1]
      const day = parts[2]
      const monthNames = [
        '', 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      return `${monthNames[parseInt(month)]} ${parseInt(day)}, ${year}`
    }
    return dateStr
  }

  return (
    <div className="bg-white text-black font-serif min-h-screen">
      <div className="px-4 py-16 text-center">
        <h1 className="text-2xl font-sans font-bold text-black mb-8">
          UKIAH UNITED METHODIST CHURCH
        </h1>
        <p className="text-lg font-serif italic text-black mb-8">
          Love God • Live Compassion
        </p>
        
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-sans font-bold text-black mb-6">
            Bulletin Not Yet Available
          </h2>
          <p className="font-serif text-black leading-relaxed mb-8">
            The bulletin for {formatDate(date)} is not yet available. Please check back closer to the service date.
          </p>
          <a 
            href="/archive" 
            className="inline-block font-sans font-bold text-black border-2 border-black px-6 py-3 uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            View Bulletin Archive
          </a>
        </div>
      </div>
    </div>
  )
}