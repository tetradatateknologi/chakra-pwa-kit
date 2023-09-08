import { useState } from "react"
import AdminLayout from "../../../layout/admin-layout"
import {
  Box, FormControl, FormLabel, Heading, Stack, Textarea,
  Input, useColorModeValue, Switch,
  FormHelperText, Select, Button,
  InputGroup, InputLeftAddon
} from "@chakra-ui/react"
import LinkDefault from "../../../components/link-default"
import { useServiceStore } from "../../../stores/serviceStore";
import ApiParameter from "../../../components/api-parameter";

export default function ServiceCreate() {
  const [customEndpoint, setCustomEndpoint] = useState('')
  const [useCustomEndpoint, setUseCustomEndpoint] = useState(false)
  const [parameters, setParameters] = useState([])
  const [method, setMethod] = useState('get')
  const [description, setDescription] = useState('')
  const [bodyType, setBodyType] = useState('form-data')
  const [online, setOnline] = useState(false)
  const [endpoint, setEndpoint] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = () => {
    useServiceStore.createNewService({
      name: name,
      endpoint: endpoint,
      parameter: parameters,
      method: method,
      custom_gateway_endpoint: (useCustomEndpoint) ? customEndpoint : '',
      description: description,
      body_type: (method == 'post') ? bodyType : '',
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
            <Input type="text" onBlur={(e) => setName(e.target.value)} />
          </FormControl>

          <Stack mb={5} direction={'row'}>
            <FormControl isRequired>
              <FormLabel>
                Endpoint API
              </FormLabel>
              <Input type="text" onBlur={(e) => setEndpoint(e.target.value)} />
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

          <Stack direction={'row'}>
            <Stack w={'100%'}>
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
            </Stack>

            <Stack w={'100%'}>
              <FormControl display='flex' alignItems={'center'}>
                <FormLabel htmlFor='email-alerts' mb='0'>
                  Gunakan endpoint custom
                </FormLabel>
                <Switch id='email-alerts' onChange={() => {
                  setUseCustomEndpoint(!useCustomEndpoint)
                }} />
              </FormControl>
              <FormControl mb={5}>
                <FormHelperText>
                  Anda bisa menggunakan endpoint custom jika diperlukan, non aktifkan jika ingin endpoint di generate oleh sistem
                </FormHelperText>
              </FormControl>
            </Stack>
          </Stack>

          <FormControl
            isRequired
            mb={5}
            display={
              (useCustomEndpoint) ? 'block' : 'none'
            }
          >
            <FormLabel>
              Custom Gateway Endpoint
            </FormLabel>
            <InputGroup size='sm'>
              <InputLeftAddon children='https://gateway.kemenag.go.id/api/' />
              <Input type="text" onBlur={(e) => setCustomEndpoint(e.target.value)} />
            </InputGroup>
          </FormControl>

          <FormControl mb={5}>
            <FormLabel>
              Deskripsi
            </FormLabel>
            <Textarea onBlur={((e) => setDescription(e.target.value))}>
            </Textarea>
          </FormControl>

          <ApiParameter
            isAdmin={true}
            parameters={parameters}
            setParameters={setParameters}
          />

          <Button mb={5} colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </AdminLayout>
  )
}