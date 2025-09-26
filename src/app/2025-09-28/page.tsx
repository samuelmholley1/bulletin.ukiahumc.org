'use client'

import { useState } from 'react'
import { bulletinData } from '@/app/bulletins/2025-09-28-data'
import HudFooter from '@/components/HudFooter'
import HudHeader from '@/components/HudHeader'
import TableOfContents from '@/components/TableOfContents'
import useScrollSpy from '@/hooks/useScrollSpy'
import Header from '@/components/Header'
import SectionTitle from '@/components/bulletin/SectionTitle'
import HymnDisplay from '@/components/bulletin/HymnDisplay'
import ResponsiveReading from '@/components/bulletin/ResponsiveReading'
import ThresholdMoment from '@/components/bulletin/ThresholdMoment'
import ContemporaryReading from '@/components/bulletin/ContemporaryReading'
import LordsPrayer from '@/components/bulletin/LordsPrayer'
import ScriptureReading from '@/components/bulletin/ScriptureReading'
import Message from '@/components/bulletin/Message'
import Offertory from '@/components/bulletin/Offertory'
import AsteriskedItem from '@/components/bulletin/AsteriskedItem'
import MembershipStatement from '@/components/bulletin/MembershipStatement'
import GoForIt from '@/components/bulletin/GoForIt'
import Announcements from '@/components/bulletin/Announcements'
import WelcomingStatement from '@/components/bulletin/WelcomingStatement'
import EmbeddedPoem from '@/components/EmbeddedPoem'
import SongLyrics from '@/components/SongLyrics'

export default function September28Bulletin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Extract IDs for scroll spy
  const sectionIds = bulletinData.serviceOrder.map(section => section.id)
  const activeSectionId = useScrollSpy(sectionIds)

  const renderServiceElement = (section: any) => {
    switch (section.type) {
      case 'sectionTitle':
        return <SectionTitle key={section.id} data={section} />
      case 'hymn':
        return <HymnDisplay key={section.id} data={section} />
      case 'responsiveReading':
        return <ResponsiveReading key={section.id} data={section} />
      case 'thresholdMoment':
        return <ThresholdMoment key={section.id} data={section} />
      case 'contemporaryReading':
        return <ContemporaryReading key={section.id} data={section} />
      case 'lordsPrayer':
        return <LordsPrayer key={section.id} data={section} />
      case 'scriptureReading':
        return <ScriptureReading key={section.id} data={section} />
      case 'message':
        return <Message key={section.id} data={section} />
      case 'offertory':
        return <Offertory key={section.id} data={section} />
      case 'asteriskedItem':
        return <AsteriskedItem key={section.id} data={section} />
      case 'membershipStatement':
        return <MembershipStatement key={section.id} data={section} />
      case 'goForIt':
        return <GoForIt key={section.id} data={section} />
      case 'announcements':
        return <Announcements key={section.id} data={section} />
      case 'welcomingStatement':
        return <WelcomingStatement key={section.id} data={section} />
      case 'embeddedPoem':
        return <EmbeddedPoem key={section.id} id={section.id} content={section.content} />
      case 'songLyrics':
        return <SongLyrics key={section.id} data={section} />
      default:
        return null
    }
  }

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-serif min-h-screen pb-20 pt-12">
      {/* HUD Header */}
      <HudHeader 
        activeSectionId={activeSectionId}
        serviceOrder={bulletinData.serviceOrder}
      />
      
      {/* Slide-out menu */}    
      <TableOfContents 
        isOpen={isMenuOpen}
        serviceOrder={bulletinData.serviceOrder}
        onClose={() => setIsMenuOpen(false)}
      />
      
      {/* New Header Component */}
      <div className="px-4 py-8 border-b border-black dark:border-white">
        <Header 
          churchName={bulletinData.churchName}
          motto={bulletinData.motto}
          date={bulletinData.date}
          theme={bulletinData.theme}
          contactInfo={bulletinData.contactInfo}
        />
      </div>

      {/* Instructions */}
      <div className="px-4 py-6 text-center">
        <p className="font-serif text-black dark:text-white text-sm leading-relaxed">
          {bulletinData.instructions}
        </p>
        <p className="font-serif text-black dark:text-white text-sm leading-relaxed mt-2">
          {bulletinData.hymnalKey}
        </p>
      </div>

      {/* Service Order */}
      <div className="px-4 pb-4">
        {bulletinData.serviceOrder.map(renderServiceElement)}
      </div>

      {/* HUD Footer */}
      <HudFooter 
        activeSectionId={activeSectionId}
        serviceOrder={bulletinData.serviceOrder}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  )
}