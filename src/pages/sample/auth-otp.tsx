import { Container, Flex, Heading, PinInput, PinInputField, Image, ScaleFade } from "@chakra-ui/react";
import MobileLayout from "../../layout/mobile-layout";

export default function AuthOtp() {
  return (
    <MobileLayout simpleMode>
      <Flex
        height={'100%'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <Container>
          <ScaleFade initialScale={0.5} in>
            <Flex justifyContent={'center'}>
              <Image
                height={'300px'}
                src={'https://d1j87w3j7cc3a6.cloudfront.net/prime/static/prime/images/feature/feature-spot-image-driver.svg'}
                mb={5}
              />
            </Flex>
          </ScaleFade>
          <Heading mb={3}>
            Please input your OTP
          </Heading>
          <PinInput size={'lg'}>
            <PinInputField />
            <PinInputField />
            <PinInputField />

            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </Container>
      </Flex>
    </MobileLayout>
  )
}
