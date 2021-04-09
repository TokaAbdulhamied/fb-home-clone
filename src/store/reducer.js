export const intitialState = {
  user:null
} 
// dispatch 
export const actionTypes = {
  ADD_USER : "ADD_USER" 
  
}

const reducer = (state, action) =>{

  switch (action.type){
    case actionTypes.ADD_USER: 
    return {
      ...state, 
      user:action.user // action.user is the payload or the dispatch value in redux 
    }
    default:
      return state 
  }
}

export default reducer