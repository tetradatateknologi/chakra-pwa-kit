import { Link } from "@chakra-ui/react"

interface LinkDefaultProps {
  href: string,
  text?: string
}

export default function LinkDefault(props: LinkDefaultProps) {
  const { text, href } = props
  return (
    <Link color={'blue.400'} target="_blank" href={href}>
      {
        (text) ? text : 'disini'
      }
    </Link>
  )
}