export const boardReducer = (state = {boards: []}, action)  => { 

    switch(action.type){
        case 'FETCH_BOARDS':
            return {boards: action.payload}


        default: 
         return state
    } 
}
