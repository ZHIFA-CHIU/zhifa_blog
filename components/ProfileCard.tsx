'use client'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
} from '@nextui-org/react'
import Alert from './Alert'

const ProfileCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Card className="w-full ">
        <CardHeader className="z-0 flex gap-3">
          <Image alt="zhifaq" height={40} radius="sm" src="/static/images/zhifaq.jpg" width={40} />
          <div className="flex flex-col">
            <p className="text-md">ZhifaQ 🕊️🇨🇳🇦🇺</p>
            <p className="text-small text-default-500">Full stack developer</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-2xl font-semibold">Welcome to ZhifaQ's personal website</p>
          <p className="text-md font-light">
            I am a full stack developer, specilized in React, Typescript and NextJS.
          </p>
          <p className="text-md font-light">I share things I learn from work and my daily life.</p>
          <p className="text-md font-light">
            I hope you will find the content is intesting and useful.
          </p>
          <p className="text-md font-light">Cheers!</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-between">
          <Link showAnchorIcon href="/about">
            Find out more about me
          </Link>
          <button onClick={onOpen} className="hover:text-gray-500 dark:hover:text-gray-300">
            Buy me a ☕
          </button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="md">
        <ModalContent>
          <ModalBody>
            <Image
              isBlurred
              src="/static/images/qrcode.png"
              alt="Paypal QR Code"
              className="w-full p-8"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileCard
