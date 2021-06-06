import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import './ListUsers.css'


const headCells = [
  { id: 'firstName', numeric: false, disablePadding: true, label: 'USERS' },
  { id: 'UserName', numeric: true, disablePadding: false, label: 'USERNAME' },
  { id: 'Role', numeric: true, disablePadding: false, label: 'ROLE' },
  { id: 'Status', numeric: true, disablePadding: false, label: 'STATUS' },
  
];

let toCheckSelectAll=false

function EnhancedTableHead(props) {
  console.log(props,'props')
  const {userDataAll, classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  
 
  useEffect(()=> {
    toCheckSelectAll=false
  },[userDataAll])

  return (
    <TableHead className='rtls-table-header'>
      <TableRow >
        <TableCell className='rtls-table-body'   style={{borderBottom:"none"}} padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={toCheckSelectAll && rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            disabled={props.showDeleteUserModal}
            inputProps={{ 'aria-label': 'select all desserts' }}
            
          />
        </TableCell >
        {headCells.map((headCell,i) => (
          <TableCell className={`rtls-table-cell` } style={{borderBottom:"none"}}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'desc'}
              onClick={createSortHandler(headCell.id)}
              className={'activesss'}
            >
              {headCell.label}
              
            </TableSortLabel>
            
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  
  paper: {
    width: '50%',
    marginBottom: theme.spacing(2),
    backgroundColor:'#272727',

  },
  table: {
    width: '100%',
    backgroundColor:'#272727',
    borderBottom: "none",
   
  },
 
}));

export default function EnhancedTable(props) {
 const[rows,setRows]=useState([])
  

  function createData(userId, firstName, UserName, Role, Status) {
    return { userId, firstName, UserName, Role, Status };
  }
  
  const tempRows=[]

  useEffect(()=>{
    let userData=props.userListData
    userData && userData.length && userData.map((el,i)=>{
      if(el.firstName.length > 20) {
        el.firstName = el.firstName.substring(0, 20)
      }
      tempRows.push(createData(el.id, el.firstName,el.username,el.role,el.status))
      setRows(tempRows)
      
    })
    toCheckSelectAll=false

    console.log(props.count,'count')
  },[props.userListData])

  
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('userId');
  const [selected, setSelected] = React.useState([]);
  const [selectedID, setSelectedID] = React.useState([]);
  const [selectedUserName, setSelectedUserName] = React.useState([]);
  const [page, setPage] = React.useState(0);
  
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [sortRender, setSortRender] = useState(true)

  
  useEffect(()=> {
    
    console.log(order, orderBy, 'forsorting')
    setSortRender(props.sortRerender)
    
  },[props.sortRerender])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    console.log(property, 'sorting property')
    props.sortingMethod({order:isAsc ? 'desc' : 'asc', orderBy:property ==='UserName' ? 'userName' : property === 'Role' ? 'role' : property==='Status' ? 'status' : property })
  };

  const handleSelectAllClick = (event) => {
    // console.log('handleCLick')
  toCheckSelectAll=true
    if (event.target.checked) {
  
      const newSelectedsID= rows.map((n) => n.userId);
      const newSelectedsUsername= rows.map((n) => n.UserName);
      const newSelecteds = rows.map((n) => n.userId);
      props.deleteUserCount(newSelecteds.length)
      setSelected(newSelecteds);
      setSelectedID(newSelectedsID);
      setSelectedUserName(newSelectedsUsername);
      props.deleteUserCount(newSelectedsID.length)
      props.selectedUsers(newSelectedsID,newSelectedsUsername)
 
      console.log(selected, 'selectall', newSelecteds)
     
        props.toggleHideShowButton(true)
      
        
      
        
      
      return;
    }
    props.toggleHideShowButton(false)
    setSelected([]);

  };

  const handleClick = (event, userId, UserName) => {
    // console.log(event,'click event')
    
    
    const selectedIndex = selected.indexOf(userId);
    const selectedIndexID = selectedID.indexOf(userId);
    const selectedIndexUserName=selectedUserName.indexOf(UserName);
    let newSelected = [];
    let newSelectedID = [];
    let newSelectedUserName=[];
    
    
    
     //console.log(selected.length,selectedIndex, 'indextobe')

    
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, userId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
     
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
     
    } 
      //h--id
    if (selectedIndexID === -1) {
      newSelectedID = newSelectedID.concat(selectedID, userId);
    
    } else if (selectedIndexID === 0) {
      newSelectedID = newSelectedID.concat(selectedID.slice(1));
      
    } else if (selectedIndexID === selectedID.length - 1) {
      newSelectedID = newSelectedID.concat(selectedID.slice(0, -1));
     
    } else if (selectedIndexID > 0) {
      newSelectedID = newSelectedID.concat(
        selectedID.slice(0, selectedIndexID),
        selectedID.slice(selectedIndexID + 1),
      );
     
    } 
    //h--id

       //h--usrrname
       if (selectedIndexUserName === -1) {
        newSelectedUserName = newSelectedUserName.concat(selectedUserName, UserName);
      
      } else if (selectedIndexUserName === 0) {
        newSelectedUserName = newSelectedUserName.concat(selectedUserName.slice(1));
        
      } else if (selectedIndexUserName === selectedUserName.length - 1) {
        newSelectedUserName = newSelectedUserName.concat(selectedUserName.slice(0, -1));
       
      } else if (selectedIndexUserName > 0) {
        newSelectedUserName = newSelectedUserName.concat(
          selectedUserName.slice(0, selectedIndexUserName),
          selectedUserName.slice(selectedIndexUserName + 1),
        );
       
      } 
      //h--id
    
    if(newSelected.length >0 ) {
      props.toggleHideShowButton(true)
    }else {
      props.toggleHideShowButton(false)
    }

   // console.log("honeywell------firstName",newSelected)
   // console.log("honeywell------id",newSelectedID)
   // console.log("honeywell------username",newSelectedUserName)
   
    
    props.deleteUserCount(newSelected.length)
    setSelected(newSelected);
    setSelectedID(newSelectedID);
    setSelectedUserName(newSelectedUserName);
    props.selectedUsers(newSelectedID,newSelectedUserName)
    //console.log(newSelected)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
 
  const isSelected = (userId) => selected.indexOf(userId) !== -1;

  // {const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);}

  return (
    <div className={'rtls-table-container'}>
      <Paper className={classes.paper}>
       
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
             userListData={props.userListData}
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.userListData?.length}
              userDataAll={props.userListData}
              showDeleteUserModal={props.showDeleteUserModal}
            /> 
            {props.userListData && props.userListData.length ? sortRender ? <TableBody>
              {rows.map((row, index) => {
                  const isItemSelected = isSelected(row.userId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow 
                    className="table-color"
                      hover
                      
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.userId}
                      selected={isItemSelected}
                    >
                      <TableCell className="table-checkboxmargin" style={{borderBottom:"none"}} padding="checkbox">
                      
                        <Checkbox
                         disabled={props.showDeleteUserModal}
                        onClick={(event) => handleClick(event, row.userId, row.UserName)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                          
                      <TableCell style={{borderBottom:"none"}} style={{borderBottom:"none"}} component="th" id={labelId} scope="row" padding="none">
                        {row.firstName} {row.lastName}
                      </TableCell>
                      <TableCell style={{borderBottom:"none"}} align="right">{row.UserName}</TableCell>
                      <TableCell style={{borderBottom:"none"}} align="right">{row.Role}</TableCell>
                      <TableCell style={{borderBottom:"none"}} align="right">{row.Status}</TableCell>
        
                    </TableRow>
                  );
                })}
             
            </TableBody> : '' : ''}
          </Table>
        </TableContainer>

       
        
      </Paper>
      
    </div>
  );
}


