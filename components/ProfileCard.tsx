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
  Tabs,
  Tab,
  Button,
  Chip,
} from '@nextui-org/react'
import download from 'downloadjs'

const ArrowDownTray = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
)

const ProfileCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Card className="w-full">
        <CardHeader className="z-0 flex gap-3">
          <Image alt="zhifaq" height={40} radius="sm" src="/static/images/zhifaq.jpg" width={40} />
          <div className="flex w-full flex-col">
            <div className="flex w-full gap-2">
              <span>
                <p className="text-md">ZhifaQ 🕊️</p>
              </span>
              <span>
                <Chip color="success" size="sm" className="text-xs">
                  Open to work
                </Chip>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <Link
                  href="https://www.linkedin.com/company/auxilis-technology/mycompany/"
                  isExternal={true}
                  className="cursor-pointer text-small text-default-500 hover:scale-105"
                >
                  @Auxilis
                </Link>
              </span>
              <span>
                <Link
                  href="https://www.linkedin.com/company/extractly-ai/"
                  isExternal={true}
                  className="cursor-pointer text-small text-default-500 hover:scale-105"
                >
                  @extractly.ai
                </Link>
              </span>
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <ul className="ml-3 list-disc">
            <li>Software Engineer</li>
            <li>React, NextJS, Vite, Typescript, NodeJS, ExpressJS</li>
            <li>
              <Link
                href="https://www.credly.com/badges/fc8fb021-35a2-402e-bac7-77f4abbd06e2/linked_in_profile"
                isExternal
                showAnchorIcon
              >
                AWS Certified Solutions Architect - Associate
              </Link>
            </li>
            <li>
              <Link
                href="https://www.credly.com/badges/3dc6736d-02ad-4abf-89de-0616f95f6be2/linked_in_profile"
                isExternal
                showAnchorIcon
              >
                AWS Certified Cloud Practitioner
              </Link>
            </li>
            <li>Wollongong Australia</li>
          </ul>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-between">
          {/* <button
            onClick={() => setOpenTestimonials(true)}
            className="transition delay-75 ease-in-out hover:scale-105 hover:text-gray-500 dark:hover:text-gray-300"
          >
            Testimonials
          </button> */}
          {/* <Button
            href="#"
            as={Link}
            showAnchorIcon
            variant="solid"
            size="sm"
            className="bg-gray-100 dark:bg-gray-600/50"
          >
            Find out more about me
          </Button> */}
          <Button
            endContent={<ArrowDownTray />}
            variant="solid"
            size="sm"
            className="bg-gray-100 dark:bg-gray-600/50"
            onClick={() => download('resume/Zhifa_Qiu_Resume.pdf')}
          >
            Latest resume
          </Button>
          <Button
            onClick={onOpen}
            variant="solid"
            size="sm"
            className="bg-gray-100 dark:bg-gray-600/50"
          >
            Buy me a ☕
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="md">
        <ModalContent>
          <ModalBody>
            <Tabs aria-label="Options" className="justify-center">
              <Tab key={'paypal'} title="Paypal">
                <Image
                  isBlurred
                  src="/static/images/qrcode.png"
                  alt="Paypal QR Code"
                  className="max-h-[500px] min-h-[500px] w-full object-scale-down p-8"
                />
              </Tab>
              <Tab key={'wechat'} title="Wechat">
                <Image
                  isBlurred
                  src="/static/images/wechat.JPG"
                  alt="Paypal QR Code"
                  className="max-h-[500px] min-h-[500px] w-full object-scale-down p-8"
                />
              </Tab>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileCard
