

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeRealDelete, getDeleteTodoForPush } from '../SliceComponent/TodoSlice';




function DeleteList({...item}) {
  
  const {todoTitle , todoDescription , todoBackground , todoID , todoWorkDay} = item;
  const dispatch = useDispatch();
  const {TodoController , TodoDelete} = useSelector((state)=>state.todo)
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getDeleteTodoForPush(item));
  }
  const handleDelClick = (event) =>{
    event.preventDefault();
    dispatch(changeRealDelete(item));
  }
  return (
   
     <div>
{
  TodoDelete.lenght === 0 ? <h1>Silinecek Öge Bulunmamaktadir</h1> : <div  style={{background:todoBackground,border:'1px solid black',display:TodoController==true ? 'block':'none' , width:'300px', padding:'15px',borderRadius:'20px',margin:'10px',color:'rgb(11, 11, 90)'}}>
        
  <p style={{padding:'7px', color:' wheat', background:'rgb(11, 11, 90)',borderRadius:'10px'}}>
      Todo Konunuz :   {todoTitle}</p>
  <p style={{padding:'7px', color:'wheat',background:'rgb(11, 11, 90)',marginTop:'10px',borderRadius:'10px'}}>Todo Detaylar : {todoDescription}</p>
  <p style={{padding:'7px', color:'wheat',background:'rgb(11, 11, 90)',marginTop:'10px',borderRadius:'10px'}}>Todo Hedef : {todoWorkDay}</p>
  <div style={{display:'flex',justifyContent:'space-evenly', marginTop:'10px'}}>
  <button style={{padding:'10px' , border:'none', background:'rgb(81, 20, 20)',color:'wheat' ,borderRadius:'10px' }}
      onClick={handleDelClick} >Yok Et</button>
      <button style={{padding:'10px' , border:'none', background:'rgb(31, 59, 11)',color:'wheat' ,borderRadius:'10px' }}
      onClick={handleClick} >Geri Yükle</button>
       
  </div>
</div> 
}
        

        
     </div>
        
  
  )
}

export default DeleteList