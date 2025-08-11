import { useApp } from "@/layouts/app/context";
import { Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ContentPages() {
  const { setTitle, setSimpleMode } = useApp();
  useEffect(() => {
    setTitle("Sample Page Title");
    setSimpleMode(false);
  }, []);
  return (
    <>
      <Stack gap={5}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ad et fugit accusantium
          quo sapiente minus dicta illo ducimus voluptatum quibusdam omnis dignissimos porro
          nesciunt nam unde, cum tenetur quasi.
        </Text>
      </Stack>
    </>
  );
}
