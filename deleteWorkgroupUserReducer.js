const initialState='';



export default (state=initialState, action) => {
    switch (action.type) {
     case 'IS_WORKGROUP_USER':
      return {
       checkWorkgroupUser: action.payload
      }
    
     default:
      return state
    }

   }
