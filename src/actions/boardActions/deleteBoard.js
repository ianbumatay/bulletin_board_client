


export const deleteBoard = (boardId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/boards/${boardId}`, { 
            method: 'DELETE'
        }) 
        //.then(res => res.json())
        .then (board => dispatch({type: 'DELETE_BOARD', payload: boardId}))
    }
}