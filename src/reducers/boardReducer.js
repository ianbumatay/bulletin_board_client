export const boardReducer = (state = {boards: []}, action)  => { 
    //debugger

    switch(action.type){
        case 'FETCH_BOARDS':
            return {boards: action.payload}

        case 'ADD_BOARD': 
            return {...state, boards: [...state.boards, action.payload]} 

        case 'DELETE_BOARD': 
             const newBoard = state.boards.filter(board => board.id !== action.payload)

             return {boards: newBoard}

        case 'ADD_BULLETIN': 

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


