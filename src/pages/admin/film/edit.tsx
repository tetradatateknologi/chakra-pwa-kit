import { useState, useEffect } from "react"
import AdminLayout from "../../../layout/admin-layout"
import {
  Heading
} from "@chakra-ui/react"
import { useServiceStore } from "../../../stores/serviceStore";
import { useParams } from "react-router-dom"
import FormFilm from "../../../components/form/form-film";
import { useFilmStore } from "../../../stores/filmStore";

export default function FilmEdit() {
  const { id } = useParams()

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFilmStore.getFilm(id)
      setName(data.name)
      setAuthor(data.author)
      setDescription(data.description)
    }
    fetchData()
  }, [])

  const handleSubmit = () => {
    useFilmStore.updateFilm({
      id: id,
      name: name,
      author: author,
      description: description,
    })
  }

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Sample Detail Page
      </Heading>
      <FormFilm
        name={name}
        author={author}
        description={description}
        setName={setName}
        setAuthor={setAuthor}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
    </AdminLayout>
  )
}