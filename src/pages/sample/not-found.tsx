import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MobileLayout from "../../layout/mobile-layout";

export default function NotFound() {
  return (
    <MobileLayout simpleMode>
      <Flex
        height={'100%'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <Container>
          <Image
            src={'https://lelogama.go-jek.com/prime/upload/web/image/link-sheet-spot-illustration-74.svg'}
            mb={5}
          />
          <Heading mb={3}>
            Data Not Found
          </Heading>
          <Text fontSize={'xl'}>
            Sorry, the data you were looking for could not be found
          </Text>
        </Container>
      </Flex>
    </MobileLayout>
  )
}
