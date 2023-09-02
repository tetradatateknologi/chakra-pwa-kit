import AdminLayout from "../../layout/admin-layout"
import {
  Box, FormControl, FormLabel, Heading, Stack,
  Input, useColorModeValue, Switch, FormHelperText, Select, Button
} from "@chakra-ui/react"

export default function FormSample() {
  return (
    <AdminLayout>
      <Heading mb={5}>Form Sample Pages</Heading>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
      >
        <Stack>
          <FormControl>
            <FormLabel>
              Repository Name
            </FormLabel>
            <Input type="text" />
          </FormControl>
          <Stack direction={'row'}>
            <FormControl>
              <FormLabel>
                Email Adress
              </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>
                Phone Number
              </FormLabel>
              <Input type="number" />
              <FormHelperText>
                Please fill with active number
              </FormHelperText>
            </FormControl>
          </Stack>
          <FormControl mt={5} display='flex' alignItems={'center'}>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Enable email alerts?
            </FormLabel>
            <Switch id='email-alerts' />
          </FormControl>
          <FormControl mb={5}>
            <FormHelperText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente deleniti incidunt nesciunt repellendus consequuntur voluptatum nihil perferendis aliquid error. Soluta rerum quibusdam sapiente autem architecto repellendus ad non ab?
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>
              Choose Option
            </FormLabel>
            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>
          <Button mt={5} colorScheme="green">
            Submit
          </Button>
        </Stack>
      </Box>
    </AdminLayout>
  )
}