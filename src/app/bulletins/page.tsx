import Image from 'next/image'
import Link from 'next/link'

const availableBulletins = [
  {
    date: "July 13, 2025",
    theme: "Wholly Human – Holy Divine",
    slug: "7-13-25"
  }
  // Add more bulletins as they become available
]

export default function BulletinsIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="mb-6">
            <a 
              href="https://ukiahumc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo-for-church-larger.jpg"
                alt="Ukiah United Methodist Church Logo"
                width={200}
                height={200}
                className="mx-auto rounded-lg shadow-lg"
                priority
              />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Ukiah United Methodist Church
          </h1>
          <h2 className="text-2xl text-blue-600 mb-4">Weekly Bulletins</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our weekly church bulletins with service information, announcements, and spiritual reflections.
          </p>
        </header>

        {/* Bulletins List */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Available Bulletins</h3>
          <div className="space-y-4">
            {availableBulletins.map((bulletin) => (
              <Link 
                key={bulletin.slug}
                href={`/${bulletin.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {bulletin.date}
                    </h4>
                    <p className="text-gray-600">
                      {bulletin.theme}
                    </p>
                  </div>
                  <svg 
                    className="w-5 h-5 text-gray-400 mt-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 border-t pt-8 mt-16">
          <p className="mb-2">
            <strong>Ukiah United Methodist Church</strong>
          </p>
          <p className="mb-2">
            270 N. Pine St. (Mailing: P.O. Box 323), Ukiah, CA 95482
          </p>
          <p className="text-sm">
            Visit us at{' '}
            <a 
              href="https://ukiahumc.org" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ukiahumc.org
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}