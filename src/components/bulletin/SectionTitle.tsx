interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-xl font-sans font-bold uppercase mt-10 mb-4 text-black">
      {title}
    </h2>
  )
}