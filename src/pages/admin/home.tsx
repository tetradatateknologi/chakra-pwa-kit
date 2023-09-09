import { useState } from "react"
import AdminLayout from "../../layout/admin-layout"
import {
  Heading, SimpleGrid, Stat, StatLabel, StatNumber
} from '@chakra-ui/react'

export default function HomeAdminDefault() {
  const [statData, setStatData] = useState([
    {
      name: "Jumlah API",
      value: 35,
    },
    {
      name: "Jumlah User",
      value: 150,
    },
    {
      name: "Jumlah Transaksi",
      value: 10000,
    },
  ])

  return (
    <AdminLayout>
      <Heading my={5}>Dashboard</Heading>
      <SimpleGrid justifyItems={'center'} columns={{ base: 1, md: 3 }} spacing={10}>
        {
          statData.map(data => {
            return (
              <Stat
                cursor={'pointer'}
                w={'100%'}
                px={'20px'}
                py={'12px'}
                shadow={'lg'}
                className='bg-glass'
                borderRadius={'10px'}
                transitionDuration={'0.5s'}
                _hover={{
                  transform: 'scale(1.05)'
                }}
              >
                <StatLabel>{data.name}</StatLabel>
                <StatNumber fontSize={'3xl'}>{data.value}</StatNumber>
              </Stat>
            )
          })
        }
      </SimpleGrid>
    </AdminLayout>
  )
}