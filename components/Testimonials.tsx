import { testimonials } from '@/data/testimonials'
import { Divider, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import TestimonialsCard from './TestimonialsCard'

type Props = {
  isOpen: boolean
  onOpenChange: () => void
}

const Testimonials = ({ isOpen, onOpenChange }: Props) => {
  return (
    <div>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        {/* <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
              adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
              nostrud ad veniam.
            </p>
          </ModalBody>
        </ModalContent> */}
        <ModalContent>
          <ModalHeader>Testimonials</ModalHeader>
          <Divider />
          <ModalBody>
            <div className="flex h-full flex-col gap-4 overflow-y-auto p-2">
              {testimonials.map((testimonial) => (
                <TestimonialsCard
                  key={testimonial.author}
                  author={testimonial.author}
                  content={testimonial.content}
                  href={testimonial.href}
                  src={testimonial.img}
                />
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Testimonials
