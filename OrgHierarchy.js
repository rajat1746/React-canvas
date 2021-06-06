import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './OrgHierarchy.scss'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Organisation from '../../component/Organisation/Organisation'
import SelectBoxCustom from '../../common-component/SelectBox/SelectBox'

const roles = [{
    roleId:'external',
    name:'External'
  },
  {
    roleId:'internal',
    name:'Internal'
  }]

const TabPanel = (props) => {
    return (

        <div>
            {props.value === 0 ? <Organisation/> : ""}

        </div>
    );
};


const useStyles = makeStyles((theme) => ({
    app: {
        background: "#272727",
    },
    AppBar: {
        background: "transparent",
        color: "black"
    },
    tab: {
        color: "#ffffff",
        fontFamily: "honeywellSansWeb-Bold",
        fontSize: "14px"
    },
    hidden: {
        visibility: 'hidden'
    }
}));

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: '80%',
            width: '100%',
            backgroundColor: '#1792E5',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);


const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontFamily: 'HoneywellSansWeb-Bold',
        fontSize: '14px',
        color: '#FFFFFF',

    },
})) ((props) => <Tab disableRipple {...props} />);





const OrgHierarchy = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const [vis, setvis] = React.useState(false)

    const getSelectedValue =(value)=> {
        console.log(value)
         
    }

    return (
        <div className='orghierarchy-main-container'>
            <div className='org-header-container card-view'>
                <b className='org-hierarchymain-txt'>ORGANISATION HIERARCHY</b>
                <p className='orghierarchy-textcontainer'>Build Organisation Model, Create Personnel and Asset Groupings, Assign Access levels </p>
                <div className='org-hierachy-tabs'>
                    <AppBar
                        className={classes.AppBar}
                        position="static"
                        elevation="0px"
                    >
                        <StyledTabs
                            indicatorColor="primary"
                            className={classes.tab}
                            value={value}
                            aria-label="simple tabs example"
                            onChange={(e, val) => {
                                setValue(val);
                            }}
                        >
                            <StyledTab label="Organisation Model" />
                            <StyledTab label="Safety Profile" />
                            <StyledTab label="Security Profile" />
                            <StyledTab label="Data Profile" />
                        </StyledTabs>
                    </AppBar>

                </div>
                <div className='org-search-filter-container'>
                    <SelectBoxCustom class2={'selectboxoptions-container'} class={'select-input-box'} roles={roles} getValue={getSelectedValue}  userRole={'internal'}/>
                </div>
            </div>
            <div className='org-hierarchy-components'>
                <TabPanel value={value} index={0}></TabPanel>
            </div>
        </div>
    )
}

export default OrgHierarchy