'use client'
import { Button, Card, CardBody } from '@nextui-org/react'
import { useState } from 'react'

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
      clipRule="evenodd"
    />
  </svg>
)

const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
      clipRule="evenodd"
    />
  </svg>
)

const Accordion = () => {
  const [openArray, setOpenArray] = useState([false, false])

  const onBtnClick = (idx: number) => () => {
    const arr = [...openArray]
    arr[idx] = !arr[idx]
    setOpenArray(arr)
  }

  return (
    <div>
      <Card>
        <CardBody className="p-0">
          <Button className="w-full justify-between rounded-b-none" onClick={onBtnClick(0)}>
            <p>What is accordion?</p>
            {openArray[0] ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {openArray[0] && (
            <div className="p-2 text-sm">
              <p>
                An accordion is a vertically stacked list of items where each item can be expanded
                to reveal hidden content or collapsed to hide that content.
              </p>
            </div>
          )}
        </CardBody>
        <CardBody className="p-0">
          <Button className="w-full justify-between rounded-none" onClick={onBtnClick(1)}>
            <p>Is there a figma file available?</p>
            {openArray[1] ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {openArray[1] && (
            <div className="p-2 text-sm">
              <p>
                An accordion is a vertically stacked list of items where each item can be expanded
                to reveal hidden content or collapsed to hide that content.
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default Accordion
