import React, {useContext} from 'react';
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

//scroll top component
import {RoomContext} from "../context/RoomContext";

//context

//icones
import {FaCheck} from "react-icons/fa";
import {useParams} from "react-router-dom";
import {roomData} from "../data";

const RoomDetails = () => {
  const {rooms} = useContext(RoomContext);
  const {id} = useParams();

  console.log('RoomDetails');
  console.log(id);

  // filter rooms base id
  const room = rooms.filter((room) => {
    return room.id ==id;
  })
  const {name,description, facilities,imageLg, price} = room[0];
  //console.log(room);
  //console.log(room[0].name);
  //console.log(room[0].description);
  return <section >

        <div className='bg-room bg-cover bg-center h-[560px]
        relative flex justify-center items-center'>
          {/* overlay effect sombre */}
          <div className='absolute h-full w-full bg-black/70'/>
          {/* title */}
          <div className='text-6xl text-white z-20 font-primary text-center'>
            {name} Details
          </div>
        </div>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row h-full py-24'>
              {/* left */}
              <div className='w-full h-full px-6 lg:w-[60%]  '>
                <h2 className='h2'>{name}</h2>
                <p className='mb-8'>{description}</p>
                <img className='mb-8' src={imageLg} alt=""/>
                {/* facilities */}
                <div>
                  <h3 className='h3 mb-3'>Room Facilities</h3>
                  <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  <div  className='grid grid-cols-3 gap-6 mb-12' >
                    {facilities.map((item, index)=> {
                      const  {name, icon } = item;
                       return <div className='flex items-center gap-x-3 flex-1' key={index}>
                                  <div className='text-3xl text-accent'>{icon}</div>
                                  <div className='text-base text-accent'>{name}</div>
                        </div>
                    })}
                  </div>
                </div>
              </div>
              {/* right */}
              <div className='w-full h-full lg:w-[40%]  '>
                <div className='py-8 px-6 bg-accent/20 mb-12'>
                  <div className='flex flex-col space-y-4 mb-4'>
                    <h3>Your reservation</h3>
                    <div className='h-[60px]'><CheckIn/></div>
                    <div  className='h-[60px]'><CheckOut/></div>
                    <div  className='h-[60px]'><AdultsDropdown/></div>
                    <div  className='h-[60px]'><KidsDropdown/></div>
                    <button className=' py-4 w-full h-12  btn btn-lg text-lg btn-primary '>
                      book now for ${price}
                    </button>
                  </div>


                </div>
                {/* rules */}
                <div>
                   <h3 className='h3'> Hotel Rules</h3>;
                   <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                   <ul className='flex flex-col gap-y-4'>
                     <li className='flex items-center gap-x-4'>
                       <FaCheck className='text-accent'/>
                       Check-in: 3:00 PM - 9:00 PM
                     </li>
                     <li className='flex items-center gap-x-4'>
                       <FaCheck className='text-accent'/>
                       Check-out: 10:00 PM
                     </li>
                     <li className='flex items-center gap-x-4'>
                       <FaCheck className='text-accent'/>
                       No Pets
                     </li>
                     <li className='flex items-center gap-x-4'>
                       <FaCheck className='text-accent'/>
                      No smoking
                     </li>
                   </ul>
                </div>
               </div>

            </div>
        </div>
  </section>;
};

export default RoomDetails;
