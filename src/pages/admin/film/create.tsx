import { useState } from "react"
import AdminLayout from "../../../layout/admin-layout"
import {
  Heading
} from "@chakra-ui/react"
import FormFilm from "../../../components/form/form-film";
import { useFilmStore } from "../../../stores/filmStore";

export default function FilmCreate() {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    useFilmStore.createNewFilm({
      name: name,
      author: author,
      description: description,
    })
  }

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Register New Film
      </Heading>
      <FormFilm
        name={name}
        author={author}
        description={description}
        setDescription={setDescription}
        setName={setName}
        setAuthor={setAuthor}
        handleSubmit={handleSubmit}
      />
    </AdminLayout>
  )
}