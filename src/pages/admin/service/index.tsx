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
import ButtonWithModal from '../../../components/button-with-modal';

export default function Service() {
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
      <Flex alignItems={'center'} justifyContent={'end'} mb={5}>
        <Link to={'create'}>
          <Button colorScheme="green">
            <Icon
              mr={1}
              as={FiPlus}
            />
            Buat Service Baru
          </Button>
        </Link>
      </Flex>
      <Box mt={10}>
        <DataTable value={services} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
          <Column field="service_keychar" filter filterPlaceholder="Cari berdasarkan ID" header="ID" style={{ width: '10%' }} />
          <Column field="service_name" header="Nama Layanan" filter filterPlaceholder="Cari berdasarkan nama" style={{ width: '25%' }} />
          <Column field="service_description" header="Deskripsi" style={{ width: '50%' }} />
          <Column style={{ width: '25%' }} header="Aksi" body={<ButtonWithModal title='Detail' content={'publa'} />} />
        </DataTable>
      </Box>
    </AdminLayout>
  )
}