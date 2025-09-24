export default function ArchivePage() {
  const bulletins = [
    { date: '2025-07-13', title: 'July 13, 2025 - Wholly Human-Holy Divine' },
    { date: '2025-07-20', title: 'July 20, 2025' },
    { date: '2025-07-27', title: 'July 27, 2025' },
    { date: '2025-08-03', title: 'August 3, 2025' },
  ]

  return (
    <div className="bg-white text-black font-serif min-h-screen">
      <div className="px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-sans font-bold text-black mb-4">
            Bulletin Archive
          </h1>
          <p className="font-serif text-black">
            Ukiah United Methodist Church
          </p>
        </div>

        {/* Bulletin List */}
        <div className="max-w-md mx-auto">
          <ul className="space-y-4">
            {bulletins.map((bulletin) => (
              <li key={bulletin.date}>
                <a
                  href={`/${bulletin.date}`}
                  className="block p-4 border border-black font-serif text-black hover:bg-black hover:text-white transition-colors"
                >
                  {bulletin.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Back to Current */}
        <div className="text-center mt-8">
          <a 
            href="/2025-07-13"
            className="inline-block font-sans font-bold text-black border-2 border-black px-6 py-3 uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
          >
            Current Bulletin
          </a>
        </div>
      </div>
    </div>
  )
}