import { Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text } from "@chakra-ui/react";
import LinkDefault from "../../components/other/link-default";
import MobileLayout from "../../layout/mobile-layout";

export default function CustomTheme() {
  return (
    <MobileLayout simpleMode>
      <Flex justifyContent={'end'}>
        <Image
          src='https://www.telkomsel.com/sites/default/files/mainlogo-2022-rev.png'
          width={'150px'}
          mb={'30px'}
        />
      </Flex>
      <Heading>
        Lupa Password
      </Heading>
      <Text>
        Masukkan alamat Email yang terdaftar dengan akun Telkomsel My Visitor. Kami akan mengirimkan link untuk melakukan reset password.
      </Text>
      <FormControl isRequired my={5}>
        <FormLabel>
          Email
        </FormLabel>
        <Input type="text" />
      </FormControl>
      <Button>
        Reset Password
      </Button>
      <LinkDefault href="/" textAlign="center">
        Kembali ke Halaman Login
      </LinkDefault>
    </MobileLayout>
  )
}
