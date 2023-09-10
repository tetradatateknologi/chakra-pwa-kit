import AdminLayout from '../../../layout/admin-layout';
import {
  Heading, Flex, Button, Icon, Box
} from '@chakra-ui/react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useServiceStore } from '../../../stores/serviceStore';

export default function Service() {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await useServiceStore.getServices()
      setServices(data)
    }

    fetchData()
  }, [])

  const ButtonEdit = (row: any) => {
    return (
      <Link to={'edit/' + row.service_keychar}>
        <Button colorScheme='green'>
          Edit
        </Button>
      </Link>
    )
  }

  const ButtonView = (row: any) => {
    return (
      <Link to={'/user/service/' + row.service_keychar}>
        <Button colorScheme='blue'>
          Dokumentasi
        </Button>
      </Link>
    )
  }

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Daftar Layanan API
      </Heading>
      <Flex alignItems={'center'} justifyContent={'end'} mb={5}>
        <Link to={'create'}>
          <Button colorScheme="green">
            <Icon
              mr={1}
              as={FiPlus}
            />
            Buat Layanan Baru
          </Button>
        </Link>
      </Flex>
      <Box mt={10}>
        <DataTable value={services} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
          <Column filter field="service_keychar" header="ID" />
          <Column filter field="updated_at" header="Updated at" />
          <Column filter field="service_name" header="Nama Layanan" />
          <Column filter field="service_gateway_endpoint" header="Gateway Endpoint" />
          <Column field="service_description" header="Deskripsi" />
          <Column body={ButtonEdit} />
          <Column body={ButtonView} />
        </DataTable>
      </Box>
    </AdminLayout>
  )
}