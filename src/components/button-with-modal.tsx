import { ModalOverlay, useDisclosure, Modal, ModalHeader, ModalContent, ModalFooter, Button, ModalBody, ModalCloseButton } from "@chakra-ui/react"

interface ComponentProps {
  title: string
  content: any
}

export default function ButtonWithModal(props: ComponentProps) {
  const { title, content } = props;
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>{title}</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {content}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}