
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './Pagination.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > 3 + *': {
      marginTop: theme.spacing(2),
      
    },
  },
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff"
    }
  }
}));

let goToPageGlobalvalue 


export default function PaginationControlled(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [goToPage, setGoTopage] = React.useState(1);

  React.useEffect(()=>{
    if(page) {
      props.pageClickHandler(page)
    }
    
    // console.log(globalPageNumberForGoToPage)
  },[page])

  React.useEffect(()=>{
    if(props.globalPageNumberForGoToPage.pageNumber == 1) {
      setPage(props.globalPageNumberForGoToPage.pageNumber)
    }
    
    setGoTopage(props.globalPageNumberForGoToPage.pageNumber)
  },[props.globalPageNumberForGoToPage.pageNumber])

  const handleChange = (event, value) => {
    props.globalPageNumberForGoToPage.pageNumber=''
    let newValue=parseInt(value)
    console.log(isNaN(newValue))

    if(!isNaN(newValue)) {
      if(value){
    
        setPage(newValue == 0 ? 1 : newValue);
        
       
        setGoTopage(value)
        
      }
      
      
      if (value == 0){
        setGoTopage(1)
        setPage(1)
        
    
      } else if(value > Math.ceil(props.userCount/props.pageSize)) {
        setGoTopage(Math.ceil(props.userCount/props.pageSize))
        setPage(Math.ceil(props.userCount/props.pageSize))
      }
      if(value == "") {
        setGoTopage('')
      }

    } else {
      setPage(page)
      setGoTopage('')
    }

    
};

  return (  
    <div className="pagination-rtls">
    <span className='items-span'>{props.userCount ? page*props.pageSize-props.pageSize+1 : 0}-{page===1 ? props.count : page*props.pageSize-(props.pageSize-props.count)} of {props.userCount} items </span>
    <div className={'pagination-rtls-body'}>
      <Pagination classes={{ ul: classes.ul }}  count={props.userCount < 8 ? 1 :Math.ceil(props.userCount/props.pageSize)} page={page} onChange={handleChange} />
    </div>
    <div className='input-pageNo'>
    <label className='input-label' for="fname">Go to Page</label>
    <input className='input-boxPagination' value={props.globalPageNumberForGoToPage.PageNumber ? props.globalPageNumberForGoToPage.pageNumber : goToPage} type="text" min='1' max={Math.round(props.userCount/props.pageSize).toString()} id="fname" name="fname" onChange={(e)=>handleChange(e,e.target.value)}/>
    
    </div>
    </div>
  );
}

