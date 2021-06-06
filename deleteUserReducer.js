const initialState='';



export default (state=initialState, action) => {
    switch (action.type) {
     case 'DELETE_USER':
      return {
        deleteMessage: action.payload
      }
    
     default:
      return state
    }

   }