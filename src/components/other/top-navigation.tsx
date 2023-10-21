import {
  Text,
  Box,
  Stack
} from "@chakra-ui/react";

export default function TopNavigation() {
  return (
    <Stack
      bgGradient='linear(to-l, blue.500, blue.400)'
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
          Your Apps Name
        </Text>
      </Box>
    </Stack>
  )
}
