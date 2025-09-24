interface MembershipStatementProps {
  title: string
  content: string
}

export default function MembershipStatement({ title, content }: MembershipStatementProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-sans font-bold uppercase mb-4 text-black">{title}</h3>
      <div>
        <p className="font-serif text-black leading-relaxed italic">{content}</p>
      </div>
    </div>
  )
}