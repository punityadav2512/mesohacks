import { CREATECARDS, DELETECARD, FETCHCARDS, UPDATECARD } from "../constants/actionTypes"

import * as api from '../api/axios.js'

export const  createCard = (formValues)=>async(dispatch)=>{
    try {

        const {data}= await api.createCard(formValues)

        dispatch({type:CREATECARDS , payload: data })
        
    } catch (error) {

        console.log(error)
        
    }
}

export const  fetchCard = (id , deckId)=>async(dispatch)=>{
    try {

        const {data}= await api.fetchCard(id , deckId)
        dispatch({type: FETCHCARDS , payload:data })
        
    } catch (error) {
        console.log(error)
    }
}


export const  updateCard = (id ,deckId, formValues)=>async(dispatch)=>{
    try {

        const {data}= await  api.updateCard(id , deckId , formValues)
        
        dispatch({type:UPDATECARD , payload:data})


    } catch (error) {
        console.log(error)
    }
}


export const  deleteCard= (deckId , id)=>async(dispatch)=>{
    try {

        await  api.deleteCard(deckId , id)

        dispatch({type:DELETECARD , payload: id  })
        
    } catch (error) {

        console.log(error)
        
    }
}