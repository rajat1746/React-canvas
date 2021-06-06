
export default (state = {}, action) => {
    switch (action.type) {
     case 'ADDEXIST_USER':
      return {
        AddAlreadyExistUser: action.payload
      }
     default:
      return state
    }
   }