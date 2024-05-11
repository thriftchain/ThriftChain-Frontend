import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        <Header />
        <div className="flex justify-between">
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout