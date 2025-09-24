interface WelcomingStatementProps {
  data: {
    id: string
    title: string
    content: string
  }
}

export default function WelcomingStatement({ data }: WelcomingStatementProps) {
  return (
    <div id={data.id} className="my-8">
      <h3 className="text-lg font-sans font-bold mb-4 text-black">{data.title}</h3>
      <div>
        <p className="font-serif text-black leading-relaxed">{data.content}</p>
      </div>
    </div>
  )
}