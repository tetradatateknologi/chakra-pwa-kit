import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { useLoading } from '../util/useLoading'
import { useRegisterStore } from '../stores/registerStore'
import PublicLayout from '../layout/public-layout'

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    function handleSubmit() {
        useLoading.show()
        return useRegisterStore.register({ name, email, password, passwordConfirmation })
    }

    return (
        <PublicLayout>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} w={'800px'}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Registrasi
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'} textAlign={'center'}>
                        Silahkan lakukan registrasi, untuk dapat terintegrasi dan bisa menggunakan dengan layanan API kami
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="password_confirmation" isRequired>
                            <FormLabel>Konfirmasi Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={handleSubmit}
                                size="lg"
                                bg={'green.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'green.500',
                                }}>
                                Registrasi
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Sudah punya akun ? {' '}
                                <RouterLink to={'/login'}>
                                    <Link color={'green.400'}>Login disini</Link>
                                </RouterLink>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </PublicLayout>
    )
}