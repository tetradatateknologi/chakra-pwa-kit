import {
  FormControl, FormLabel, Text, Input,
  Button, Flex, Icon,
  Table, Thead,
  Tbody, Tr,
  Th, Td, TableContainer,
} from "@chakra-ui/react"
import { FiTrash, FiPlus } from "react-icons/fi"
import { useState } from "react"
import { toast } from 'react-toastify'
import { useAuth } from "../util/useAuth"

interface Parameter {
  id: string,
  name: string,
  value: string,
  description: string,
}

interface IProps {
  parameters: any,
  setParameters?: any,
  isAdmin?: boolean
}

export default function ApiParameter(props: IProps) {
  const { parameters, setParameters, isAdmin } = props
  const [parameterName, setParameterName] = useState('')
  const [parameterValue, setParameterValue] = useState('')
  const [parameterDescription, setParameterDescription] = useState('')

  const handleDeleteParameter = (id: string) => {
    setParameters(parameters.filter((item: any) => item.id !== id))
    toast.success("Berhasil menghapus data")
  }

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

  return (
    <FormControl my={10}>
      <FormLabel>
        Detail Parameter
      </FormLabel>
      <Flex
        alignItems={'center'}
        justifyContent={'end'}
        display={(isAdmin) ? 'flex' : 'none'}
      >
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
            <Tr display={(isAdmin) ? 'table-row' : 'none'}>
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
                    <Td display={(isAdmin) ? 'flex' : 'none'}>
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
  )
}
