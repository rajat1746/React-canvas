// import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

// import './Header.css'

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//       color:'#F0F0F0',
//       fontFamily:'HoneywellSansWeb-Black',
//       fontSize:'16px',
//       letterSpacing:0,
//      textAlign: 'left',
//     lineHeight: '24px',
//     marginLeft:'54px'

//     },
//   },

//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   // const isMenuOpen = Boolean(anchorEl);
//   // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   // const handleProfileMenuOpen = (event) => {
//   //   setAnchorEl(event.currentTarget);
//   // };

//   // const handleMobileMenuClose = () => {
//   //   setMobileMoreAnchorEl(null);
//   // };

//   // const handleMenuClose = () => {
//   //   setAnchorEl(null);
//   //   handleMobileMenuClose();
//   // };

//   // const handleMobileMenuOpen = (event) => {
//   //   setMobileMoreAnchorEl(event.currentTarget);
//   // };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       // open={isMenuOpen}
//       // onClose={handleMenuClose}
//     >
//       {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       // open={isMobileMenuOpen}
//       // onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       {/* <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem> */}
//     </Menu>
//   );

//   return (
//     <div className={classes.grow}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Honeywell | Industrial RTLS
//           </Typography>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton aria-label="show 17 new notifications" color="inherit">
//               <Badge badgeContent={17} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               // onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               // onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcons from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
import "../../styles/header.css";
import "../Header/Header.css";

const useStyles = makeStyles((theme) => ({
  badge: {
    backgroundColor: theme && theme.colors && theme.colors.blue,
  },
}));
const Header = () => {
  const styles = useStyles();
  return (
    <AppBar className="header-appbar" position="static">
      <Toolbar className="header-toolbar">
        <div className="logo-container">
          <div className="logo">
            <Logo />
          </div>
          <div className="logo-text">
            <p data-testid='header-text' className="header-leftText"> INDUSTRIAL RTLS</p>
          </div>
        </div>
        <div className="usermenu-container">
          <div className="menu-button">
            <Badge badgeContent={1} classes={{ badge: styles.badge }}>
              <NotificationsIcons />
            </Badge>
          </div>
          <div className="menu-button">
            <AccountCircle />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
