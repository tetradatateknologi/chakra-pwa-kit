import {
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import PublicLayout from '../layout/public-layout'

export default function ForgotPassword() {
  return (
    <PublicLayout>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        className='bg-glass'
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Lupa Password ?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          Anda akan mendapatkan email dengan link reset
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'green.400'}
            color={'white'}
            _hover={{
              bg: 'green.500',
            }}>
            Request Ubah Password
          </Button>
        </Stack>
      </Stack>
    </PublicLayout>
  )
}