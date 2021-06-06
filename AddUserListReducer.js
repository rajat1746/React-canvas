const initialState=[]



export default (state=initialState, action) => {
    switch (action.type) {
     case 'ADDUSER_LIST':
      return {
       AdduserListData: action.payload
      }
    
     default:
      return state
    }

   }


