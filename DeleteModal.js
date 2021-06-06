import '../css/CommonModal.css'
import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import configData from  '../config.json'
import { deleteUsers } from '../actions/actions';

const DeleteModal = (props) => {
  const dispatch = useDispatch();

  const [countDelete, setCountDelete] = useState(0);
  const [ids, setIds] = useState([]);
  const [usernames, setUsernames] = useState();
  const [isWorkgroupUserDelete, setIsWorkgroupUserDelete] = useState(false);
  const [isWorkgroupUser, setIsWorkgroupUser] = useState(false);

  useEffect(() => {
    if (configData.RTLS_Installation_Mode === "ACTIVE-DIRECTORY") {
      setIsWorkgroupUser(false);
    } else if (configData.RTLS_Installation_Mode === "WORKGROUP") {
      setIsWorkgroupUser(true);
    }
    setIds(props.selectedIds);
    setUsernames(props.selectedUserNames);
  }, []);

  useEffect(() => {
    setCountDelete(props.count);
  }, [props.count]);
// Using for loop for sending multiple users data to payload one-by-one
  function onDeleteBtnClick() {
    const token = localStorage.getItem("apiToken");
    for (let i = 0; i < ids.length; i++) {
      if (usernames[i] === undefined) {
        usernames[i] = " ";
      }
      let tempObject = {
        token: props.token,
        UserId: ids[i],
        UserName: usernames[i],
        IsWorkGroupUserDelete: isWorkgroupUserDelete,
        IsWorkGroup: isWorkgroupUser,
      };
      dispatch(deleteUsers(tempObject));
    }
    props.closed();
    window.location.reload(false);
  }

  return (
    <div>
      <div className="MainModal-Container">
        <div className="MainModal-Transparent" />
        <div
          className={
            isWorkgroupUser
              ? "MainModal-Inner-Workgroup"
              : " MainModal-Inner-Domain"
          }
        >
          {/* Close button to close the pop-up */}
          <div style={{ float: "right" }}>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => props.closed()}
            />
          </div>
          {/* Modal Header conatiining user deletion */}
          <div className="Modal-Header">
            <span className="Delete-User">
              <span data-testid="label-delete-test"> Delete </span>
              {countDelete} user
            </span>
          </div>
          <div className="Modal-Body">
            {isWorkgroupUser ? (
              <span data-testid="delete-text">
                {" "}
                Click on Delete to delete the user and select the checkbox to
                delete from the system
              </span>
            ) : (
              <span data-testid="delete-text">
                Click on Delete to delete the user{" "}
              </span>
            )}
          </div>

          {
            /* Checkbox for the user */
            isWorkgroupUser ? (
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ "margin-left": "16px", "margin-right": "-25px" }}
                      name="checkedB"
                      color="primary"
                      onChange={() => {
                        setIsWorkgroupUserDelete(!isWorkgroupUserDelete);
                      }}
                    />
                  }
                  label="Delete from the system"
                />
              </div>
            ) : (
              <br />
            )
          }

          {/* Footer containing the cancel link and delte button */}
          <div className="Modal-Fotter">
            <a
              style={{
                color: "#64C3FF 100%",
                margin: "20px",
                cursor: "pointer",
              }}
              onClick={() => props.closed()}
            >
              Cancel
            </a>
            <Button
              className="btn-color"
              style={{ marginRight: "10px", float: "right" }}
              variant="contained"
              color="primary"
              onClick={onDeleteBtnClick}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
