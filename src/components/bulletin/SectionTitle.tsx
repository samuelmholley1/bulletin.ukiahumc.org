interface SectionTitleProps {
  data: {
    id: string
    title: string
    subtitle?: string
  }
}

export default function SectionTitle({ data }: SectionTitleProps) {
  return (
    <div id={data.id} className="text-center py-6">
      <h2 className="text-xl font-sans font-bold text-black uppercase tracking-wide">
        {data.title}
      </h2>
      {data.subtitle && (
        <h3 className="text-lg font-serif italic text-black mt-2">
          {data.subtitle}
        </h3>
      )}
    </div>
  )
}