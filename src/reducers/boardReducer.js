export const boardReducer = (state = {boards: []}, action)  => { 

    switch(action.type){
        case 'FETCH_BOARDS':
            return {boards: action.payload}

        case 'ADD_BOARD': 
            return{...state, boards: [...state.boards, action.payload]}


        default: 
         return state
    } 
}
