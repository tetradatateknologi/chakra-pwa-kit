import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

interface IProps {
  href: string
  children: ReactNode
  textAlign?: string
}

export default function LinkDefault(props: IProps) {
  const { href, children, textAlign } = props

  return (
    <Flex
      mt={2}
      justifyContent={(textAlign) ? textAlign : 'start'}
    >
      <RouterLink to={href}>
        <Link
          fontWeight={'semibold'}
          color={'primary.400'}
          _hover={{
            color: 'primary.500'
          }}
        >
          {children}
        </Link>
      </RouterLink>
    </Flex>
  )
}
