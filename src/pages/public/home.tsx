import { Text } from "@chakra-ui/react";
import MobileLayout from "../../layout/mobile-layout";

export default function Home() {
  return (
    <MobileLayout>
      <Text
        bgGradient='linear(to-l, blue.500, blue.400)'
        bgClip='text'
        fontSize='5xl'
        lineHeight={1}
        fontWeight='extrabold'
        mb={5}
      >
        Mobile First Web App
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat libero deserunt ea suscipit quidem? Quaerat omnis pariatur harum unde aspernatur et ab vitae fugiat alias illo eveniet, culpa aperiam possimus?
      </Text>
    </MobileLayout>
  )
}
