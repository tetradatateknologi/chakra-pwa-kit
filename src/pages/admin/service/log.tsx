import { useEffect, useState } from "react";
import { Heading, Box, Badge } from "@chakra-ui/react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useServiceStore } from "../../../stores/serviceStore";
import AdminLayout from "../../../layout/admin-layout";
import ButtonWithModal from "../../../components/button-with-modal";

export default function ServiceLogAdmin() {

  const [services, setServices] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await useServiceStore.getLogServices()
      setServices(data)
    }
    fetchData()
  }, [])

  const ButtonP = (row: any) => {
    return <ButtonWithModal title="P" content={row.log_service_payload} />
  }

  const ButtonR = (row: any) => {
    return <ButtonWithModal title="R" content={row.log_service_response} />
  }

  const CStatus = (row: any) => {
    const status = row.log_service_response_status_code
    const isOk = (status == 200) ? true : false
    return (
      <Badge
        py={1}
        px={2}
        variant={'subtle'}
        colorScheme={(isOk) ? "green" : "red"}
      >
        {
          (isOk) ? "ok " + status : "error " + status
        }
      </Badge>
    )
  }

  return (
    <AdminLayout>
      <Heading size={'lg'}>
        Log Penggunaan Layanan API
      </Heading>
      <Box mt={10}>
        <DataTable value={services} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
          <Column header="Kode Transaksi" filter field="log_service_keychar" style={{ width: '10%' }}></Column>
          <Column header="Tanggal Transaksi" filter field="created_at" style={{ width: '15%' }}></Column>
          <Column header="Service Endpoint" field="log_service_endpoint" style={{ width: '20%' }}></Column>
          <Column header="Status Transaksi" style={{ width: '10%' }} body={CStatus} ></Column>
          <Column header="Payload" style={{ width: '5%' }} body={ButtonP} ></Column>
          <Column header="Response" style={{ width: '5%' }} body={ButtonR} ></Column>
        </DataTable>
      </Box>
    </AdminLayout>
  )
}
