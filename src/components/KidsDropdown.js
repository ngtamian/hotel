

import React , {useContext} from 'react';
//context
import {RoomContext} from "../context/RoomContext";

//headless ui menu
import {Menu} from '@headlessui/react';

//icons
import {BsChevronBarDown} from 'react-icons/bs';

const  lis = [

  {name: '0 kids'},
  {name: '1 kids'},
  {name: '2 kids'},
  {name: '3 kids'},
]



const KidsDropdown = () => {
  const {kids,setKids}=useContext(RoomContext);
  return <Menu as='div' className={'w-full h-full bg-white relative'}>
            <Menu.Button className=' w-full h-full items-center justify-between px-8'>
              {kids ==='0 kids' ? 'No kids' :kids}
              <BsChevronBarDown className='text-base text-accent-hover'/>
            </Menu.Button>
            {/* items */}
            <Menu.Items as='ul' className=' bg-white absolute w-full flex flex-col'>
              {
                lis.map((li,index)=>{
                  return  (
                      <Menu.Item
                          onClick={()=>setKids(li.name)}
                          as='li'
                          className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer' key={index} >
                       {li.name}
                      </Menu.Item>)
                })
              }
            </Menu.Items>

        </Menu>;
};

export default KidsDropdown;
