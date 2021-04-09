import React, {useReducer, createContext} from 'react'
export const UserContext = createContext()

function Provider({reducer, children, intitialState}) {
  return (
    <UserContext.Provider value={useReducer(reducer, intitialState)}>
      {children}
    </UserContext.Provider>
  )
}

export default Provider
