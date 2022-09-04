import { AUTH } from "../constants/actionTypes"
import * as api from "../api/axios.js"

export const signin = (formValue, navigate) => async (dispatch) => {
    console.log(formValue)
    try {
        const {data} = await api.signin(formValue) 
        console.log(data)
        
      
        dispatch({ type: AUTH, data })
        
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formValue, navigate) => async (dispatch) => {
    console.log(formValue)
    try {
        const {data} = await api.signup(formValue)
        // console.log(data)
        dispatch({ type: AUTH, data })
        navigate('/');

    } catch (error) {
        console.log(error)
    }
}