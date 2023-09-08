import { useEffect, useState } from "react"
import AdminLayout from "../../../layout/admin-layout"
import ButtonWithModal from "../../../components/button-with-modal"
import { Heading, Text, Select, Code, FormHelperText, FormControl } from "@chakra-ui/react"

interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export default function Explore() {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [currentPost, setCurrentPost] = useState({});

  const getPostById = (id: any) => {
    if (id) {
      return post.filter((x: Post) => x.id == id)[0];
    }
    return {}
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(results => results.json())
      .then(data => {
        console.log(data);
        setPost(data);
      })
  }, []);

  return (
    <AdminLayout>
      <Heading mb={5}>Use Effect</Heading>

      <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
        Component select dibawah ini isinya diambil dari api berikut
      </Text>

      <Code fontWeight={'bold'}>
        https://jsonplaceholder.typicode.com/posts
      </Code>

      <FormControl my={5}>
        <Select onChange={(e) => {
          const data: any = getPostById(e.target.value);
          setTitle(data?.title);
          setCurrentPost(data);
        }} placeholder="Monggo dipilih" background={'green.200'}>
          {
            post.map((data: Post) => {
              return (
                <option value={data?.id}>{data?.title}</option>
              )
            })
          }
        </Select>
        <FormHelperText>
          {(title) ? <>Kamu memilih <b>{title}</b></> : 'Kamu masih belum memilih gan 😉'}
        </FormHelperText>
      </FormControl>

      <ButtonWithModal
        title="Detail Data"
        content={
          (currentPost.body) ? currentPost.body : 'Kamu masih belum memilih gan 😉'
        }
      />
    </AdminLayout>
  )
}