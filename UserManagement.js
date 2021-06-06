  import {useState,useEffect, useRef} from 'react'
  import './UserManagement.css'
  import AddUser from '../../component/AddUser'
  import Button from '@material-ui/core/Button'
  import ListUsers from '../../component/ListUsers/ListUsers'
  import DeleteModal from '../../component/DeleteModal'
  import {useSelector,useDispatch,} from 'react-redux'

  import {gettingUserList,getUserRoles,getUserCount,getFilteredUserCount,getAddUserList,checkDomainUser} from '../../actions/actions'
  import FilterChip from '../../common-component/FilterChip/FilterChip'
  import SelectBoxCustom from '../../common-component/SelectBox/SelectBox'
  import Pagination from '../../component/Pagination/Pagination'
  import SearchIcon from '@material-ui/icons/Search';
  import Placeholder from '../../assets/Placeholder.svg'
  


import axios from 'axios';

let searchFlag=false;

  const roles = [{
    roleId:'',
    name:'User Role'
  }]

  
  let globalPageNumberForGoToPage ={
    pageNumber:''
  }


  
  function UserManagement() {
    const dispatch=useDispatch();
    const {userListData}=useSelector(
      state=>state.userListReducer || {}
      )
    

  
//      console.log(userListData);


 const {userRolesData}=useSelector(
  state=>state.rolesReducer || {}

 )


const {userCountData}=useSelector(
  state=>state.userCountReducer || []
)

const {userFilterCount}=useSelector(
  state=>state.userFilterCountReducer || {}
)

    const [showHideListUsers,setShowHideListUsers]=useState(true)
    const [showEditDelete,setShowEditDelete]=useState(false)
    const [showAddUserModal, setShowAddUserModal] = useState(false)
    const [showEditUserModal, setShowEditUserModal] = useState(false)
    const [showDeleteUserModal, setShowDeleteUserModal] = useState(false)
    const [btnClicked, setBtnClicked]=useState(true)
    const [btnActive, setBtnActive] = useState({btnEdit:false, btnDelete:false, btnAdd:false, btnAccess:false})
    const [pageNumber,setPageNumber]=useState(1)
    const [pageSize,setPageSize]=useState(8)
    const [orderBy,setOrderBy]=useState(1)
    const [orderByAsc,setOrderByAsc]=useState('firstName')
    const [searchBarValue, setSearchBarValue] =useState('')
    const [roleId,setRoleId]=useState('')
    const [deleteCountUser,setdeleteCountUser]=useState(0)
    const [domainUser,setDomainUser]=useState(false)

    const [token,setAuthToken]=useState('')
    const [userFilter,setUserFilter]=useState('')
    const [userCount,setUserCount]=useState('')
    const [sortRerender, setSortRerender] = useState(true)

    const [selectedIds, setSelectedIds] = useState([])
    const [selectedUserNames, setSelectedUserNames] = useState([])
    const [filterChip, setFilterChip] = useState('')
   
    

    const wrapperRef = useRef();

   
    

    //h
    const selectedUsers=(ids,usernames)=>{
      setSelectedIds(ids)
      setSelectedUserNames(usernames)
      console.log("selected ids",ids)
    }


    useEffect(()=>{
      setSortRerender(false)
      setTimeout(()=>{
        setSortRerender(true)
      },100)
    },[userListData])

    useEffect(()=>{
      axios.post('http://199.63.74.116:61453/api/auth',{
        
          "grantType": "authorization_code",
          "accessToken": "vRAEiMGp0jmrcxpv",
          "clientType": "APIAPP"
      
      }).then((res)=>{
        let accessToken=res.data.accessToken
        localStorage.setItem('apiToken',accessToken)
        setAuthToken(accessToken)
      })
      
    },[])


    useEffect(()=>{
      
       let temp={
         pageNumber,
         pageSize:8,
         roleId,
         token,
         orderBy,
         orderByAsc,
         searchBarValue
         
       }
      //  console.log(token,'efect')
       dispatch(gettingUserList(temp))
       
      
      },[token,pageNumber])

      useEffect(()=>{
        globalPageNumberForGoToPage.pageNumber=1
        
        let temp={
          pageNumber:1,
          pageSize:8,
          roleId,
          token,
          orderBy,
          orderByAsc,
          searchBarValue
          
        }
        setPageNumber(1)
        dispatch(gettingUserList(temp))
        dispatch(getFilteredUserCount(temp))

      },[roleId])

      //useEffect for search
    useEffect(()=>{
      globalPageNumberForGoToPage.pageNumber=1
     
      let temp={
        pageNumber:1,
        pageSize:8,
        searchBarValue,
        token,
        roleId,
      }
      if(searchBarValue.length>2 )
   {
     
      dispatch(gettingUserList(temp))
      dispatch(getFilteredUserCount(temp))
   } 
   
     },[searchBarValue])

      useEffect(()=>{
        let temp={
          pageNumber:1,
          pageSize:8,
          roleId,
          token,
          orderBy,
          orderByAsc,
          searchBarValue
          
        }
        dispatch(getUserCount(token))
       dispatch(getUserRoles(token))
       dispatch(checkDomainUser(token))
       console.log(token)

       
       dispatch(getFilteredUserCount(temp))
      },[token])

      useEffect(()=> {
        setSortRerender(false)
        let temp={
          pageNumber,
          pageSize:8,
          searchBarValue,
          roleId,
          token,
          orderBy,
          orderByAsc
          
        }
       //  console.log(token,'efect')
        dispatch(gettingUserList(temp))
        setTimeout(()=>{
          setSortRerender(true)
         },100)
      }, [orderBy, orderByAsc])
      //useEffect for roles
        
      useEffect(()=>{
        console.log(userRolesData,'roleData')
        for(let item in userRolesData){
          let obj={}
          obj.roleId=userRolesData[item].guid
          obj.name=userRolesData[item].name
          roles.push(obj)
          
        }
        
      },[userRolesData])


    

    // useEffect for count
    useEffect(()=>{
      
      setUserCount(userCountData)
      
    },[userCountData])


    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
              // alert("You clicked outside of me!");
              setShowAddUserModal(false)
              setShowEditUserModal(false)
              setBtnActive({btnEdit:false, btnDelete:false, btnAdd:false, btnAccess:false})
          }
      }
     
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
      
  }, [wrapperRef]);



    useEffect(()=>{
      setBtnActive(btnActive)
     },[btnActive, btnActive.btnEdit, btnActive.btnDelete,btnActive.btnAdd])

    

    const closeAddUserModal =() => {
      setShowAddUserModal(false)
      setShowEditUserModal(false)
      setBtnActive({btnEdit:false, btnDelete:false, btnAdd:false, btnAccess:false})
    }

    const modalDeleteHandler=()=>{
         setShowDeleteUserModal(true)
    }

    const closeCommonModal=()=>{
        setShowDeleteUserModal(false)
        setBtnActive({btnEdit:false, btnDelete:false, btnAdd:false, btnAccess:false})
    }

    const toggleHideShowButton=(value)=>{
      setShowEditDelete(value)
    }

    const deleteUserCount=(count)=>{
        setdeleteCountUser(count)
        // console.log(count,'Count')
    }


    

    // Pagination pagenumber methid
    const pageClickHandler=(value)=>{
      setPageNumber(value)
    }

    const onButtonClick = (type) => {
      // btnActive.forEach((element, key) => {
      //   if(key === type) {
      //     btnActive[key]=true
      //   }else {
      //     btnActive[key]=true
      //   }
      // });
      if(type != 'btnAdd') {
        setShowAddUserModal(false)
      }
      if(type != 'btnEdit') {
        setShowEditUserModal(false)
      }
      setBtnClicked(false)
      // console.log(btnActive.btnEdit)
      for(let key in btnActive) {
        if(key === type) {
              btnActive[key]=true
            }else {
              btnActive[key]=false
            }
      }
      
      
      setBtnActive(btnActive)
      setTimeout(()=> {
        setBtnClicked(true)
      },0)
    }


    const getSelectedValue =(value)=> {
    setRoleId(value)
     for(let i=0; i<roles.length;i++) {
       if(roles[i].roleId == value) {
         setFilterChip(roles[i].name)
       }
     }
    }

    const sortingMethod = (obj) => {
      if(obj.order === 'desc') {
        setOrderBy(1)
      } else {
        setOrderBy(-1)
      }
      
      setOrderByAsc(obj.orderBy)
    }
    
