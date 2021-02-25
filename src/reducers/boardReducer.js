export const boardReducer = (state = {boards: []}, action)  => { 
    //debugger

    switch(action.type){
        case 'FETCH_BOARDS':
            return {boards: action.payload}

        case 'ADD_BOARD': 
            return{...state, boards: [...state.boards, action.payload]} 

        case 'ADD_BULLETIN': 

        //return {}

            let boards = state.boards.map(board => {
                if(board.id === action.payload.id){
                    return action.payload
                } else {
                    return board
                }
            })

            return {...state, boards: boards}



        default: 
         return state
    } 
}
