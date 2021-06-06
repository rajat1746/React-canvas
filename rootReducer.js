import { combineReducers } from 'redux';
import createUserReducer from './createUserReducer'
import userListReducer from './userListReducer'
import rolesReducer from './rolesReducer'
import userCountReducer from './userCountReducer'
import checkDomainUserReducer from './checkDomainUserReducer'
import AddUserListReducer from './AddUserListReducer'
import AddAlreadyExistUserReducer from './AddAlreadyExistUserReducer'
import AddAlreadyExistUserADReducer from './AddAlreadyExistUserADReducer'

import userFilterCountReducer from './userFilterCountReducer'
import deleteUserReducer from './deleteUserReducer'
import organisationListReducer from './organisationListReducer'
import createOrganisationReducer from './CreateOrganisationReducer'

export default combineReducers({
 createUserReducer,
 userListReducer,
 rolesReducer,
 userCountReducer,
 checkDomainUserReducer,
 userFilterCountReducer,
 deleteUserReducer,
 AddUserListReducer,
 AddAlreadyExistUserReducer,
 AddAlreadyExistUserADReducer,
 userFilterCountReducer,
 organisationListReducer,
 createOrganisationReducer

});