'use client'
import { testimonials } from '@/data/testimonials'
import TestimonialCardWrapper from './TestimonialCardWrapper'
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  User,
  Button,
} from '@nextui-org/react'
import { useState } from 'react'

const TestimonialsSlider = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selected, setSelected] = useState(testimonials[0])

  return (
    <>
      <Card>
        <CardHeader>
          <p className="text-xl font-semibold">Testimonials</p>
        </CardHeader>
        <Divider />
        <CardBody className="">
          <div className="relative flex max-h-[300px] w-full flex-col  items-center gap-4 overflow-y-scroll rounded  p-4 ">
            {testimonials.map((testimonial) => (
              <TestimonialCardWrapper
                key={testimonial.author}
                testimonial={testimonial}
                openModal={setOpenModal}
                setSelected={setSelected}
              />
            ))}
          </div>
        </CardBody>
      </Card>
      <Modal
        isOpen={openModal}
        onOpenChange={() => setOpenModal(false)}
        size="xl"
        className="max-h-[90%]"
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col items-start gap-1">
              <User
                name={selected.author}
                description={
                  <Link href={selected.href} size="sm" isExternal>
                    {`@${selected.author}`}
                  </Link>
                }
                avatarProps={{
                  src: selected.img,
                }}
              />
            </ModalHeader>
            <Divider />
            <ModalBody className="overflow-y-auto">
              <p>{selected.content}</p>
            </ModalBody>
            <Divider />
            <ModalFooter className="justify-start">
              <Button
                href={selected.href}
                as={Link}
                color="primary"
                showAnchorIcon
                variant="solid"
                isExternal
                className="bg-blue-600 dark:bg-blue-400"
              >
                {`Connect ${selected.author}`}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TestimonialsSlider
