import Image from 'next/image'

interface HeaderProps {
  churchName: string
  motto: string
  date: string
  theme: string
  contactInfo: {
    address: string
    website: string
    wifi: {
      network: string
      password: string
    }
    staff: Array<{
      name?: string
      title: string
      phone?: string
      email: string
    }>
  }
}

export default function Header({ churchName, motto, date, theme, contactInfo }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      {/* Logo and Address Flexbox */}
      <div className="flex items-start justify-between mb-4">
        {/* Church Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/android-chrome-512x512.png" 
            alt="Church Logo" 
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </div>
        
        {/* Address Block */}
        <div className="text-right font-serif text-sm leading-tight">
          <div className="font-bold text-lg mb-1">{churchName}</div>
          <div>{contactInfo.address} • {contactInfo.website}</div>
          <div>Wi-Fi Network: {contactInfo.wifi.network}     Password: {contactInfo.wifi.password}</div>
          {contactInfo.staff.map((staff, index) => (
            <div key={index}>
              {staff.name && `${staff.name}, `}{staff.title}{staff.phone && `, ${staff.phone}`}  •  {staff.email}
            </div>
          ))}
        </div>
      </div>
      
      {/* Centered Taglines */}
      <div className="text-center">
        <div className="font-serif text-lg mb-2">{motto}</div>
        <div className="font-serif text-lg">{date} ~ {theme}</div>
      </div>
    </div>
  )
}