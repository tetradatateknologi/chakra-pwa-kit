import { useParams } from "react-router-dom"
import { useServiceStore } from "../../../stores/serviceStore"
import { useEffect, useState } from "react"

import AdminLayout from "../../../layout/admin-layout"
import {
  Box, FormControl, FormLabel, Heading, Stack, Text,
  Input, useColorModeValue, Switch, FormHelperText, Select, Button, HStack
} from "@chakra-ui/react"
import ApiMethod from "../../../components/api-method"

export default function ServiceDetail() {
  const { id } = useParams()
  const [service, setService] = useState({
    "id": 2,
    "created_at": "2023-09-01 04:09:56",
    "updated_at": "2023-09-01 04:09:56",
    "deleted_at": null,
    "service_keychar": "NaH3mCz",
    "service_name": "Get Data Siswa Madrasah2",
    "service_endpoint": "https://jsonplaceholder.typicode.com/posts",
    "service_description": "layanan untuk melihat data siswa madrasah di indonesia",
    "service_parameter": "[]",
    "service_online": 1,
    "service_method": "post",
    "service_body_type": "form-data"
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
          <HStack mb={5}>
            <ApiMethod>
              {service.service_method}
            </ApiMethod>
            <Heading size={'lg'}>
              {service.service_name}
            </Heading>
          </HStack>
          <Text>
            {service.service_description}
          </Text>
        </Stack>
      </Box>
    </AdminLayout>
  )
}
