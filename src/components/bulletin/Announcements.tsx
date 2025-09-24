interface AnnouncementsProps {
  title: string
  items: string[]
}

export default function Announcements({ title, items }: AnnouncementsProps) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div>
        <ul className="list-disc pl-5 space-y-3">
          {items.map((item, index) => (
            <li key={index} className="font-serif text-black leading-relaxed">
              <span dangerouslySetInnerHTML={{ 
                __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="font-sans font-bold">$1</strong>') 
              }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}