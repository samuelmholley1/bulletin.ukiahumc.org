interface MembershipStatementProps {
  title: string
  content: string
}

export default function MembershipStatement({ title, content }: MembershipStatementProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-bold uppercase mb-4 text-gray-800">{title}</h3>
      <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-700 leading-relaxed italic">{content}</p>
      </div>
    </div>
  )
}