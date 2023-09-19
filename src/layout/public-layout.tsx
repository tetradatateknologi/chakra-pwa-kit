import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface PublicLayoutProps {
  children: ReactNode
}

const PublicLayout = (props: PublicLayoutProps) => {
  const { children } = props
  return (
    < Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bgGradient='linear(to-b, blue.100, green.100)'
    >
      {children}
    </ Flex>
  )
}

export default PublicLayout