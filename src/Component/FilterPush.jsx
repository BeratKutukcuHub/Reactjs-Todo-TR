

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTodoFilter, todoDeleteOrPush, todoNewProperty } from '../SliceComponent/TodoSlice';


function FilterPush() {
  const actionValues = [
    {title:'Todos' , description : 'Silinenleri Geri Getir',background : 'rgb(81, 20, 20)'},
    {title :'Silinen Todos', description :'Onayla',background : 'rgb(31, 59, 11)'}
  ]
  const {TodoController , TodoProperty} = useSelector((state)=>{
    return state.todo; 
  });
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(todoNewProperty(actionValues))
    dispatch(todoDeleteOrPush(TodoController === true ? false : true));
    
  };
 
  return (
    <div>
<div style={{width:'100%', display:'flex' , justifyContent:'space-around' ,background:'darkgoldenrod',height:'70px',alignItems:'center',marginTop:'10px'}}>
        <p style={{fontSize:'30px' , fontWeight:'1000', color:'white' , padding:'5px', background:'rgb(11, 11, 90)',borderRadius:'10px'}}>{TodoProperty.title}</p>
        <input type="text" style={{border:'none', padding:'10px',borderRadius:'10px',background:'rgb(11, 11, 90)' ,color:'white'}}placeholder='Filtrele'
        onChange={(event)=>dispatch(changeTodoFilter(event.target.value))}/>


        <button style={{padding:'12px',border:'none',color:'white',background:TodoProperty.background ,borderRadius:'10px',
        cursor:'pointer'}}
        onClick={handleClick}>{TodoProperty.description}</button>
    </div>
    <hr />

      <div>
        
      </div>
    </div>
    
  )
}

export default FilterPush