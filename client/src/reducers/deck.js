import * as actionTypes from '../constants/actionTypes'

import { FETCHDECKS , CREATEDECK , UPDATEDECK , DELETEDECK  } from '../constants/actionTypes';


const deckReducer = (decks=[] , action )=>{

    switch(action.type){

        case FETCHDECKS :
            return action.payload ;


            case CREATEDECK :    
            return  [...decks , action.payload]

           
            case UPDATEDECK : 
            return decks.map((deck)=>deck._id===action.payload._id ? action.payload : deck)



        case DELETEDECK :
            return  decks.filter((deck) =>deck._id!==action.payload);


            default :
            return decks


    }


};

export default deckReducer