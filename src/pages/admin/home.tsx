import { useState } from "react"
import AdminLayout from "../../layout/admin-layout"
import {
  Heading, SimpleGrid, Stat, StatLabel, StatNumber
} from '@chakra-ui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

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
      value: "10.000",
    },
  ])

  return (
    <AdminLayout>
      <Heading my={5}>Dashboard</Heading>
      <SimpleGrid mb={10} justifyItems={'center'} columns={{ base: 1, md: 3 }} spacing={10}>
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
      <Line options={options} data={data} />
    </AdminLayout>
  )
}