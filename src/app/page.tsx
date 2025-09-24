import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to the latest bulletin
  redirect('/2025-07-13')
}