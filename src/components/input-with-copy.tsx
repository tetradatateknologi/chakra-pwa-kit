import {
  Input, InputRightElement,
  Button, InputGroup
} from "@chakra-ui/react"
import { toast } from 'react-toastify'
import { useUtil } from "../util/useUtil"

interface IProps {
  value: string
}

export default function InputWithCopy(props: IProps) {
  const { value } = props
  const handleCopy = () => {
    useUtil.copyToClipboard()
    toast.success("Berhasil Copy")
  }

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type='text'
        value={value}
        id="clipboard"
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleCopy}>
          copy
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
