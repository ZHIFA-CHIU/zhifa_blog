import { ScrollShadow } from '@nextui-org/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <ScrollShadow hideScrollBar size={60}>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</section>
    </ScrollShadow>
  )
}
