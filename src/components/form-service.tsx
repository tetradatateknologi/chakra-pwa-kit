import {
  Box, FormControl, FormLabel, Stack, Textarea,
  Input, useColorModeValue, Switch,
  FormHelperText, Select, Button,
  InputGroup, InputLeftAddon
} from "@chakra-ui/react"
import ApiParameter from "./api-parameter";
import LinkDefault from "./link-default";

interface FormServiceProps {
  customEndpoint: string,
  useCustomEndpoint: boolean,
  parameters: any,
  method: string,
  description: string,
  bodyType: string,
  online: boolean,
  endpoint: string,
  name: string,
  setCustomEndpoint: any,
  setUseCustomEndpoint: any,
  setParameters: any,
  setMethod: any,
  setDescription: any,
  setBodyType: any,
  setOnline: any,
  setEndpoint: any,
  setName: any,
  handleSubmit: any,
}

export default function FormService(props: FormServiceProps) {
  const {
    customEndpoint,
    useCustomEndpoint,
    parameters,
    method,
    description,
    bodyType,
    online,
    endpoint,
    name,
    setCustomEndpoint,
    setUseCustomEndpoint,
    setParameters,
    setMethod,
    setDescription,
    setBodyType,
    setOnline,
    setEndpoint,
    setName,
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
            <Input value={customEndpoint} type="text" onChange={(e) => setCustomEndpoint(e.target.value)} />
          </InputGroup>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>
            Deskripsi
          </FormLabel>
          <Textarea value={description} onChange={((e) => setDescription(e.target.value))}>
          </Textarea>
        </FormControl>

        <ApiParameter
          isAdmin={true}
          parameters={parameters}
          setParameters={setParameters}
        />

        <Button mb={5} colorScheme="green" onClick={handleSubmit}>
          Simpan
        </Button>
      </Stack>
    </Box>
  )
}