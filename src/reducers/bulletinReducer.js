export const bulletinReducer = (state = {bulletins: []}, action)  => { 

    switch(action.type){
        // case 'FETCH_':
        //     return {bulletins: action.payload}

        case 'ADD_BULLETIN': 
            return{...state, bulletins: [...state.bulletins, action.payload]}


        default: 
         return state
    } 
}