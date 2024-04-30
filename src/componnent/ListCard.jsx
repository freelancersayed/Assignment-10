import React from 'react';
import '../index.css'
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { update } from 'firebase/database';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const ListCard = ({list}) => {
    const {_id, userEmail, photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description} = list;
    
    const handleDelete = _id =>{

      console.log(_id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/addspot/${_id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
          })
        }
      });
    }
    
    
    return (
        <div className='max-w-[1280px] mx-auto listcard' data-aos="fade-left">
        <div className=' bgblack mt-5  gap-2   flex  shadow-lg shadow-gray-800 listcard'>
      <div className='flex  w-[635px] border-r border-orange-400  h-[410px] '><img className=' w-full' src={photo} alt="" /></div>


<table className="table flex-1 h-[300px] flex ">
 {/* head */}
 <thead>
   <tr className='text- text-orange-400 font-bold'>
     <td>SPOT NAME</td>
    <Fade> <td className='text-[14px]'> {spotName}</td></Fade>
   </tr>
 </thead>
 <tbody>
   {/* row 1 */}
   <tr>
     <td>COUNTRY NAME</td>
     <td> {countryName}</td>
   </tr>
   {/* row 2 */}
   <tr>
     <td>LOCATION</td>
     <td> {location}</td>
   </tr>
   {/* row 3 */}
   <tr>
     <td>SEASONALITY</td>
     <td>{seasonality}</td>
   </tr>
 </tbody>
 <tbody>
 <tr>
     <td>COST</td>
     <td>{cost}</td>
   </tr>
   <tr>
     <td>DATE</td>
     <td>{time}</td>
   </tr>
   <tr>
     <td>PER YEAR</td>
     <td>{perYear}</td>
   </tr>
   <tr>
     <td>DESCRIPTION</td>
     <td>{description}</td>
   </tr>
   <tr>
     <td>CREATED BY</td>
     <td>{userName}</td>
   </tr>
 </tbody>



</table>
</div>
<div className=' p-2  delete bgblack w-full absolute max-w-[1280px] '>
  <div className='flex w-full justify-end  gap-7 -translate-y-10'>
  <Link to={`/update/${_id}`} className='text-xl text-blue-500 '><FaEdit /></Link>
  <Link onClick={()=> handleDelete(_id)} className='text-2xl text-red-600 '><MdDeleteForever className=' ' /></Link>

  </div>
</div>
      
</div>
    );
};

export default ListCard;