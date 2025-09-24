'use client'

import { useState } from 'react'
import HudFooter from '@/components/HudFooter'
import TableOfContents from '@/components/TableOfContents'
import useScrollSpy from '@/hooks/useScrollSpy'
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

interface BulletinContentProps {
  bulletinData: {
    churchName: string
    motto: string
    date: string
    theme: string
    contactInfo: any
    instructions: string
    hymnalKey: string
    serviceOrder: Array<{
      id: string
      type: string
      title: string
      [key: string]: any
    }>
  }
}

export default function BulletinContent({ bulletinData }: BulletinContentProps) {
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
      default:
        return null
    }
  }

  return (
    <div className="bg-white text-black font-serif min-h-screen pb-20">
      {/* Slide-out menu */}    
      <TableOfContents 
        isOpen={isMenuOpen}
        serviceOrder={bulletinData.serviceOrder}
        onClose={() => setIsMenuOpen(false)}
      />
      
      {/* Header */}
      <div className="text-center py-8 px-4 border-b border-black">
        <h1 className="text-2xl font-sans font-bold text-black mb-2">
          {bulletinData.churchName}
        </h1>
        <p className="text-lg font-serif italic text-black mb-4">
          {bulletinData.motto}
        </p>
        <p className="text-xl font-sans font-bold text-black mb-2">
          {bulletinData.date}
        </p>
        <p className="text-lg font-serif text-black">
          {bulletinData.theme}
        </p>
      </div>

      {/* Instructions */}
      <div className="px-4 py-6 text-center">
        <p className="font-serif text-black text-sm leading-relaxed">
          {bulletinData.instructions}
        </p>
        <p className="font-serif text-black text-sm leading-relaxed mt-2">
          {bulletinData.hymnalKey}
        </p>
      </div>

      {/* Service Order */}
      <div className="px-4 pb-4">
        {bulletinData.serviceOrder.map(renderServiceElement)}
      </div>

      {/* Contact Info */}
      <div className="px-4 py-6 border-t border-black text-center">
        <p className="font-serif text-black text-sm mb-2">
          {bulletinData.contactInfo.address}
        </p>
        <p className="font-serif text-black text-sm mb-2">
          {bulletinData.contactInfo.website}
        </p>
        <p className="font-serif text-black text-sm">
          WiFi: {bulletinData.contactInfo.wifi.network} | Password: {bulletinData.contactInfo.wifi.password}
        </p>
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