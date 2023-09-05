import AdminLayout from "../../layout/admin-layout"
import {
  Box, FormControl, FormLabel, Heading, Stack, Flex,
  Input, useColorModeValue, FormHelperText, Avatar, InputRightElement,
  Button, InputGroup, Alert, AlertIcon
} from "@chakra-ui/react"
import { toast } from 'react-toastify'

export default function Profile() {
  const handleCopy = () => {
    toast.success("Berhasil Copy API Key")
  }

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>Profil Saya</Heading>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack>
          <Stack direction={'row'}>
            <Flex w={'30%'} justifyContent={'center'}>
              <Avatar
                size={'2xl'}
                name={'Hanif Radityo'}
              />
            </Flex>
            <Stack w={'100%'}>
              <FormControl>
                <FormLabel>
                  Nama Lengkap
                </FormLabel>
                <Input type="text" disabled />
              </FormControl>

              <FormControl>
                <FormLabel>
                  Email
                </FormLabel>
                <Input type="email" disabled />
              </FormControl>

              <Alert my={5} p={2} status='warning'>
                <AlertIcon />
                Peringatan: API key Anda berfungsi layaknya username dan password. Jaga baik-baik API key Anda!
              </Alert>

              <Stack direction={'row'}>
                <FormControl>
                  <FormLabel>
                    API Key
                  </FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type='text'
                      disabled
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleCopy}>
                        copy
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText>
                    Gunakan API Key ini untuk menggunakan API EMIS. Untuk informasi lebih lanjut mengenai cara menggunakan API EMIS, silakan baca dokumentasi.
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    Kuota Penggunaan API
                  </FormLabel>
                  <Input type="number" disabled />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </AdminLayout>
  )
}