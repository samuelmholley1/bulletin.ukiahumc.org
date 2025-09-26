'use client'

import Image from 'next/image'

export default function FlyerPage() {
  const websiteUrl = 'https://bulletin.ukiahumc.org'
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(websiteUrl)}`

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8 print:p-4">
      {/* Church Logo and Name */}
      <div className="flex items-center justify-center mb-8">
        <div className="mr-6">
          <Image 
            src="/android-chrome-512x512.png" 
            alt="Ukiah United Methodist Church Logo" 
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
            priority
          />
        </div>
        <div className="text-left">
          <h1 className="text-3xl font-sans font-bold text-black mb-2">
            UKIAH UNITED METHODIST CHURCH
          </h1>
          <p className="text-xl font-serif italic text-black">
            Love God • Live Compassion
          </p>
        </div>
      </div>

      {/* QR Code */}
      <div className="mb-8 text-center">
        <div className="mb-4">
          <img 
            src={qrCodeUrl}
            alt="QR Code to bulletin.ukiahumc.org"
            className="w-72 h-72 mx-auto border-2 border-gray-200"
          />
        </div>
        <p className="text-lg font-serif text-black">
          Scan for Weekly Bulletins
        </p>
      </div>

      {/* Website URL */}
      <div className="text-center mb-8">
        <p className="text-2xl font-sans font-bold text-black">
          bulletin.ukiahumc.org
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-center text-sm font-serif text-black max-w-md">
        <p className="mb-2">270 N. Pine St. (Mailing: P.O. Box 323), Ukiah, CA 95482</p>
        <p className="mb-2">www.ukiahumc.org</p>
        <p className="mb-2">Rev. Dr. Michele Robbins, Pastor • 707.462.3360 x12</p>
        <p>Church Office • 707.462.3360 • office@ukiahumc.org</p>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          @page {
            margin: 0.5in;
            size: letter;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  )
}