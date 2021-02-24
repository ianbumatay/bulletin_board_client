
export const  fetchBoards = () => {
    return (dispatch) => {
       fetch( 'http://localhost:3000/api/v1/boards' ) 
       .then(res => res.json())
       .then( boards =>  dispatch({type: "FETCH_BOARDS", payload: boards}))
    }
}