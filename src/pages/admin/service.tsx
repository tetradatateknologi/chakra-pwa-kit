import AdminLayout from '../../layout/admin-layout';
import {
  Heading, Flex, Button, Icon, Text, Wrap, SimpleGrid,
  Card, Stack, CardBody, Divider, CardFooter, ButtonGroup
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { serviceStore } from '../../stores/serviceStore';

const ServiceCard = () => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>
            Nama Layanan API
          </Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam asperiores ab delectus vel voluptas esse ducimus.
          </Text>
          <Text textAlign={'end'} fontFamily={'mono'}>
            Kode API
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='green'>
            Detail
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default function Service() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await serviceStore.getServices()
      setServices(data)
    }

    fetchData()
  }, [])

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Daftar Layanan API
      </Heading>
      <Flex alignItems={'center'} justifyContent={'end'} mb={5}>
        <Link to={'new'}>
          <Button size={'sm'} colorScheme="green">
            <Icon
              mr={1}
              as={FiPlus}
            />
            Buat Service Baru
          </Button>
        </Link>
      </Flex>
      <SimpleGrid justifyItems={'center'} columns={{ base: 1, md: 3 }} spacing={3}>
        {
          services.map(() => {
            return (
              <ServiceCard />
            )
          })
        }
      </SimpleGrid>
    </AdminLayout>
  )
}
