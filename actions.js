import * as actionTypes from "./actionTypes";
import axios from "axios";
import URL from "../helper/apiUrl";

export const createUser = (token, payload) => (dispatch) => {
  axios
    .post(`${URL}/api/WorkGroup/v3/CreateUser`, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      dispatch({
        type: actionTypes.CREATE_USER,
        payload: response.data,
      });
    });
};
export const gettingUserList =
  ({ token, ...payload }) =>
  (dispatch) => {
    // ${URL}/api/UserManagement/v3/users/filter?page=1&sortColumnName=firstName&sortOrder=1&pageSize=20&firstname=jul
    axios
      .get(
        `${URL}/api/UserManagement/v3/users/filter?page=${payload.pageNumber}&pagesize=${payload.pageSize}&roleId=${payload.roleId}&firstname=${payload.searchBarValue}&sortOrder=${payload.orderBy}&sortColumnName=${payload.orderByAsc}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )

      .then((response) => {
        dispatch({
          type: actionTypes.USER_LIST,
          payload: response.data,
        });
      });
  };

export const getUserRoles = (token) => (dispatch) => {
  axios
    .get(`${URL}/api/UserManagement/users/roles`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      dispatch({
        type: actionTypes.USER_ROLE,
        payload: response.data,
      });
    });
};

export const getUserCount = (token) => (dispatch) => {
  axios
    .get(`${URL}/api/UserManagement/users/count`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      dispatch({
        type: actionTypes.USER_COUNT,
        payload: response.data,
      });
    });
};
export const checkDomainUser = (token) => (dispatch) => {
  axios
    .get(`${URL}/api/UserManagement/users/count`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      dispatch({
        type: actionTypes.IS_DOMAIN_USER,
        payload: true,
      });
    });
};

export const getAddUserList =
  ({ token, ...payload }) =>
  (dispatch) => {
    axios
      .get(
        `http://199.63.74.116:61453/api/WorkGroup/v3/SearchUser?searchKey=${payload.searchValues}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: actionTypes.ADDUSER_LIST,
          payload: response.data,
        });
      });
  };
export const getAlreadyExistUser =
  ({ token, ...payload }) =>
  (dispatch) => {
    axios
      .post(
        "http://199.63.74.116:61453/api/UserManagement/v3/users/AddUser",
        payload,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: actionTypes.ADDEXIST_USER,
          payload: response.data,
        });
        console.log("AddUser", response.data);
      });
  };
export const getAlreadyExistUserAD =
  ({ token, ...payload }) =>
  (dispatch) => {
    axios
      .get(
        `http://199.63.74.116:61453/api/UserManagement/v3/users/usersearchdomain?searchkey=${payload.searchValues}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: actionTypes.ADDEXIST_USERAD,
          payload: response.data,
        });
      });
  };

export const getFilteredUserCount =
  ({ token, ...payload }) =>
  (dispatch) => {
    // ${URL}/api/UserManagement/v3/users/filter?page=1&sortColumnName=firstName&sortOrder=1&pageSize=20&firstname=jul
    axios
      .get(
        `${URL}/api/UserManagement/v3/users/filter?roleId=${payload.roleId}&firstname=${payload.searchBarValue}&sortOrder=${payload.orderBy}&sortColumnName=${payload.orderByAsc}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: actionTypes.USER_FILTER_COUNT,
          payload: response.data,
        });
      });
  };

export const deleteUsers =
  ({ token, ...payload }) =>
  (dispatch) => {
    console.log("payload Data", payload);
    axios
      .delete(`http://199.63.74.116:61453/api/WorkGroup/v3/DeleteUser`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          UserId: payload.UserId,
          UserName: payload.UserName,
          IsWorkGroupUserDelete: payload.IsWorkGroupUserDelete,
          IsWorkGroup: payload.IsWorkGroup,
        },
      })
      .then((response) => {
        dispatch({
          type: actionTypes.DELETE_USER,
          payload: response.data,
        });
      });
  };
  

export const gettingOrganisationList= () => dispatch => {
  // ${URL}/api/UserManagement/v3/users/filter?page=1&sortColumnName=firstName&sortOrder=1&pageSize=20&firstname=jul
  // axios.get(`${URL}/api/UserManagement/v3/users/filter?page=${payload.pageNumber}&pagesize=${payload.pageSize}&roleId=${payload.roleId}&firstname=${payload.searchBarValue}&sortOrder=${payload.orderBy}&sortColumnName=${payload.orderByAsc}`,{
  //     headers:{
  // 'Authorization': 'Bearer ' + token
  //     }
  // })
  axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response)=>{
          dispatch({
              type: actionTypes.ORGANISATION_LIST,
              payload: response.data
             })
          
      })
}
