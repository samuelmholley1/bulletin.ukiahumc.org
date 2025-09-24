'use client'

interface TableOfContentsProps {
  isOpen: boolean
  serviceOrder: Array<{
    id: string
    title: string
    [key: string]: any
  }>
  onClose: () => void
}

export default function TableOfContents({ isOpen, serviceOrder, onClose }: TableOfContentsProps) {
  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Slide-out menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-black z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b border-black pb-4">
            <h2 className="text-lg font-sans font-bold text-black uppercase">
              Table of Contents
            </h2>
            <button
              onClick={onClose}
              className="text-black text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Service Order Links */}
          <nav className="space-y-3 mb-8">
            {serviceOrder.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleLinkClick(section.id)}
                className="block w-full text-left font-serif text-black hover:font-bold transition-all text-sm leading-relaxed"
              >
                {index + 1}. {section.title}
              </button>
            ))}
          </nav>

          {/* Archive Link */}
          <div className="border-t border-black pt-4">
            <a 
              href="/archive"
              className="font-sans font-bold text-black uppercase tracking-wide text-sm hover:underline"
            >
              Bulletin Archive
            </a>
          </div>
        </div>
      </div>
    </>
  )
}