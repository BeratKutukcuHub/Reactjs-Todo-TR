
import { removeTodoList, updateTodoList } from '../SliceComponent/TodoSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function TodoListItem({item}) {
    const dispatch = useDispatch();
    const [values, setValues] = useState(0)
    const [first, setFirst] = useState(false)
    const [list, setList] = useState({
        todoTitle : '',
        todoDescription : '',
        todoWorkDay : '',
    })
    
    const handleUpdate = (event , items) => {
        event.preventDefault();
        setFirst(false);
        const news = {todoTitle : list.todoTitle , todoDescription : list.todoDescription , todoBackground : items.todoBackground , todoID: items.todoID , todoWorkDay : list.todoWorkDay} 
        dispatch(updateTodoList(news));
    }
    const handleChange = (event) => {
        setList({
        ...list ,[event.target.id] : event.target.value
       }) 
    }
  return (
    <div >
        {
            first!==true?  <div key={item.todoID} style={{background:item.todoBackground,border:'1px solid black' , width:'300px', padding:'15px',borderRadius:'20px',margin:'10px',color:'rgb(11, 11, 90)'}}>
            <p style={{padding:'7px', color:' wheat', background:'rgb(11, 11, 90)',borderRadius:'10px'}}>
                Todo Konunuz :   {item.todoTitle}</p>
            <p style={{padding:'7px', color:'wheat',background:'rgb(11, 11, 90)',marginTop:'10px',borderRadius:'10px'}}>Todo Detaylar : {item.todoDescription}</p>
            <p style={{padding:'7px', color:' wheat', background:'rgb(11, 11, 90)',borderRadius:'10px',marginTop:'10px'}}>
                Todo Hedefiniz :   {item.todoWorkDay}</p>
            <div style={{display:'flex',justifyContent:'space-evenly', marginTop:'10px'}}>
                <button style={{padding:'10px' ,border:'none', background:' rgb(81, 20, 20)', color:'wheat',borderRadius:'10px'}} 
                onClick={()=>dispatch(removeTodoList(item.todoID))}>Sil</button>
                <button style={{padding:'10px' , border:'none', background:'rgb(31, 59, 11)',color:'wheat' ,borderRadius:'10px' }}
                onClick={()=>setFirst(true)}>Güncelle</button>
            </div>
        </div> :
<div key={item.todoID} style={{background:item.todoBackground,border:'1px solid black' , width:'300px', padding:'15px',borderRadius:'20px',margin:'10px',color:'rgb(11, 11, 90)'}}>
<input style={{fontSize:'16px',padding:'8px', color:' wheat', background:'rgb(11, 11, 90)',borderRadius:'10px',width:'100%',border:'none'}} placeholder={item.todoTitle}  value={list.todoTitle} id='todoTitle' onChange={handleChange}/>
    
<input style={{fontSize:'16px',padding:'8px', color:' wheat', background:'rgb(11, 11, 90)',borderRadius:'10px',width:'100%',border:'none',marginTop:'10px'}} placeholder={item.todoDescription} value={list.todoDescription} id='todoDescription' onChange={handleChange}/>

<input type='number' style={{fontSize:'16px',padding:'8px', color:' wheat', background:'rgb(11, 11, 90)',borderRadius:'10px',width:'100%',border:'none',marginTop:'10px'}} placeholder={item.todoWorkDay} value={list.todoWorkDay} id='todoWorkDay' onChange={handleChange}/>
<div style={{display:'flex',justifyContent:'space-evenly', marginTop:'10px'}}>
    
    <button style={{padding:'10px' , border:'none', background:'rgb(31, 59, 11)',color:'wheat' ,borderRadius:'10px' }}
    onClick={(event)=>handleUpdate(event,{todoBackground: item.todoBackground,todoID: item.todoID})}>Tamamla</button>
</div>
</div>
        }
    </div>
  )
}

export default TodoListItem