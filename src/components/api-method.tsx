import { Text } from "@chakra-ui/react"
import { ReactNode } from "react"
interface ApiMethodProps {
  children: ReactNode
}
export default function ApiMethod(props: ApiMethodProps) {
  const { children } = props
  let color: string = 'grey'
  switch (children) {
    case 'post':
      color = 'orange.300'
      break;
    case 'put':
      color = 'blue.300'
      break;
    case 'delete':
      color = 'red.300'
      break;
    case 'get':
      color = 'green.300'
      break;
  }
  return (
    <Text
      textTransform={'uppercase'}
      fontSize={'2xl'}
      fontWeight={'bold'}
      color={color}
      mr={3}
    >
      {children}
    </Text>
  )
}