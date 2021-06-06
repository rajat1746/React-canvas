const initialState=[]



export default (state=initialState, action) => {
    switch (action.type) {
     case 'USER_FILTER_COUNT':
      return {
       userFilterCount: action.payload.users.length
      }
    
     default:
      return state
    }

   }
