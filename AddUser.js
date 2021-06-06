import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import '../css/AddUser.css'
import { createUser, getAddUserList, getAlreadyExistUser, getAlreadyExistUserAD } from '../actions/actions'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SelectBoxCustom from '../common-component/SelectBox/SelectBox'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Placeimage from '../assets/icon.png'
import AddUserListReducer from '../reducers/AddUserListReducer';

import ConfigData from '../config.json'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  small: {
    width: theme.spacing(1.35),
    height: theme.spacing(1.35),

    display: 'block',


    float: 'left',

  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


function AddUser(props) {
  const dispatch = useDispatch()
  const roles = ['Operator', 'Supervisor', 'SuperUser', 'SystemAdmin']
  const usersList = []
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState('')
  const [isExistingUser, setIsExistingUser] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [passwordValidated, setPasswordValidated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [toggleEyeIcon, setToggleEyeIcon] = useState(true)
  const [users, setUsers] = useState([])
  const [searchValue, setSearchBoxValue] = useState()
  const [tokenValue, setTokenValue] = useState()
  const [name, setName] = useState('')
  const [inputText, setinputText] = useState('')
  const [userNames, setuserName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [isWorkGroup, setisWorkGroup] = useState(true)
  const [employeeId, setemployeeId] = useState('')
  const [firstName,setFirstName] = useState('')
  var tokenData = "";
  var searchValues = "";

 

  // const addNewUser = (e) => {
  //   const token = localStorage.getItem('apiToken')
    

  useEffect(() => {
    if (ConfigData.RTLS_Installation_Mode === "WORKGROUP") {
      setisWorkGroup(true);
    }
    else {
      setisWorkGroup(false);
    }
  }, [])

  const { AdduserListData } = useSelector(
    state => state.AddUserListReducer
  )

  const { AddAlreadyExistUser } = useSelector(
    state => state.AddAlreadyExistUserReducer
  )

  const { AddAlreadyExistUserAD } = useSelector(
    state => state.AddAlreadyExistUserADReducer
  )

  const addNewUser = (e) => {
    if (isExistingUser) {
      if (isWorkGroup) {
        let temp = {
          token: tokenValue,
          Email: inputText,
          FirstName: name,
          UserName: name,
          Role: userRole,
          IsWorkGroup: true
        }
        dispatch(getAlreadyExistUser(temp))
        if(e === 'addUserOnce') {
          props.closeAddUserModal()
        }
        console.log(temp)
        
      }
      else {
        let temp = {
          token: tokenValue,
          Email: emailAddress,
          FirstName: firstName,
          UserName: name,
          Role: userRole,
          IsWorkGroup: false,
          EmployeeId: employeeId
        }
        dispatch(getAlreadyExistUser(temp))
        if(e === 'addUserOnce') {
          props.closeAddUserModal()
        }
        console.log(temp)
      }
    }
    else {
      const token = localStorage.getItem('apiToken')
      let tempObject ={
        'Password':'',
        'personSummaryMessage': {
          'isWorkGroup':true  
        }
      }
      tempObject.personSummaryMessage['FirstName']=fullName
      tempObject.personSummaryMessage['Email']=userName
      tempObject['Password']=password
      tempObject.personSummaryMessage['Role']=userRole
      console.log(tempObject)
      dispatch(createUser(token,tempObject))
      if(e === 'addUserOnce') {
        props.closeAddUserModal()
      }
    }
  }


  useEffect(() => {
    usersListDrop()
  }, [])

  const clearSelection = () => {
    if (document.selection && document.selection.empty) {
      document.selection.empty();
    } else if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
    }
  }

  useEffect(() => {
    if (fullName && userName, password, userRole) {
      setPasswordValidated(true)
    } else {
      setPasswordValidated(false)
    }

  }, [fullName, userName, password, userRole])
  useEffect(() => {
    if ( userRole,inputText) {
      setPasswordValidated(true)
    } else {
      setPasswordValidated(false)
    }

  }, [userRole,inputText])

  useEffect(() => {
    if (AdduserListData && AdduserListData["users"]) {
      for (let item in AdduserListData["users"]) {
        let obj = {}
        obj.name = AdduserListData["users"][item].fullName
        obj.userName = AdduserListData["users"][item].userName
        usersList.push(obj)
      }
      setUsers(usersList)
    }
  }, [AdduserListData])


  useEffect(() => {
    if (AddAlreadyExistUserAD && AddAlreadyExistUserAD["users"]) {
      for (let item in AddAlreadyExistUserAD["users"]) {
        let obj = {}
        obj.name = AddAlreadyExistUserAD["users"][item].userName
        obj.firstName = AddAlreadyExistUserAD["users"][item].firstName
        obj.EmployeeId = AddAlreadyExistUserAD["users"][item].employeeId
        obj.emailAddress = AddAlreadyExistUserAD["users"][item].emailAddress
        usersList.push(obj)

      }
      setUsers(usersList)
    }
  }, [AddAlreadyExistUserAD])

  const clearAll = () => {
    setFullName('')
    setUserName('')
    setPassword('')
    setUserRole('')
    setinputText('')
  }

  const addNextUser = () => {
    addNewUser()
    setTimeout(() => {
      clearAll()
    }, 500)

  }

  const onSearchExistingUser = (e) => {
    let value = e.target.value
    tokenData = localStorage.getItem('apiToken')
    setTokenValue(tokenData)

    if (value.length > 2) {
      searchValues = value
      setSearchBoxValue(value)
      setSearchModalOpen(true)
      usersListDrop()
    } 
    else {
      setSearchModalOpen(false)
    }
  }

  function usersListDrop() {
    let temp = {
      token: tokenValue,
      searchValues: searchValues
    }

    console.log(temp)
    if (isWorkGroup) {
      dispatch(getAddUserList(temp))
    }
    else {
      dispatch(getAlreadyExistUserAD(temp))
    }
  }
  function HandleClickonOption(value) {
    console.log(value);
    setSearchModalOpen(false);
    setinputText(value.name);
    setFirstName(value.firstName);
    setEmailAddress(value.emailAddress);
    setName(value.name);
    if (!isWorkGroup) {
      setemployeeId(value.EmployeeId);
    }
  }
  const classes = useStyles();


  const passwordValidation = (value) => {
    const matches = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
    setPasswordValidated(matches)
  }

  const onEyeClick = () => {
    setShowPassword(!showPassword)
    setToggleEyeIcon(!toggleEyeIcon)
  }

  const getSelectedValue = (value) => {
    setUserRole(value)
  }
  const getSelectedPeople = (value) => {
    setuserName(value)
  }

  return (
   
    
    <div className='card-view adduser-container'>
      <div className='adduser-closebtn' onClick={() => { props.closeAddUserModal() }} >x</div>
      <div>
        <p style={{ width: props.isEdit ? '100%' : '38%', display: 'inline-block' }} className='adduser-header-text'>{props.isEdit ? 'MODIFY DETAILS' : 'ADD USER'}</p>
        {props.isEdit ? '' : isExistingUser ? <span className='create-new-txt' onClick={() => { clearAll(); clearSelection(); setIsExistingUser(false); }} >Create New</span> :
          <span className='create-new-txt' onClick={() => { clearAll(); clearSelection(); setTimeout(() => setIsExistingUser(true), 500); }}>Select Instead</span>}
      </div>
      { !isExistingUser ?
        <div>
          <label data-testid='label-fullname-test'>Full Name</label><span style={{ color: 'red' }}></span>
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} className='input-box input-margin-bottom' type='text' />
          {props.isEdit ? '' : <><label >Username</label><span style={{ color: 'red' }}></span></>}
          {props.isEdit ? '' :
            <input value={userName} onChange={(e) => setUserName(e.target.value)} className='input-box input-margin-bottom' type='text' />}
          <label >{props.isEdit ? 'Reset Password' : 'Password'}</label><span style={{ color: 'red' }}></span>
          <input value={password} onChange={(e) => { setPassword(e.target.value); passwordValidation(e.target.value) }} className='input-box input-margin-bottom' type={showPassword ? 'text' : 'Password'} />
          {toggleEyeIcon ? <VisibilityIcon onClick={onEyeClick} className='rtls-eye-icon' /> :
            <VisibilityOffIcon onClick={onEyeClick} className='rtls-eye-icon' />}

        </div> :
        <div>
          <label data-testid='select-user-txt-test' >Select User</label><span style={{ color: 'red' }}></span>
          <input value={inputText} onChange={(e) => { onSearchExistingUser(e); setinputText(e.target.value) }} placeholder='Start Typing...' className='input-box input-margin-bottom' type='text' />
          {searchModalOpen ?

            <div className='searched-userlist-modal' style={{ width: "200px" }}>
              {users.map(filteredName => (
                <div className='avatarDiv'>
                  <Avatar alt="Sample" src={Placeimage} className={classes.small} />
                  <p style={{ display: 'block', textAlign: 'left' }} className='avatarText' onClick={() => HandleClickonOption(filteredName)}>{filteredName.name}</p>
                </div>
              ))}
            </div> : ''}
        </div>}

      <label data-testid='select-role-test'>Select Role</label><span style={{color:'red'}}></span>
      <SelectBoxCustom  roles={props.roles} getValue={getSelectedValue} class={'add-user-selectbox'} class2={'selectboxoptions-containerAdd'} userRole={userRole} />
     

      <div style={{textAlign:'end', marginTop:'23px'}}>
        <Button disabled={passwordValidated ? false :true} onClick={() => {addNewUser('addUserOnce'); console.log('clicked')}} className='btn-color' style={{marginRight:'10px'}} variant="contained" color="primary">
            Add
        </Button>
        <Button disabled={passwordValidated ? false : true} onClick={() => { addNextUser() }} variant="contained" color="primary" className='btn-color'>
          Add Next
        </Button>
      </div>
    </div>
  );
}

export default AddUser;
