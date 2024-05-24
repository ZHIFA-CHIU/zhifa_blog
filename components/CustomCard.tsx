import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image } from '@nextui-org/react'

const ProfileCard = () => {
  return (
    <Card className="w-full ">
      <CardHeader className="z-0 flex gap-3">
        <Image alt="zhifaq" height={40} radius="sm" src="/static/images/zhifaq.jpg" width={40} />
        <div className="flex flex-col">
          <p className="text-md">ZhifaQ 🇨🇳🇦🇺</p>
          <p className="text-small text-default-500">Full stack developer</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-2xl font-semibold">Welcome to ZhifaQ's personal website</p>
        <p className="text-md font-light">
          I am a full stack developer, specilized in React, Typescript and NextJS.
        </p>
        <p className="text-md font-light">I shared things I learn from work and my daily life.</p>
        <p className="text-md font-light">
          I hope you will find the content is intesting and useful.
        </p>
        <p className="text-md font-light">Cheers!</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link showAnchorIcon href="/about">
          Find out more about me
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProfileCard
