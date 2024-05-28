import { Button, CardFooter, Card as NextCard, Link, Image, CardHeader } from '@nextui-org/react'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <NextCard isBlurred isFooterBlurred radius="lg" className="border-none">
      <CardHeader className="absolute top-1 z-20 flex-col !items-start">
        <h4 className="text-large font-medium text-black">{title}</h4>
        <p className="text-tiny font-semibold uppercase text-black">{description}</p>
      </CardHeader>
      <Image
        width={544}
        height={306}
        alt={title}
        className="object-cover"
        src={imgSrc}
        removeWrapper
      />
      <CardFooter className="absolute bottom-1 z-10  ml-1 flex w-[calc(100%_-_8px)] flex-col justify-between overflow-hidden rounded-large border-1 border-white/20 bg-gray-300/20 py-1 shadow-small before:rounded-xl before:bg-white/10 ">
        {/* <div className="text-xs font-bold text-black/80">{title}</div>
        <div className="text-tiny text-black/80"> {description}</div> */}
        <Button
          className="bg-black/20 text-tiny text-black"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          as={Link}
          href={href}
        >
          Learn more &rarr;
        </Button>
      </CardFooter>
    </NextCard>
  </div>
)

export default Card
