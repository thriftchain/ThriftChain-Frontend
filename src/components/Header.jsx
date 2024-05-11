import logo from '../assets/logo.svg'
import { NavLink }from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-white'>
        <div className='w-[90%] mx-auto py-10 px-2 flex justify-between items-center'>
         <NavLink to="/"><img src={logo} alt="" className='w-[170px] h-auto' /></NavLink>
        <nav className='flex justify-between items-center'>
            <NavLink to="/" className="mr-6">Home </NavLink>
            <NavLink to="/about">About Us </NavLink>
        </nav>
        <div className='flex justify-between items-center'>
        <NavLink className="mr-6">Sign Up </NavLink>
        <w3m-button />
        </div>
        </div>
    </header>
  )
}

export default Header