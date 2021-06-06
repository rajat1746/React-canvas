const initialState=[]



export default (state=initialState, action) => {
    switch (action.type) {
     case 'USER_LIST':
      return {
       userListData: action.payload
      }
    
     default:
      return state
    }

   }


