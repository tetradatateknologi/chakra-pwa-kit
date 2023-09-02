import {
  IconButton, Avatar, Box,
  CloseButton, Flex, HStack,
  VStack, Icon,
  useColorModeValue, Text,
  Drawer, DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Container,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, UnorderedList, ListItem
} from '@chakra-ui/react'
import {
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import Logo from '../components/logo'
import { Link } from 'react-router-dom'
import { AuthMiddleware } from '../middleware/AuthMiddleware'
import { useAuth } from '../util/useAuth'
import { ReactNode } from 'react'
import { useMenuStore } from '../stores/menuStore'

interface LinkItemProps {
  name: string
  icon: IconType
  link: string
  type?: string
  data?: any
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface SubMenuProps {
  label: string,
  link: string,
  icon?: IconType
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const user = useAuth.getUserLoginData()
const LinkItems: Array<LinkItemProps> = useMenuStore.getMenuByRole()

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <div style={{ overflow: 'auto', height: '100vh' }}>
        {LinkItems.map((link) => {
          if (link?.type == "dropdown") {
            return (
              <Accordion
                allowToggle
                mx="3"
                borderRadius="lg"
                role='group'
                transition={'all 0.1s'}
                _hover={{
                  bg: 'green.400',
                  color: 'white',
                }}
              >
                <AccordionItem py={2}>
                  <AccordionButton>
                    <Icon
                      mr="4"
                      fontSize="16"
                      as={link.icon}
                    />
                    <Box as="span" flex='1' textAlign='left'>
                      {link.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel p={0}>
                    <UnorderedList>
                      {
                        link.data.map((subMenu: SubMenuProps) => {
                          return (
                            <Box
                              mb={3}
                              p={3}
                              transition={'all 0.1s'}
                              cursor={'pointer'}
                              _hover={{
                                bg: 'green.500',
                                color: 'white',
                              }}
                            >
                              <Link key={subMenu.link} to={subMenu.link}>
                                <ListItem listStyleType={'none'}>{subMenu.label}</ListItem>
                              </Link>
                            </Box>
                          )
                        })
                      }
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )
          }
          else {
            return (
              <Link key={link.name} to={link.link}>
                <NavItem icon={link.icon}>
                  {link.name}
                </NavItem>
              </Link>
            )
          }
        })}
      </div>
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="div"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="3"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        transition={'all 0.1s'}
        _hover={{
          bg: 'green.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        <Logo />
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINHBtBZ5RQtpGgsdGGOZj_-s21S4jSIaPow&usqp=CAU'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">
                    {user.login_name}
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    {user.login_role}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={() => {
                useAuth.resetAuth()
                window.location.reload()
              }
              }>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = (props: AdminLayoutProps) => {
  new AuthMiddleware()
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* content */}
        <Container maxW={'7xl'} p="12">
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default AdminLayout