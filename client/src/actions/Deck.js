import { CREATEDECK, DELETEDECK, FETCHDECKS, UPDATEDECK } from "../constants/actionTypes"; 

import * as api from '../api/axios.js'

export const deleteDeck = (id)=> async(dispatch)=>{

    try {

        await api.deleteDeck(id);

        dispatch({type:DELETEDECK , payload: id })
        
    } catch (error) {
        console.log(error)
    }
      

}


export const  createDeck = (formValues)=>async(dispatch)=>{
    try {

        console.log(formValues)
        const {data}= await  api.createDeck(formValues);
console.log(data)
        dispatch({type:CREATEDECK , payload:data })
        
    } catch (error) {
        console.log(error)
    }
}

export const  fetchDeck = ()=>async(dispatch)=>{
    try {

        const {data}= api.fetchDeck();
        dispatch({type: FETCHDECKS , payload:data })
        
    } catch (error) {
        console.log(error)
    }
}


export const  updateDeck = (id , formValues )=>async(dispatch)=>{
    try {

        const {data}= api.updateDeck(id , formValues)

        dispatch({type:UPDATEDECK , payload: data})
        
    } catch (error) {
        console.log(error)
    }
}


