import Header from "../components/Header"
import Footer from "../components/Footer"
import { Navigate, Outlet } from "react-router-dom"
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const MainLayout = () => {
  const { isConnected } = useWeb3ModalAccount();

  return isConnected ? <Navigate to={'/dashboard'} /> : (
    <div className='w-screen'>
       <header> <Header /></header>
        <Outlet />
       <footer><Footer /></footer>
    </div>
  )
}

export default MainLayout