
export default (state = {}, action) => {
    switch (action.type) {
     case 'ADDEXIST_USERAD':
      return {
        AddAlreadyExistUserAD: action.payload
      }
     default:
      return state
    }
   }