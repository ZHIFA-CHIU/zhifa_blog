'use client'

import { Project } from '@/data/projectsData'
import Card from './Card'
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { useState } from 'react'

type Props = {
  projects: Project[]
}

const PressableCard = ({ projects }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [project, setProject] = useState<Project | undefined>()

  const onPress = (project: Project) => () => {
    setProject(project)
    onOpen()
  }

  return (
    <>
      {projects.map((d) => (
        <Card key={d.title} title={d.title} imgSrc={d.imgSrc} onPress={onPress(d)} />
      ))}
      {project && (
        <Modal
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames={{
            header: 'border-b-[1px] dark:border-[#292f46] py-2',
            footer: 'border-t-[1px] dark:border-[#292f46] py-2',
          }}
          size="xl"
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">{project.title}</ModalHeader>
                <ModalBody>
                  <p>{project.description}</p>
                </ModalBody>
                <ModalFooter className="justify-start">
                  <Button
                    href={project.href}
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                    className="px-0 text-sm text-black dark:text-white"
                  >
                    Learn more
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default PressableCard
