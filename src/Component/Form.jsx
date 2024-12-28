
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeResetForm, changeTodoBackground, changeTodoDescription, changeTodoTitle, changeTodoWorkDay } from '../SliceComponent/FormSlice';
import { addTodoList } from '../SliceComponent/TodoSlice';


function Form() {
  const [first, setFirst] = useState({
    placeWarning : '',
    borderRed : {border:'none'}
  });

  const dispatch = useDispatch();
  const Elemans = useSelector((state)=>{
    const {todoTitle , todoDescription , todoBackground , todoID , todoWorkDay} = state.form;
    return {
      todoTitle ,
      todoDescription  ,
      todoBackground  ,
      todoID ,
      todoWorkDay,
    }
  });
  

  const handleClick = (event) =>{
    event.preventDefault();
    if(Elemans.todoTitle&&Elemans.todoDescription !== '')  {
    setFirst({placeWarning:'' , borderRed :{border:'none'}});
    dispatch(addTodoList({
      todoTitle : Elemans.todoTitle,
      todoDescription : Elemans.todoDescription,
      todoBackground : Elemans.todoBackground,
      todoWorkDay : Elemans.todoWorkDay,
    }))}else{
      setFirst({placeWarning:'Boş Geçilemez...' , borderRed :{border:'2px solid red'}})
    }
    dispatch(changeResetForm());
  }
  
  
  
  return (
    <div>
      <form style={{width:'100%'  ,marginTop:'5px'}}>
          <div style={{width:'100%',textAlign:'center',background:'white'}}>
            
            <div style={{display:'flex',flexDirection:'column',padding:'30px',width:'500px',marginLeft:'29%',background:'darkgoldenrod',borderRadius:'10px'}}>
              <div style={{display:'flex', padding:'10px',flexDirection:'column',textAlign:'center'}} ><p style={{fontSize:'18px', color:'white'}}>Todo Konusu</p>

              <input placeholder={first.placeWarning} style={{padding:'5px',border:first.borderRed.border,background:'rgb(11, 11, 90)',color:'white',borderRadius:'10px'}} type="text" onChange={(event)=>dispatch(changeTodoTitle(event.target.value))} value={Elemans.todoTitle} /></div>
              <div style={{display:'flex', padding:'10px',flexDirection:'column',textAlign:'center'}}><p style={{fontSize:'18px', color:'white'}}>Todo Detay</p>

              

              <textarea placeholder={first.placeWarning} style={{padding:'5px',border:first.borderRed.border,background:'rgb(11, 11, 90)',color:'white',borderRadius:'10px'}} type="text" onChange={(event)=>dispatch(changeTodoDescription(event.target.value))} value={Elemans.todoDescription} rows={3}/></div>

              <div style={{display:'flex', padding:'10px',flexDirection:'column',textAlign:'center'}} ><p style={{fontSize:'18px', color:'white'}}>
                Todo Hedef Günü</p>

              <input placeholder={first.placeWarning} style={{padding:'5px',border:first.borderRed.border,background:'rgb(11, 11, 90)',color:'white',borderRadius:'10px'}} type="number" onChange={(event)=>dispatch(changeTodoWorkDay(Number(event.target.value)))} value={Elemans.todoWorkDay} /></div>

              <div style={{display:'flex', padding:'10px',flexDirection:'column',textAlign:'center'}} ><p style={{fontSize:'18px', color:'white'}}>Todo Arkaplan</p>

              <select style={{padding:'5px',border:'none',background:'rgb(11, 11, 90)',color:'white',borderRadius:'10px'}} 
              onChange={(event)=>dispatch(changeTodoBackground(event.target.value))} value={Elemans.todoBackground}>
                
                <option value="#89A785">Gri</option>
                <option value="#9A82B8">Lavanta</option>
                <option value="#678CB1">Mavi</option>
                <option value="#FFAB6B">Turuncu</option>
                </select>
                </div>
                <div style={{marginTop:'10px'}}><button onClick={handleClick} style={{background:'rgb(11, 11, 90)', color:'white', padding:'5px' , border:'1px solid white', borderRadius:'5px',cursor:'pointer'}}><p style={{padding:'10px' , background:'darkgoldenrod',color:'rgb(11, 11, 90)',borderRadius:'10px'}}>Ekleme İşlemi</p></button></div>
            </div>
            
          </div>
      </form>
    </div>
  )
}

export default Form