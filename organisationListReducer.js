const initialState=[]



export default (state=initialState, action) => {
    switch (action.type) {
     case 'ORGANISATION_LIST':
      return {
       organisationListData: action.payload
      }
    
     default:
      return state
    }

   }
