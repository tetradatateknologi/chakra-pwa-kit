import { useParams } from "react-router-dom"
import { useServiceStore } from "../../../stores/serviceStore"
import { useEffect, useState } from "react"

import AdminLayout from "../../../layout/admin-layout"
import {
  Box, FormControl, Heading, Stack, Text,
  useColorModeValue, HStack
} from "@chakra-ui/react"
import ApiMethod from "../../../components/api-method"
import ApiParameter from "../../../components/api-parameter"
import InputWithCopy from "../../../components/input-with-copy"

export default function ServiceDetail() {
  const { id } = useParams()
  const [service, setService] = useState({
    "id": 12,
    "created_at": "2023-09-08 02:09:30",
    "updated_at": "2023-09-08 02:09:30",
    "deleted_at": null,
    "service_keychar": "E0rJJ3p",
    "service_name": "Test API URL Default",
    "service_endpoint": "https://jsonplaceholder.typicode.com/posts/2",
    "service_description": "Test API URL Default",
    "service_parameter": [
      {
        "id": "3bab5a85-d6e0-42b2-b75a-2e9475dfcf17",
        "name": "name",
        "value": "hanif",
        "description": ""
      },
      {
        "id": "0d41f529-5b28-4b05-9aae-f728607329e4",
        "name": "password",
        "value": "123",
        "description": ""
      }
    ],
    "service_online": 1,
    "service_method": "post",
    "service_body_type": "x-www-form-urlencoded",
    "service_gateway_endpoint": "http://localhost:8000/E0rJJ3p"
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await useServiceStore.getService(id)
      setService(data)
    }
    fetchData()
  }, [])

  return (
    <AdminLayout>
      <Heading mb={5}>Detail API</Heading>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack>
          <HStack mb={4}>
            <ApiMethod>
              {service.service_method}
            </ApiMethod>
            <Heading size={'lg'}>
              {service.service_name}
            </Heading>
          </HStack>
          <FormControl mb={4} isReadOnly>
            <InputWithCopy
              value={service.service_gateway_endpoint}
            />
          </FormControl>
          <Text>
            {service.service_description}
          </Text>
          <ApiParameter
            parameters={service.service_parameter}
          />
        </Stack>
      </Box>
    </AdminLayout>
  )
}
