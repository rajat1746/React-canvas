import React, { useState, useEffect } from "react";
import "./Organisation.css";
import Banner from "./OrgBanner";
import axios from 'axios';
import { gettingOrganisationList } from "../../actions/actions"; 
import { useDispatch, useSelector } from 'react-redux'

import EntityEditModal from '../EntityEditModal/EntityEditModal'
import AddOrganisation from '../AddOrganisation/AddOrganisation'

function Organization() {
  const dispatch = useDispatch()
  const [addButtonVisibility, setAddButtonVisibility] = useState("visible");
  const [showOrganisationModal, setShowOrganisationModal] = useState(false);
  const [showEntityEditModal, setShowEntityEditModal] = useState(false);
  

  function closeEntityEditModal(){
    setShowEntityEditModal(false)
  }

  const { organisationListData } = useSelector(
    state => state.organisationListReducer
  )
 


  useEffect(() => {
    dispatch(gettingOrganisationList())

  }, [])

 

  // tArray.push(tempObj);
  

  function setVisibility() {
    setAddButtonVisibility("hidden");
    setShowOrganisationModal(true);
  }
  function onAddBtnClick() {
    setAddButtonVisibility("visible");
    setShowOrganisationModal(false);
  
  }
  
  
  
  return (
    <div className="body">
      <div className="header">
        <div className="org-title">Organizations</div>
        <div
          style={{ visibility: addButtonVisibility }}
          onClick={setVisibility}
        >
          <div>
          <div className="plus">+</div>
          </div>
         
          <div className="add-new">Add New </div>
        </div>
      </div>
      <br />

     {/*  <Banner  item={organisationListData}></Banner>*/}
      <div>
      {showOrganisationModal ? (
       <AddOrganisation  clicked={onAddBtnClick} />
      ) : (
        ""
      )}
      </div>
      {showEntityEditModal? <EntityEditModal style={{float:'right',margin:'25px'}} closed={()=> setShowEntityEditModal(false)} />:""}
     
    </div>
  );
}
export default Organization;