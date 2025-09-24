interface WelcomingStatementProps {
  title: string
  content: string
}

export default function WelcomingStatement({ title, content }: WelcomingStatementProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-bold mb-4 text-gray-800">{title}</h3>
      <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    </div>
  )
}