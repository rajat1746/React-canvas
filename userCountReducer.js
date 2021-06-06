const initialState='';



export default (state=initialState, action) => {
    switch (action.type) {
     case 'USER_COUNT':
      return {
       userCountData: action.payload
      }
    
     default:
      return state
    }

   }
