import { Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <Flex height={"100%"} alignItems={"center"} textAlign={"center"}>
      <Container>
        <Flex justifyContent={"center"}>
          <Image
            height={"300px"}
            src={
              "https://lelogama.go-jek.com/prime/upload/web/image/link-sheet-spot-illustration-74.svg"
            }
            mb={5}
          />
        </Flex>
        <Stack gap={5}>
          <Heading>Data Not Found</Heading>
          <Text fontSize={"lg"}>Sorry, the data you were looking for could not be found</Text>
          <Link to={"/"}>
            <Stack>
              <Button>Back</Button>
            </Stack>
          </Link>
        </Stack>
      </Container>
    </Flex>
  );
}
