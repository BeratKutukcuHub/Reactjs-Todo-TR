
import React, { createContext, useContext, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoListItem from './TodoListItem';
import DeleteList  from './DeleteList';
export const totalDays = createContext()
function TodoList() {
    
    const {TodoList , TodoController , TodoFilter} = useSelector((state)=>state.todo);
    const {TodoDelete} = useSelector((state)=>state.todo);
    
    const todoFilterListed = TodoList.filter((item)=>item.todoTitle.toUpperCase().includes(TodoFilter.toUpperCase()));
    const calculateTotalWorkDays = () => {
      let totalWorkDays = 0;
      for (let item of todoFilterListed) {
        totalWorkDays += item.todoWorkDay;
      }
      let day = 0;
      let mount = 0;
      let year = 0;
      totalWorkDays <=30 ? day = totalWorkDays : ''
      if(totalWorkDays >= 30){
        for (let i =0; i<=totalWorkDays; i++){
          day ++;
          if(day == 30){day = 0; mount+=1}
          if(mount == 12){mount = 0; year+=1}
      }
      }
      
      
       
    return `Yıl : ${year} Ay : ${mount}  Gün : ${day}`
    };
    const totalWorkDays = calculateTotalWorkDays();

    
    
    const Listed = () =>{
    if(TodoController===false){
      return (<div>
        <div style={{width:'100%' , background:'rgb(11, 11, 90)',marginTop:'-5px',padding:'5px',display:'flex',justifyContent:'space-between'}}>
        <h3 style={{color:'darkgoldenrod',display:'flex',marginLeft:'250px'}}>Hedef Kaç Gün  <p style={{color:'white',marginLeft:'10px'}}>{totalWorkDays}</p></h3>
      </div>
        <div style={{width:'100%' }}>
        <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
        {
          todoFilterListed.map((item)=>{
        return <TodoListItem item={item} key={item.todoID}/>
        })
        }
        </div> 
        </div> 
        </div>)
    }else return(<div>
      <div style={{width:'100%' }}>
      <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
      {
       TodoDelete.map((item)=>{ 
      return <DeleteList {...item} key={item.todoID} /> 
    })
      }
      </div> 
      </div>
      </div>) 
      }
  return (
    <div>
      
      {Listed()}
      
    </div>
    
  )
}

export default TodoList