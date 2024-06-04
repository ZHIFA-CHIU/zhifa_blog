import { Card, CardBody, CardHeader, Divider, Link, Image } from '@nextui-org/react'

type Props = {
  author: string
  href: string
  src: string
  content: string
}

const TestimonialsCard = ({ author, content, href, src }: Props) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image alt={author} height={40} radius="sm" src={src} width={40} />
        <div className="flex flex-col">
          <p className="text-md">{author}</p>
          <p className="text-small text-default-500">
            <Link href={href} isExternal>{`@${author}`}</Link>
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default TestimonialsCard
