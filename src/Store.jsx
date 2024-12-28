import {configureStore} from '@reduxjs/toolkit'
import {TodoSlices} from './SliceComponent/TodoSlice'
import { FormSlices } from './SliceComponent/FormSlice'


export const Store = configureStore({
   reducer : {
    form : FormSlices ,
    todo : TodoSlices ,
   }
})