export const bulletinReducer = (state = {bulletins: []}, action)  => { 

    switch(action.type){
        // case 'FETCH_':
        //     return {bulletins: action.payload}

        case 'ADD_BULLETIN': 
            return{...state, boards: [...state.boards, action.payload]}


        default: 
         return state
    } 
}