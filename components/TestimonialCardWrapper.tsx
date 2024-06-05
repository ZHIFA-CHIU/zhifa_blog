import { Testimonial } from 'types'
import { Card, CardBody, CardHeader, Divider, Image, Link } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  testimonial: Testimonial
  openModal: Dispatch<SetStateAction<boolean>>
  setSelected: Dispatch<SetStateAction<Testimonial>>
}

const TestimonialCardWrapper = ({ testimonial, openModal, setSelected }: Props) => {
  const open = () => {
    setSelected(testimonial)
    openModal(true)
  }

  return (
    <Card
      key={testimonial.author}
      className="max-h-[250px] min-h-[250px] min-w-[255px] max-w-[550px] transition ease-in-out hover:scale-105"
      isPressable
      onPress={open}
    >
      <CardHeader className="flex gap-3">
        <Image alt={testimonial.author} height={40} radius="sm" src={testimonial.img} width={40} />
        <div className="flex flex-col">
          <p className="text-md">{testimonial.author}</p>
          <p className="text-small text-default-500">
            <Link isExternal href={testimonial.href}>{`@${testimonial.author}`}</Link>
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="w-full overflow-hidden">
        <p>{testimonial.content}</p>
      </CardBody>
    </Card>
  )
}

export default TestimonialCardWrapper
