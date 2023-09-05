import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../util/useAuth'
import { useLoginStore } from '../stores/loginStore'
import { Link as RouterLink } from 'react-router-dom'
import { useLoading } from '../util/useLoading'
import PublicLayout from '../layout/public-layout'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        if (!email || !password) {
            return toast.error('Form belum diisi')
        }
        useLoading.show()
        useAuth.setAuth()
        return useLoginStore.login({ email, password })
    }

    return (
        <PublicLayout>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>
                        Selamat datang kembali
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Silahkan login melalui halaman ini
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox colorScheme='green'>Ingat saya</Checkbox>
                                <RouterLink to={'/forgot-password'}>
                                    <Text color={'green.400'}>Lupa password?</Text>
                                </RouterLink>
                            </Stack>
                            <Button
                                onClick={handleSubmit}
                                bg={'green.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                    <Stack pt={6}>
                        <Text align={'center'}>
                            Belum punya akun ? {' '}
                            <RouterLink to={'/register'}>
                                <Link color={'green.400'}>Registrasi disini</Link>
                            </RouterLink>
                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </PublicLayout>
    )
}