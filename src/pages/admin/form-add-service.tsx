import { useState } from "react"
import AdminLayout from "../../layout/admin-layout"
import {
  Box, FormControl, FormLabel, Heading, Stack, Textarea, Text,
  Input, useColorModeValue, Switch, FormHelperText, Select, Button, Flex, Icon
} from "@chakra-ui/react"

import {
  Table, Thead,
  Tbody, Tr,
  Th, Td, TableContainer,
} from '@chakra-ui/react'

import { toast } from 'react-toastify'
import { FiTrash } from "react-icons/fi";

export default function FormAddService() {
  const [parameters, setParameters] = useState([])
  const [parameterName, setParameterName] = useState('')
  const [parameterValue, setParameterValue] = useState('')
  const [parameterDescription, setParameterDescription] = useState('')
  const [method, setMethod] = useState('get')

  const handleAddParameter = () => {
    // validation
    if (!parameterName && !parameterValue) {
      toast.error("Nama Parameter dan Contoh Nilai wajib diisi")
      return false
    }

    // add parameter
    const newParameter = {
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

  return (
    <AdminLayout>
      <Heading mb={5}>
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
            <Input type="text" />
          </FormControl>
          <Stack mb={5} direction={'row'}>
            <FormControl isRequired>
              <FormLabel>
                URL API
              </FormLabel>
              <Input type="text" />
              <FormHelperText>
                Please fill with active number
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
                Please fill with active number
              </FormHelperText>
            </FormControl>
          </Stack>
          <FormControl
            mb={5}
            display={
              (method == 'post') ? 'block' : 'none'
            }
          >
            <FormLabel>
              Metode Pengiriman API
            </FormLabel>
            <Select>
              <option value='form-data'>form-data</option>
              <option value='x-www-form-urlencoded'>x-www-form-urlencoded</option>
              <option value='raw json'>raw json</option>
            </Select>
          </FormControl>
          <FormControl display='flex' alignItems={'center'}>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Publikasikan API
            </FormLabel>
            <Switch id='email-alerts' />
          </FormControl>
          <FormControl mb={5}>
            <FormHelperText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente deleniti incidunt nesciunt repellendus consequuntur voluptatum nihil perferendis aliquid error. Soluta rerum quibusdam sapiente autem architecto repellendus ad non ab?
            </FormHelperText>
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>
              Deskripsi
            </FormLabel>
            <Textarea height={100} />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>
              Detail Parameter
            </FormLabel>
            <Flex alignItems={'center'} justifyContent={'end'}>
              <Button size={'sm'} colorScheme="green" onClick={handleAddParameter}>
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
                    parameters.map((parameter) => {
                      return (
                        <Tr>
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
                            <Button colorScheme="red">
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
          <Button mb={5} colorScheme="green">
            Submit
          </Button>
        </Stack>
      </Box>
    </AdminLayout>
  )
}