import AdminLayout from '../../../layout/admin-layout';
import {
  Heading, Button, Text, SimpleGrid,
  Card, Stack, CardBody, Divider, CardFooter, ButtonGroup
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useServiceStore } from '../../../stores/serviceStore';
import { useNavigate } from 'react-router-dom';

const ServiceCard = (props: any) => {
  const { data } = props
  const navigate = useNavigate()

  return (
    <Card w={'100%'}>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>
            {data.service_name}
          </Heading>
          <Text>
            {data.service_description}
          </Text>
          <Text textAlign={'end'} fontFamily={'mono'}>
            {data.service_keychar}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='green' onClick={() => {
            navigate(data.service_keychar)
          }}>
            Detail
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default function ServiceUser() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await useServiceStore.getServices()
      setServices(data)
    }

    fetchData()
  }, [])

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Daftar Layanan API
      </Heading>
      <SimpleGrid justifyItems={'center'} columns={{ base: 1, md: 3 }} spacing={3}>
        {
          services.map((service) => {
            return (
              <ServiceCard
                data={service}
              />
            )
          })
        }
      </SimpleGrid>
    </AdminLayout>
  )
}