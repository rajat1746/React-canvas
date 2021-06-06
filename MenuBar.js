import React from 'react'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import BuildIcon from '@material-ui/icons/Build';
import {Link} from 'react-router-dom'

const MenuBar=()=>{
  return(
  <div className='sidemenubar-container'>
    <div className='Groupoutlined_container' >
    <Link to='/'>
       <GroupOutlinedIcon fontSize="large" />
    </Link>
    </div >
    <div>
    <Link to='/org-hierarchy'>
      <BuildIcon fontsize="large"/>
    </Link>
    
    </div>
  </div>
  )

}

export default MenuBar