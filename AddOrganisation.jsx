import React, { useState, useEffect } from "react";
import {  } from "../../actions/actions"; 
import { useDispatch, useSelector } from 'react-redux'

function AddOrganisation(props){
    const dispatch=useDispatch();
    const [title,setTitle]=useState('')
    const [description ,setDescription]=useState("")

    // const { createOrganisation } = useSelector(
    //     state => state.CreateOrganisationReducer
    //   )

    function onAddBtnClick(){
        const tempObj = {
            title: title,
            description: description,
          };
          console.log(tempObj)
        props.clicked();
    }
    return (
        <div className="Add-Organisation-Modal">
          <div></div>
          <div class="grid-container">
            <div class="grid-item">
              <div className="placeholder">x</div>
              <div className="modal-title">ADD ORGANISATION</div>
            </div>
            <div class="grid-item"></div>
            <div class="grid-item">
              <div className="modal-title-side">ORG 1234</div>
            </div>
            <div class="grid-item-1">
              <div className="text">Title</div>
            </div>
            <div class="grid-item-1">
              <input
                class="input-field"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div class="grid-item-1">
              <div className="text">Description</div>
            </div>
            <div class="grid-item-1">
              <input
                class="input-field"
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div class="grid-item-1" style={{marginTop:'8px'}}>
              <div className="add-btn center" onClick={onAddBtnClick}>
                <p>Add</p>
              </div>
              <div className="cancel-btn center">
                <p>Cancel</p>
              </div>
            </div>
          </div>
        </div>
    );
}
export default AddOrganisation;