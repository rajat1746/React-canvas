
export default (state = {}, action) => {
    switch (action.type) {
     case 'CREATE_ORGANISATION':
      return {
       createOrganisation: action.payload
      }
     default:
      return state
    }
   }