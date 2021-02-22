export const boardReducer = (state = {board: []}, action)  => {

    switch(action.type){
        case 'FETCH_BOARDS':
            return {boards: action.payload}


        default: 
         return state
    } 
}
