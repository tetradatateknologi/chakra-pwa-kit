import AdminLayout from "../../layout/admin-layout"
import BlogList from "../../components/blog-list"
import { Heading, Text } from "@chakra-ui/react"

export default function Trending() {
  return (
    <AdminLayout>
      <Heading mb={5}>Blog List Pages</Heading>
      <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi voluptate similique. Voluptas molestiae exercitationem doloribus ea, minima nemo ratione quis facere, quo pariatur ad excepturi voluptatem reiciendis deserunt eum?
      </Text>
      <BlogList />
    </AdminLayout>
  )
}