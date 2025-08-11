import { useApp } from "@/layouts/app/context";
import { Button, Center, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiLinkedin, SiMessenger } from "react-icons/si";
import { Link } from "react-router-dom";

export default function LoginPages() {
  const { setTitle, setSimpleMode } = useApp();
  useEffect(() => {
    setTitle("");
    setSimpleMode(true);
  }, []);
  return (
    <Flex
      w={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Stack w={"100%"} gap={5}>
        <Heading>Login</Heading>
        <Input placeholder="email"></Input>
        <Input placeholder="password" type="password"></Input>
        <Center>
          <Stack spacing={2} align={"center"} w={"full"}>
            {/* Login */}
            <Stack w={"100%"}>
              <Link to={"/home"}>
                <Button w={"full"}>Login</Button>
              </Link>
            </Stack>

            {/* Facebook */}
            <Button
              w={"full"}
              variant={"outline"}
              colorScheme={"facebook"}
              leftIcon={<FaFacebook />}
            >
              <Center>
                <Text>Continue with Facebook</Text>
              </Center>
            </Button>

            {/* Google */}
            <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>

            {/* LinkedIn */}
            <Button
              w={"full"}
              variant={"outline"}
              colorScheme={"messenger"}
              leftIcon={<SiLinkedin />}
            >
              <Center>
                <Text>Send to Linkedin</Text>
              </Center>
            </Button>

            {/* Messenger */}
            <Button
              w={"full"}
              variant={"outline"}
              colorScheme={"messenger"}
              leftIcon={<SiMessenger />}
            >
              <Center>
                <Text>Send to Messenger</Text>
              </Center>
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Flex>
  );
}
