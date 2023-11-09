import { Box, Button, Container, HStack, Heading, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileLayout from "../../layout/mobile-layout";
import { FiEdit } from "react-icons/fi";

interface SampleBoxProps {
  title: string
  link: string
  desc: string
}

const SampleBox = (props: SampleBoxProps) => {
  const { title, link, desc } = props
  return (
    <Box boxShadow={'xl'} display={'flex'}>
      <Container px={'20px'} w={'300px'} py={'50px'} h={'300px'}>
        <Heading fontSize={'2xl'} mb={2}>
          {title}
        </Heading>
        <Text height={'100px'}>
          {desc}
        </Text>
        <Link to={link}>
          <Button variant={'outline'} colorScheme={'blue'}>
            <Icon as={FiEdit} me={2} />
            View Detail
          </Button>
        </Link>
      </Container>
    </Box>
  )
}

export default function Home() {
  const sampleData = [
    {
      title: 'Blank',
      desc: 'The following is an example of a blank page that does not contain any content.',
      link: '/sample/blank'
    },
    {
      title: 'Not Found',
      desc: 'The following is an example of a page not found with an eye-catching image illustration',
      link: '/sample/not-found'
    },
    {
      title: 'Auth using OTP',
      desc: 'The following is an example of a page not found with an eye-catching image illustration',
      link: '/sample/auth/otp'
    },
  ]

  return (
    <MobileLayout>
      <Text
        bgGradient='linear(to-l, blue.500, blue.400)'
        bgClip='text'
        fontSize='4xl'
        lineHeight={1}
        fontWeight='extrabold'
        mb={5}
      >
        Mobile First Web App
      </Text>
      <Text>
        A Mobile First Web App is a web design approach that <b>prioritizes the user experience of mobile devices.</b> This approach focuses on developing the appearance and functionality of a website for mobile devices first before creating the desktop version.
      </Text>

      <Text
        mt={'20px'}
        bgGradient='linear(to-l, blue.500, blue.400)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='extrabold'
      >
        Sample Pages
      </Text>
      <Text>
        Below are <b>several examples</b> of page designs and frontend components that can be used and are ready for you to use 🚀
      </Text>
      <HStack
        overflowY={'auto'}
      >
        {
          sampleData.map((data) => {
            return (
              <SampleBox
                title={data.title}
                desc={data.desc}
                link={data.link}
              />
            )
          })
        }
      </HStack>
    </MobileLayout>
  )
}
