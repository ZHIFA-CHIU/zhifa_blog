'use client'

import { Card as NextCard, Image, CardHeader } from '@nextui-org/react'

const Card = ({ title, imgSrc, onPress }) => {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <NextCard
        isBlurred
        isFooterBlurred
        radius="lg"
        className="border-none hover:scale-105"
        onPress={onPress}
        isPressable={true}
      >
        <CardHeader className="absolute top-1 z-20 flex-col !items-start">
          <h4 className="text-xl font-medium text-black">{title}</h4>
        </CardHeader>
        <Image
          width={544}
          height={306}
          alt={title}
          className="object-cover"
          src={imgSrc}
          removeWrapper
        />
      </NextCard>
    </div>
  )
}

export default Card
