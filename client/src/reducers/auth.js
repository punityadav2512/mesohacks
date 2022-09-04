import * as actionType from "../constants/actionTypes";

const authReducers = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            console.log(action)
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            console.log(action)
            return { ...state, authData: action.data.user, loading: false, error: null };
            

           

        case actionType.LOGOUT:
            localStorage.clear();
            return { ...state, authData: null, loading: false, error: null };

        default:
            return state;
    }
};

export default authReducers;