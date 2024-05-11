import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
// import { RxPerson } from "react-icons/rx";
import { TbSettings } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from "react-router-dom"

const Sidebar = () =>  {
  const activeStyle = {
    backgroundColor: '#2C2C2C',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-[#060E37] w-[25%] text-white p-8 py-12'>
      <NavLink to="/dashboard" className="text-[18px] flex items-center py-4 mb-4" style={({isActive}) => isActive ? activeStyle : null }><CgHomeAlt className="mr-4" />Dashboard</NavLink>
      <NavLink to="message" className="text-[18px] flex items-center py-4 mb-4" style={({isActive}) => isActive ? activeStyle : null }><BiBox className="mr-4" /> Message</NavLink>
      <NavLink to="profile" className="text-[18px] flex items-center py-4 mb-4" style={({isActive}) => isActive ? activeStyle : null }><AiOutlineTeam className="mr-4" /> Profile</NavLink>
      <NavLink to="/settings" className="text-[18px] flex items-center py-4 mb-4" style={({isActive}) => isActive ? activeStyle : null }><TbSettings className="mr-4" /> Settings</NavLink>
    </div>
  );
}

export default Sidebar;
