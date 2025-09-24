interface WelcomingStatementProps {
  title: string
  content: string
}

export default function WelcomingStatement({ title, content }: WelcomingStatementProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-sans font-bold mb-4 text-black">{title}</h3>
      <div>
        <p className="font-serif text-black leading-relaxed">{content}</p>
      </div>
    </div>
  )
}