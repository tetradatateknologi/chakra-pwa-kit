import AdminLayout from '../../../layout/admin-layout';
import {
  Heading, Flex, Button, Icon, Box, Text
} from '@chakra-ui/react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useFilmStore } from '../../../stores/filmStore';

export default function Film() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFilmStore.getFilms()
      console.log(data)
      setFilms(data)
    }

    fetchData()
  }, [])

  const ButtonEdit = (row: any) => {
    return (
      <Link to={'edit/' + row.id}>
        <Button colorScheme='green'>
          Edit
        </Button>
      </Link>
    )
  }

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Sample Data Management Page
      </Heading>
      <Text mb={2} fontSize={'sm'} w={'50%'}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eum sunt eveniet porro iure provident voluptate velit suscipit? Reiciendis, similique! Sit aliquam esse rerum quod, culpa praesentium quisquam dignissimos asperiores.
      </Text>
      <Flex alignItems={'center'} justifyContent={'end'} mb={5}>
        <Link to={'create'}>
          <Button colorScheme="green">
            <Icon
              mr={1}
              as={FiPlus}
            />
            Create
          </Button>
        </Link>
      </Flex>
      <Box mt={10}>
        <DataTable value={films} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
          <Column filter field="name" header="Film Name" />
          <Column filter field="author" header="Author" />
          <Column filter field="updated_at" header="Updated at" />
          <Column body={ButtonEdit} />
        </DataTable>
      </Box>
    </AdminLayout>
  )
}