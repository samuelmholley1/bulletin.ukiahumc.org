import { bulletinData } from '@/app/bulletins/2025-07-13-data'
import PlaceholderBulletin from './PlaceholderBulletin'
import BulletinContent from './BulletinContent'

interface BulletinPageProps {
  params: {
    date: string
  }
}

export default function BulletinPage({ params }: BulletinPageProps) {
  // Only show full content for July 13, 2025 bulletin
  if (params.date === '2025-07-13') {
    return <BulletinContent bulletinData={bulletinData} />
  }

  // Show placeholder for all other dates
  return <PlaceholderBulletin date={params.date} />
}

export function generateStaticParams() {
  return [
    { date: '2025-07-13' },
    { date: '2025-07-20' },
    { date: '2025-07-27' },
    { date: '2025-08-03' },
  ]
}