import AdminLayout from "../../layout/admin-layout"
import { Heading } from '@chakra-ui/react'
import Carousel from "../../components/carousel"

export default function HomeDefaultUser() {
  return (
    <AdminLayout>
      <Heading my={5}>Selamat Datang Kembali</Heading>
      <Carousel />
    </AdminLayout>
  )
}