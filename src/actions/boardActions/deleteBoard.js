export const deleteBoard = (boardId) => { 
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }
        fetch(`http://localhost:3000/api/v1/boards/${boardId}`, options)
        .then(res => res.json())
        .then(board => dispatch({type: "DELETE_BOARD", payload: boardId}))
    }

}






// export default function deleteList(listId){
//     return (dispatch) => {
//         const options = {
//             method: "DELETE"
//         }

//         fetch(`http://localhost:3000/lists/${listId}`, options)
//         .then(res => res.json())
//         .then(message => {
//             dispatch({type: "DELETE_LIST", payload: listId})
//         })
//     }
// } 