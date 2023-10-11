import React from 'react'
import Plus from "../../assets/plus.svg";
import "../../styles/Dashboard/AddProfile.css"
const AddProfile = () => {
  return (
    <div className='prof-main'>
      <div className='inner-prof' onClick={()=>console.log("Clicked")}>
        <img className='prof-img' src={Plus} alt='' />
      </div>
      <h2 className='prof-title'>Add Profile</h2>
    </div>
  )
}

export default AddProfile
