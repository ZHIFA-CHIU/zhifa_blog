import { CardBody, Image, Card } from '@nextui-org/react'

type Props = {
  src: string
}

const ImageCard = ({ src }: Props) => {
  return (
    <div className="md flex max-w-[544px] items-center justify-center p-4 md:w-1/2">
      <Image
        isBlurred
        src={src}
        alt="Gallery Image"
        isZoomed
        className="m-5 w-full items-center justify-center rounded object-fill"
      />
    </div>
  )
}

export default ImageCard
