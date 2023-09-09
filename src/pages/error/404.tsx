import { Button, Heading, Stack } from "@chakra-ui/react";
import PublicLayout from "../../layout/public-layout";

export default function NotFoundPage() {
  return (
    <PublicLayout>
      <Stack>
        <Heading mb={5}>
          Maaf, Halaman tidak ditemukan
        </Heading>
        <Button
          colorScheme={'whatsapp'}
          onClick={() => {
            window.history.back()
          }}
        >
          Kembali
        </Button>
      </Stack>
    </PublicLayout>
  )
}