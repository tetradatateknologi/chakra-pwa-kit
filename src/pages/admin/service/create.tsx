import { useState } from "react"
import AdminLayout from "../../../layout/admin-layout"
import {
  Heading
} from "@chakra-ui/react"
import { useServiceStore } from "../../../stores/serviceStore";
import FormService from "../../../components/form/form-service";

export default function ServiceCreate() {
  const [customEndpoint, setCustomEndpoint] = useState('')
  const [useCustomEndpoint, setUseCustomEndpoint] = useState(false)
  const [parameters, setParameters] = useState([])
  const [method, setMethod] = useState('get')
  const [description, setDescription] = useState('')
  const [bodyType, setBodyType] = useState('form-data')
  const [online, setOnline] = useState(false)
  const [endpoint, setEndpoint] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = () => {
    useServiceStore.createNewService({
      name: name,
      endpoint: endpoint,
      parameter: parameters,
      method: method,
      custom_gateway_endpoint: (useCustomEndpoint) ? customEndpoint : '',
      description: description,
      body_type: (method == 'post') ? bodyType : '',
      online: online
    })
  }

  return (
    <AdminLayout>
      <Heading size={'lg'} mb={5}>
        Informasi Detail Layanan API
      </Heading>
      <FormService
        customEndpoint={customEndpoint}
        useCustomEndpoint={useCustomEndpoint}
        parameters={parameters}
        method={method}
        description={description}
        bodyType={bodyType}
        online={online}
        endpoint={endpoint}
        name={name}
        setCustomEndpoint={setCustomEndpoint}
        setUseCustomEndpoint={setUseCustomEndpoint}
        setParameters={setParameters}
        setMethod={setMethod}
        setDescription={setDescription}
        setBodyType={setBodyType}
        setOnline={setOnline}
        setEndpoint={setEndpoint}
        setName={setName}
        handleSubmit={handleSubmit}
      />
    </AdminLayout>
  )
}