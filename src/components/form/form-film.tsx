import {
  Box, FormControl, FormLabel, Stack, Textarea,
  Input, useColorModeValue, Button, FormHelperText
} from "@chakra-ui/react"

interface FormFilmProps {
  name: string,
  setName: any,
  author: string,
  setAuthor: any,
  description: string,
  setDescription: any,
  handleSubmit: any,
}

export default function FormFilm(props: FormFilmProps) {
  const {
    name,
    setName,
    author,
    setAuthor,
    description,
    setDescription,
    handleSubmit,
  } = props

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
    >
      <Stack>
        <FormControl isRequired mb={5}>
          <FormLabel>
            Name
          </FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <FormHelperText>
            The film name must use a unique name
          </FormHelperText>
        </FormControl>

        <FormControl isRequired mb={5}>
          <FormLabel>
            Author
          </FormLabel>
          <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>
            Deskripsi
          </FormLabel>
          <Textarea value={description} onChange={((e) => setDescription(e.target.value))}>
          </Textarea>
        </FormControl>

        <Button mb={5} colorScheme="green" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Box>
  )
}