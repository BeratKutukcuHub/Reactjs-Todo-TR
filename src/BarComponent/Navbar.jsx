
import React from 'react'

function Navbar() {
  return (
    <nav style={{background:'rgb(11, 11, 90)',height:'85px', alignItems:'center' ,display:'flex',justifyContent:'space-around',width:'100%'}}>
        <div >
            <div style={{fontSize:'30px',display:'flex',fontWeight:'800'}}>
            <p style={{padding:'5px', color:'white',background:'darkgoldenrod',borderRadius:'10px 0px 0px 10px'}}>Todo</p>
            <p style={{padding:'5px',color:'darkgoldenrod',background:'white',borderRadius:'0px 10px 10px 0px'}}>Liste</p></div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}> <label style={{fontSize:'22px',fontWeight:'700',padding:'10px',color:'darkgoldenrod'}}>Todo Kaydet ve Sonradan Güncelle</label></div>
    </nav>
  )
}

export default Navbar