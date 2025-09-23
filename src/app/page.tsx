import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="mb-6">
            <Image
              src="/logo-for-church-larger.jpg"
              alt="Ukiah United Methodist Church Logo"
              width={200}
              height={200}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Ukiah United Methodist Church
          </h1>
          <h2 className="text-2xl text-blue-600 mb-4">Weekly Bulletin</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to our church bulletin. Stay connected with our community 
            through weekly announcements, upcoming events, and spiritual reflections.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* This Week's Service */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              This Week&apos;s Service
            </h3>
            <div className="space-y-2 text-gray-600">
              <p><strong>Date:</strong> Sunday, {new Date().toLocaleDateString()}</p>
              <p><strong>Time:</strong> 10:30 AM</p>
              <p><strong>Pastor:</strong> [Pastor Name]</p>
              <p><strong>Theme:</strong> [This Week&apos;s Theme]</p>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Announcements
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Fellowship meal following service</li>
              <li>• Youth group meets Wednesday 6 PM</li>
              <li>• Bible study Thursday 7 PM</li>
              <li>• Choir practice Saturday 10 AM</li>
            </ul>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h3>
            <div className="space-y-3 text-gray-600">
              <div>
                <p className="font-medium">Community Outreach</p>
                <p className="text-sm">Next Saturday 9 AM</p>
              </div>
              <div>
                <p className="font-medium">Church Picnic</p>
                <p className="text-sm">Sunday after next</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 border-t pt-8">
          <p className="mb-2">
            <strong>Ukiah United Methodist Church</strong>
          </p>
          <p className="mb-2">
            [Church Address] | [Phone Number] | [Email]
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