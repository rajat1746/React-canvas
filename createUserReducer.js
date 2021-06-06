
export default (state = {}, action) => {
    switch (action.type) {
     case 'CREATE_USER':
      return {
       createdUser: action.payload
      }
     default:
      return state
    }
   }