import React, { useState } from 'react'
import CreateSingleThrift from "../../components/CreateSingleThrift";
import CreateGroupThrift from "../../components/CreateGroupThrift";
import UseFetchRequests from "../../Hooks/UseFetchRequests";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UseFetchGroupThrift from '../../Hooks/UseFetchGroupThrift';

const UserHome = () => {
  const allRequests = UseFetchRequests();
  const allGroupRequests = UseFetchGroupThrift()
 
  const [value, setValue] = useState('singleThrift');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    return value;
  };

  const handleClick = (value) => {
    return value
  }

  return (
    <div className="text-white">
      <h1 className="mb-4 lg:text-[38px] md:text-[38px] text-[24px]">
        Find a contribution module
      </h1>
      <div className="px-8 py-10 bg-[#060E37] rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] lg:text-[22px] md:text-[22px] font-bold">
            Browse and find contribution modules to join
          </h2>
          <div className="mt-4 mb-3 flex items-center">
            <CreateGroupThrift />
            <CreateSingleThrift />
          </div>
        </div>
        <section>
        <Box sx={{ width: '100%', typography: 'body1', color: 'white'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{
                        style: {
                        backgroundColor: "#9C0F94",
                        color: 'white'
                        }
                    }}>
      <Tab label="Single Thrift" value="singleThrift" style={{ color: 'white' }} />
            <Tab label="Group Thrift" value="groupThrift" style={{ color: 'white' }} />
          </TabList>
        </Box>
        <TabPanel value="singleThrift">
        <section className="flex justify-between flex-wrap mt-8">
        {allRequests.map((info, index) => (
        <div className="lg:w-[30%] md:w-[30%] w-[100%] p-6 rounded-lg shadow-md shadow-[#3b3b3b]" key={index} onClick={handleClick}>
            <Link to={`${info.addInfo}`}>
            <img
                src="https://img.freepik.com/free-photo/3d-cartoon-character-fun-teenager_183364-80805.jpg?t=st=1715518957~exp=1715522557~hmac=d5a2038f20c2276af324113fc4a15bca2d989b6953b052cdccda61b165e4834e&w=1380"
                alt=""
                className="w-[100%] rounded-lg"
            />
            <p className='truncate mt-4'>{info.addInfo}</p>
            <p className="font-normal text-justify text-white text-xs">
                Save towards a goal.
            </p>
            </Link>
        </div>
        ))}
        </section>
        </TabPanel>
        <TabPanel value="groupThrift">
        <section className="flex justify-between flex-wrap mt-8">
        {allGroupRequests.map((info, index) => (
            <div className="lg:w-[30%] md:w-[30%] w-[100%] p-6 rounded-lg shadow-md shadow-[#3b3b3b]" key={index}>
              <Link to={`${info.groupAdd}`}>
                <img
                  src="https://img.freepik.com/free-vector/diverse-group-people-savings-concept-illustration_53876-32631.jpg?t=st=1715550013~exp=1715553613~hmac=4c9520da4dad94ce1c877974fa7dc68a9d7c5dd653c9d0ae22ad14388ae26e63&w=1800"
                  alt=""
                  className="w-[100%] rounded-lg"
                />
                <p className='truncate mt-4'>{info.groupAdd}</p>
                <p className="font-normal text-justify text-white text-xs">
                  Save towards a goal.
                </p>
              </Link>
            </div>
          ))}
          </section>
        </TabPanel>
      </TabContext>
         </Box>
        </section>
       
      </div>
    </div>
  );
};

export default UserHome;
