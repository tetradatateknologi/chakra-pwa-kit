import { Heading, Text } from "@chakra-ui/react";
import MobileLayout from "../../layout/mobile-layout";

export default function Blank() {
  return (
    <MobileLayout simpleMode>
      <Heading>
        Blank
      </Heading>
      <Text>
        The following is an example of a blank page that does not contain any content.
      </Text>
    </MobileLayout>
  )
}
