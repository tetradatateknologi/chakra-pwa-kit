import AdminLayout from "../../layout/admin-layout"
import { Heading, Text } from '@chakra-ui/react'
import Carousel from "../../components/carousel"

export default function HomeAdminDefault() {
  return (
    <AdminLayout>
      <Carousel />
      <Heading my={5}>Home Pages</Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi voluptate similique. Voluptas molestiae exercitationem doloribus ea, minima nemo ratione quis facere, quo pariatur ad excepturi voluptatem reiciendis deserunt eum?
      </Text>
    </AdminLayout>
  )
}