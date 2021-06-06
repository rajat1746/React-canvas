const initialState='';



export default (state=initialState, action) => {
    switch (action.type) {
     case 'IS_DOMAIN_USER':
      return {
        IsDomainUser: action.payload
      }
    
     default:
      return state
    }

   }