import AdminLayout from "../../layout/admin-layout"
import {
  Box, FormControl, FormLabel, Heading, Stack, Flex,
  Input, useColorModeValue, FormHelperText, Avatar, InputRightElement,
  Button, InputGroup, Alert, AlertIcon
} from "@chakra-ui/react"
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react';
import { useUserStore } from "../../stores/userStore";
import { useUtil } from "../../util/useUtil";

interface IUser {
  login_name: string,
  login_email: string,
  login_service_quota: number,
  login_service_api_key: string,
  login_created_at: string,
}

export default function Profile() {
  const [dataUser, setDataUser] = useState<IUser>({
    login_name: '-',
    login_email: '-',
    login_service_quota: 0,
    login_service_api_key: '-',
    login_created_at: '-',
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await useUserStore.getUserProfile()
      setDataUser(data)
    }

    fetchData()
  }, [])

  const handleCopy = () => {
    useUtil.copyToClipboard()
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
                name={dataUser.login_name}
              />
            </Flex>
            <Stack w={'100%'}>
              <FormControl isReadOnly>
                <FormLabel>
                  Nama Lengkap
                </FormLabel>
                <Input type="text" value={dataUser.login_name} />
              </FormControl>

              <FormControl isReadOnly>
                <FormLabel>
                  Email
                </FormLabel>
                <Input type="email" value={dataUser.login_email} />
              </FormControl>

              <Alert my={5} p={2} status='warning'>
                <AlertIcon />
                Peringatan: API key Anda berfungsi layaknya username dan password. Jaga baik-baik API key Anda!
              </Alert>

              <Stack direction={'row'}>
                <FormControl isReadOnly>
                  <FormLabel>
                    API Key
                  </FormLabel>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type='text'
                      value={dataUser.login_service_api_key}
                      id="clipboard"
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
                <FormControl isReadOnly>
                  <FormLabel>
                    Kuota Penggunaan API
                  </FormLabel>
                  <Input type="number" value={dataUser.login_service_quota} />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </AdminLayout>
  )
}