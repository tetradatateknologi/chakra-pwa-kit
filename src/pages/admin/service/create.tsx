import { useState } from "react"
import AdminLayout from "../../../layout/admin-layout"
import {
  Box, FormControl, FormLabel, Heading, Stack, Textarea, Text,
  Input, useColorModeValue, Switch,
  FormHelperText, Select, Button, Flex, Icon,
  Table, Thead,
  Tbody, Tr,
  Th, Td, TableContainer,
} from "@chakra-ui/react"
import { toast } from 'react-toastify'
import { FiTrash, FiPlus } from "react-icons/fi";
import { useAuth } from "../../../util/useAuth"
import LinkDefault from "../../../components/link-default"
import { useServiceStore } from "../../../stores/serviceStore";

interface Parameter {
  id: string,
  name: string,
  value: string,
  description: string,
}

export default function ServiceCreate() {
  const [parameters, setParameters] = useState([])
  const [parameterName, setParameterName] = useState('')
  const [parameterValue, setParameterValue] = useState('')
  const [parameterDescription, setParameterDescription] = useState('')
  const [method, setMethod] = useState('get')
  const [description, setDescription] = useState('')
  const [bodyType, setBodyType] = useState('form-data')
  const [online, setOnline] = useState(false)
  const [endpoint, setEndpoint] = useState('')
  const [name, setName] = useState('')

  const handleAddParameter = () => {
    // validation
    if (!parameterName || !parameterValue) {
      toast.error("Nama Parameter dan Contoh Nilai wajib diisi")
      return false
    }

    // add parameter
    const newParameter: Parameter = {
      id: useAuth.getRandomId(),
      name: parameterName,
      value: parameterValue,
      description: parameterDescription,
    }
    setParameters([...parameters, newParameter])

    // reset state
    setParameterName('')
    setParameterValue('')
    setParameterDescription('')
  }

  const handleDeleteParameter = (id) => {
    setParameters(parameters.filter((item) => item.id !== id))
    toast.success("Berhasil menghapus data")
  }

  const handleSubmit = () => {
    useServiceStore.createNewService({
      name: name,
      endpoint: endpoint,
      parameter: parameters,
      method: method,
      description: description,
      body_type: bodyType,
      online: online
    })
  }

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Informasi Detail Layanan API
      </Heading>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack>
          <FormControl isRequired mb={5}>
            <FormLabel>
              Nama Layanan API
            </FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <Stack mb={5} direction={'row'}>
            <FormControl isRequired>
              <FormLabel>
                Endpoint API
              </FormLabel>
              <Input type="text" value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
              <FormHelperText>
                Contoh <LinkDefault href="https://jsonplaceholder.typicode.com/posts" text="https://jsonplaceholder.typicode.com/posts" />
              </FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                Metode Pemanggilan API
              </FormLabel>
              <Select value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value='get'>GET</option>
                <option value='post'>POST</option>
              </Select>
              <FormHelperText>
                Info lebih detail <LinkDefault href="https://restfulapi.net/http-methods/" />
              </FormHelperText>
            </FormControl>
          </Stack>
          <FormControl
            isRequired
            mb={5}
            display={
              (method == 'post') ? 'block' : 'none'
            }
          >
            <FormLabel>
              Metode Pengiriman API
            </FormLabel>
            <Select value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
              <option value='form-data'>form-data</option>
              <option value='x-www-form-urlencoded'>x-www-form-urlencoded</option>
              <option value='raw json'>raw json</option>
            </Select>
            <FormHelperText>
              Info lebih detail <LinkDefault href="https://www.baeldung.com/postman-form-data-raw-x-www-form-urlencoded" />
            </FormHelperText>
          </FormControl>
          <FormControl display='flex' alignItems={'center'}>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Publikasikan API
            </FormLabel>
            <Switch id='email-alerts' onChange={() => {
              setOnline(!online)
            }} />
          </FormControl>
          <FormControl mb={5}>
            <FormHelperText>
              Publikasikan API agar dapat diakses oleh user
            </FormHelperText>
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>
              Deskripsi
            </FormLabel>
            <Textarea onBlur={((e) => setDescription(e.target.value))}>
            </Textarea>
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>
              Detail Parameter
            </FormLabel>
            <Flex alignItems={'center'} justifyContent={'end'}>
              <Button variant={'ghost'} size={'sm'} colorScheme="green" onClick={handleAddParameter}>
                <Icon
                  mr={1}
                  as={FiPlus}
                />
                Buat Parameter Baru
              </Button>
            </Flex>
            <TableContainer>
              <Table variant={'simple'}>
                <Thead>
                  <Tr>
                    <Th>Nama Parameter</Th>
                    <Th>Contoh Nilai</Th>
                    <Th>Deskripsi</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Input type="text" value={parameterName} onChange={(e) => setParameterName(e.target.value)} />
                    </Td>
                    <Td>
                      <Input type="text" value={parameterValue} onChange={(e) => setParameterValue(e.target.value)} />
                    </Td>
                    <Td>
                      <Input type="text" value={parameterDescription} onChange={(e) => setParameterDescription(e.target.value)} />
                    </Td>
                    <Td></Td>
                  </Tr>
                  {
                    parameters.map((parameter: Parameter) => {
                      return (
                        <Tr key={parameter.id}>
                          <Td>
                            <Text>
                              {parameter.name}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {parameter.value}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              {parameter.description}
                            </Text>
                          </Td>
                          <Td>
                            <Button size={'sm'} colorScheme="red" onClick={() => handleDeleteParameter(parameter.id)}>
                              <Icon
                                as={FiTrash}
                              />
                            </Button>
                          </Td>
                        </Tr>
                      )
                    })
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </FormControl>
          <Button mb={5} colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </AdminLayout>
  )
}