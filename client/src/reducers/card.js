import * as actionTypes from '../constants/actionTypes'
import { FETCHCARDS , CREATECARDS , UPDATECARD , DELETECARD } from '../constants/actionTypes';

const cardReducer = (cards=[] , action )=>{

    switch(action.type){

        case FETCHCARDS :
            return action.payload ;

            case CREATECARDS :
            return  [...cards , action.payload]

            case UPDATECARD:
            return cards.map((card)=>card._id===action.payload._id ? action.payload : card)



        case DELETECARD :
            return  cards.filter((card) =>card._id!==action.payload);


            default :
            return cards


    }


};

export default cardReducer