import { PortableText as BasePortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

interface PortableTextProps {
  content: PortableTextBlock[]
}

export default function PortableText({ content }: PortableTextProps) {
  return (
    <div className="prose prose-amber max-w-none text-amber-700">
      <BasePortableText value={content} />
    </div>
  )
}