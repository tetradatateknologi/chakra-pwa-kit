import {
  Text,
  Box,
  Stack,
  Icon
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

interface IProps {
  simpleMode?: boolean
}

export default function TopNavigation(props: IProps) {
  const { simpleMode } = props
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
          <Icon
            cursor={'pointer'}
            as={FiArrowLeft}
            fontSize={'xl'}
            me={5}
            display={(simpleMode) ? 'inline' : 'none'}
            onClick={() => {
              window.history.back()
            }}
          />
          Your Apps Name
        </Text>
      </Box>
    </Stack>
  )
}
