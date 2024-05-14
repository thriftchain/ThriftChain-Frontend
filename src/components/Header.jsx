import logo from '../assets/logo.svg'
import { NavLink }from 'react-router-dom'
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Header = () => {
  const {isConnected } = useWeb3ModalAccount();

  return (
    <header className='text-white'>
        <div className='w-[90%] mx-auto py-10 px-2 flex justify-between items-center '>
         <NavLink to="/"><img src={logo} alt="" className='w-[170px] h-auto' /></NavLink>
       {!isConnected && (<nav className='flex justify-between items-center'>
            <NavLink to="/" className="mr-10 hover:border-b hover:border-[#9C0F94] hover:text-[#9C0F94]">Home </NavLink>
            <NavLink to="/about" className='hover:border-b hover:border-[#9C0F94] hover:text-[#9C0F94]'>About Us </NavLink>
        </nav>)}
        <div className='flex justify-between items-center'>
        <NavLink className="mr-10 hover:border-b hover:border-[#9C0F94] hover:text-[#9C0F94]" to="/signup">Sign Up </NavLink>
        <w3m-button />
        </div>
        </div>
    </header>
  )
}

export default Header