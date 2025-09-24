'use client'

import { useEffect, useState } from 'react'

export default function useScrollSpy(sectionIds: string[]) {
  const [activeSectionId, setActiveSectionId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible in the viewport
        const visibleEntry = entries.find(entry => entry.isIntersecting)
        
        if (visibleEntry) {
          setActiveSectionId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Only trigger when section is in the top 30% of viewport
        threshold: 0.1
      }
    )

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSectionId
}