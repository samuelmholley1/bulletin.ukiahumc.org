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

  // Handle escape key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop"
          data-print-hidden
          onClick={onClose}
        />
      )}
      
      {/* Slide-out menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-black border-r border-black dark:border-white z-50 transform transition-transform duration-300 table-of-contents flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Table of Contents"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
        data-print-hidden
      >
        {/* Fixed Header */}
        <div className="flex-shrink-0 p-6 pb-4">
          <div className="flex justify-between items-center border-b border-black dark:border-white pb-4">
            <h2 className="text-lg font-sans font-bold text-black dark:text-white uppercase">
              Table of Contents
            </h2>
            <button
              onClick={onClose}
              className="text-black dark:text-white text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6">
          {/* Service Order Links */}
          <nav className="space-y-3 pb-6">
            {serviceOrder.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleLinkClick(section.id)}
                className="block w-full text-left font-serif text-black dark:text-white hover:font-bold transition-all text-sm leading-relaxed"
              >
                {index + 1}. {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Fixed Archive Link at Bottom */}
        <div className="flex-shrink-0 p-6 pt-4 border-t border-black dark:border-white">
          <a 
            href="/archive"
            className="font-sans font-bold text-black dark:text-white uppercase tracking-wide text-sm hover:underline"
          >
            Bulletin Archive
          </a>
        </div>
      </div>
    </>
  )
}