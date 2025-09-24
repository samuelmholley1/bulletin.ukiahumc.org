'use client'

interface HudFooterProps {
  activeSectionId: string
  serviceOrder: Array<{
    id: string
    title: string
    [key: string]: any
  }>
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export default function HudFooter({ activeSectionId, serviceOrder, isMenuOpen, onToggleMenu }: HudFooterProps) {
  // Find current section title
  const currentSection = serviceOrder.find(section => section.id === activeSectionId)
  const currentTitle = currentSection?.title || 'Welcome'

  // Find next section or determine if at last section
  const currentIndex = serviceOrder.findIndex(section => section.id === activeSectionId)
  const isLastSection = currentIndex === serviceOrder.length - 1
  const nextSection = currentIndex >= 0 && currentIndex < serviceOrder.length - 1 
    ? serviceOrder[currentIndex + 1] 
    : null

  const scrollToNext = () => {
    if (isLastSection) {
      // Scroll to top if at last section
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (nextSection) {
      const element = document.getElementById(nextSection.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-black border-t border-black dark:border-white hud-footer" data-print-hidden>
      <div className="h-full flex items-center justify-between px-4">
        {/* Menu Button */}
        <button
          onClick={onToggleMenu}
          aria-label="Open navigation menu"
          className="font-sans font-bold text-black dark:text-white uppercase tracking-wide text-sm"
        >
          Menu ☰
        </button>

        {/* Current Section */}
        <div className="text-center">
          <p className="font-serif text-black dark:text-white text-sm">
            <span className="font-sans font-bold">Now:</span> {currentTitle}
          </p>
        </div>

        {/* Next Section Button */}
        <button
          onClick={scrollToNext}
          disabled={currentIndex < 0}
          aria-label={isLastSection ? "Scroll to top" : "Go to next section"}
          className={`font-sans font-bold uppercase tracking-wide text-sm ${
            currentIndex >= 0
              ? 'text-black dark:text-white' 
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          {isLastSection ? 'Scroll to Top ↑' : 'Next Section ↓'}
        </button>
      </div>
    </footer>
  )
}