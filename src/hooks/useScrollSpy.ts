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
        rootMargin: '0px 0px -50% 0px', // More stable active section detection
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