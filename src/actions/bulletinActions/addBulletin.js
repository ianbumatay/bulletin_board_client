
export const  addBulletin = (bulletin, boardId) => {
    //debugger
    return(dispatch) => {
        
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify(bulletin)
        }
        fetch(`http://localhost:3000/api/v1/boards/${boardId}/bulletins`, options) 
        .then(res => res.json())
        .then(board => dispatch({type: "ADD_BULLETIN", payload: board}))    
    }
} 