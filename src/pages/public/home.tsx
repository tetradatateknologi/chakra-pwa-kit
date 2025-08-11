import { useApp } from "@/layouts/app/context";
import { Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function HomePages() {
  const { setTitle, setSimpleMode } = useApp();
  useEffect(() => {
    setTitle("");
    setSimpleMode(false);
  }, []);
  return (
    <>
      <Stack gap={5}>
        <Text
          bgGradient="linear(to-l, primary.300, primary.400)"
          bgClip="text"
          fontSize="4xl"
          lineHeight={1}
          fontWeight="medium"
        >
          Chakra PWA Kit
        </Text>
        <Text>
          A mobile-friendly Progressive Web App (PWA) starter template built with Chakra UI and
          React.
        </Text>
        <Text textAlign={"end"}>
          developed by{" "}
          <a
            target="_blank"
            style={{ textDecoration: "underline" }}
            href="https://github.com/tetradatateknologi"
          >
            tetradata
          </a>
        </Text>
      </Stack>
    </>
  );
}
