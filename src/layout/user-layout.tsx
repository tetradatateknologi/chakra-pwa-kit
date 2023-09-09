import { ReactNode } from 'react'
import DashboardLayout from './dashboard-layout'

interface IProps {
  children: ReactNode
}

const UserLayout = (props: IProps) => {
  const { children } = props
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}

export default UserLayout