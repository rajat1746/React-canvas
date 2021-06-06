const initialState=[]



export default (state=initialState, action) => {
    switch (action.type) {
     case 'USER_ROLE':
      return {
       userRolesData: action.payload
      }
    
     default:
      return state
    }

   }