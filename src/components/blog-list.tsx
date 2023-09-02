import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  FormControl,
  Input
} from '@chakra-ui/react'

interface Props {
  marginTop?: number
  tags: any[]
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const BlogCard = () => {
  return (
    <WrapItem bg={'white'} boxShadow={'lg'} width={{ base: '100%', sm: '100%', md: '45%', lg: '30%' }}>
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Image
              transform="scale(1.0)"
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
              alt="some text"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
            />
          </Box>
        </Box>
        <Box p={4}>
          <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
          <Heading fontSize="xl" marginTop="2">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Some blog title
            </Text>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </Text>
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
    </WrapItem>
  )
}

const BlogList = () => {
  return (
    <Wrap spacing="30px" marginTop="10">
      <FormControl mt={8}>
        <Input w={500} bg={'white'} type='text' placeholder="Search here" />
      </FormControl>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Wrap>
  )
}

export default BlogList