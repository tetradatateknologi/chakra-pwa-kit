import {
  Text,
  Box,
  Stack
} from "@chakra-ui/react";

export default function TopNavigation() {
  return (
    <Stack
      bg={'blue.500'}
      width={'100%'}
      height={'5vh'}
      color={'white'}
    >
      <Box
        height={'100%'}
        display={'flex'}
        px={5}
        alignItems={'center'}
      >
        <Text
          fontSize={'lg'}
          fontWeight={'semibold'}
        >
          Apps Name
        </Text>
      </Box>
    </Stack>
  )
}
