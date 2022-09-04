import { combineReducers } from "redux";
import deckReducer from "./deck.js";
import cardReducer from "./card.js";


import authReducers from "./auth.js";

export const reducers = combineReducers({authReducers, deckReducer , cardReducer})