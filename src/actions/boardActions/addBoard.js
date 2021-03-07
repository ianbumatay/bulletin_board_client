export const  addBoard = (data) => {
    
    return(dispatch) => {
        
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3000/api/v1/boards', options) 
        .then(res => res.json())
        .then(board => dispatch({type: "ADD_BOARD", payload: board}))    
    }
} 


