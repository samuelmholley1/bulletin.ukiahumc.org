'use client'

interface HudHeaderProps {
  activeSectionId: string
  serviceOrder: Array<{
    id: string
    title: string
    [key: string]: any
  }>
}

export default function HudHeader({ activeSectionId, serviceOrder }: HudHeaderProps) {
  // Find current section and previous section
  const currentIndex = serviceOrder.findIndex(section => section.id === activeSectionId)
  const isFirstSection = currentIndex <= 0
  const previousSection = currentIndex > 0 ? serviceOrder[currentIndex - 1] : null

  const scrollToPrevious = () => {
    if (previousSection) {
      const element = document.getElementById(previousSection.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-12 bg-white dark:bg-black border-b border-black dark:border-white z-40 hud-header" data-print-hidden>
      <div className="h-full flex items-center justify-center px-4">
        {/* Previous Section Button */}
        <button
          onClick={scrollToPrevious}
          disabled={isFirstSection}
          aria-label="Go to previous section"
          className={`font-sans font-bold uppercase tracking-wide text-sm ${
            !isFirstSection
              ? 'text-black dark:text-white' 
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          {isFirstSection ? 'First Section' : 'Previous Section ↑'}
        </button>
      </div>
    </header>
  )
}