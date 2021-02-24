export const  addBulletin = (data) => {
    debugger
    return(dispatch) => {
        
        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3000/api/v1/boards/bulletins', options) 
        .then(res => res.json())
        .then(board => dispatch({type: "ADD_Bulletin", payload: board}))    
    }
} 