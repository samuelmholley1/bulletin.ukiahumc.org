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

  // Find next section
  const currentIndex = serviceOrder.findIndex(section => section.id === activeSectionId)
  const nextSection = currentIndex >= 0 && currentIndex < serviceOrder.length - 1 
    ? serviceOrder[currentIndex + 1] 
    : null

  const scrollToNext = () => {
    if (nextSection) {
      const element = document.getElementById(nextSection.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-black">
      <div className="h-full flex items-center justify-between px-4">
        {/* Menu Button */}
        <button
          onClick={onToggleMenu}
          className="font-sans font-bold text-black uppercase tracking-wide text-sm"
        >
          Menu ☰
        </button>

        {/* Current Section */}
        <div className="text-center">
          <p className="font-serif text-black text-sm">
            <span className="font-sans font-bold">Now:</span> {currentTitle}
          </p>
        </div>

        {/* Next Section Button */}
        <button
          onClick={scrollToNext}
          disabled={!nextSection}
          className={`font-sans font-bold uppercase tracking-wide text-sm ${
            nextSection 
              ? 'text-black' 
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          Next Section ↓
        </button>
      </div>
    </footer>
  )
}