const onSearchUser=(value)=>{
if(value.length===3){
  searchFlag=true
}

if(value.length==2 && searchFlag){
  let temp={
    pageNumber,
    pageSize:8,
    roleId,
    token,
    orderBy,
    orderByAsc,
    searchBarValue
    
  }
  temp.searchBarValue=''
  dispatch(gettingUserList(temp))
  dispatch(getFilteredUserCount(temp))
  searchFlag=false
}
}


       ///////////delete Filter chip///////////////////

   const deleteHandle = () => {
     setRoleId('')
   }


    return (
    <div className='card-view'>
      
    <div  className='UserMangement-container container-fluid'>
      <div>
          <b data-testid='user-management-headertext'>USER MANAGEMENT</b>
          <p data-testid='user-management-headebelowrtext' className='UserMangement-textcontainer'>Add, Delete or Edit Users </p>
      </div>
      {/* <hr className='hr-margin' /> */}
        <div className='searchbar-btn-container'>
            <div className='search-container'>
              <div className='selectbox-outer-container'>
              <SelectBoxCustom class2={'selectboxoptions-container'} class={'select-input-box'} roles={roles} getValue={getSelectedValue} userRole={roleId} />

              </div>
              
              <span></span>
               <SearchIcon className="searchicon"/>
              <input className='searchbar-input-box' type='text' placeholder='Search table' onChange={(e)=> {setSearchBarValue(e.target.value); onSearchUser(e.target.value)} }  />
            </div>
              <div style={{width:'50%',fontFamily:'HoneywellSansWeb-Bold', float:'right'}}>
                  {btnClicked ? <div className='userviewbutton-container'>
                  {showEditDelete ?
                    <span className={btnActive.btnEdit ? 'rtls-common-btn margin-right-15 active' : 'rtls-common-btn margin-right-15'} onClick={() => {setShowEditUserModal(true); onButtonClick('btnEdit')}} variant="contained" color="primary">
                      <img className="buttonicon-img" src={Placeholder} alt="No image"/>
                        Edit
                    </span>: null}
                    {showEditDelete ?
                    <span  onClick={()=>{modalDeleteHandler();onButtonClick('btnDelete')}} className={btnActive.btnDelete ? 'rtls-common-btn margin-right-15 active' : 'rtls-common-btn margin-right-15'}  variant="contained" color="primary">
                      <img className="buttonicon-img" src={Placeholder} alt="No image"/>
                        Delete
                    </span> : null
                    }

                    
                    <span className={btnActive.btnAdd ? 'rtls-common-btn margin-right-15 active' : 'rtls-common-btn margin-right-15'} onClick={() => {setShowAddUserModal(true); onButtonClick('btnAdd')}} variant="contained" color="primary" >
                     <img className="buttonicon-img" src={Placeholder} alt="No image"/>
                      Add User
                    </span>
                    

                    <span className={btnActive.btnAccess ? 'rtls-common-btn active' : 'rtls-common-btn'} onClick={() => { onButtonClick('btnAccess')}} variant="contained" color="primary">
                    <img className="buttonicon-img" src={Placeholder} alt="No image"/>
                      Manage Access
                    </span>
                  </div> : ''}
              </div>	
        </div>
          
      {/* <hr className='hr-margin' /> */}
      {showAddUserModal ? <div ref={wrapperRef} className='adduser-container-component'><AddUser roles={roles} token={token} closeAddUserModal={closeAddUserModal} /></div> : ''}
      
      {showEditUserModal ? <div ref={wrapperRef} className='edituser-container-component'><AddUser roles={roles} isEdit={true} closeAddUserModal={closeAddUserModal} /></div> : ''}
    </div>
    <p className="rtls-count-top">1-8 of {pageSize}</p>
     <div className='filterchip-container'>
         <span className='filterchip-text-label'>Filter : </span>     
              <FilterChip deleteHandle={deleteHandle} value={filterChip} />
              
     </div>
    

    {showHideListUsers ? 
    <ListUsers 
    selectedUsers={selectedUsers}
    deleteUserCount={deleteUserCount}
    sortRerender={sortRerender}
    userListData={userListData && userListData.users}
    showDeleteUserModal={showDeleteUserModal}
    toggleHideShowButton={toggleHideShowButton} sortingMethod={sortingMethod}
    
    /> : null
    
    
    }
     
     {/* Users Pagination */}
     
     <Pagination globalPageNumberForGoToPage={globalPageNumberForGoToPage} count={userListData && userListData.users.length}  pageSize={pageSize} userCount={userFilterCount} pageClickHandler={pageClickHandler}/>
     
     {showDeleteUserModal ? <DeleteModal token ={token} selectedIds={selectedIds} selectedUserNames={selectedUserNames} userType={domainUser} count={deleteCountUser}  closed={closeCommonModal}/>  : ''} 
    </div>
    );
  }



  export default UserManagement;