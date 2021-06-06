import { makeStyles, withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  bodyContainer:{
      height: '100%',
      width:' 100%',
      position:'fixed',
      verticalAlign: 'middle',
      top:'0',
      left:'0',

     
  },
mainBody: {
  background: "#272727",
  boxShadow: "10px 20px 40px 0 rgba(0,0,0,0.40)",
  position: 'absolute',
  right: '213px',
  top: '169px',
  zIndex: '999',
  borderRadius: "10px",
  width: "688px",
  height: "743px",
  float: "right",
  margin: "10px",

},
x: {
  color: "#F0F0F0",
  height: "24px",
  width: "24px",
  float: "right",
  marginTop: "21.3px",
  marginRight: "21.2px",
},
modalHeading: {
  fontFamily: "HoneywellSansWeb-Extrabold",
  fontSize: "16px",
  color: "#F0F0F0",
  float: "left",
  marginLeft: "40px",
  marginTop: "58px",
},
modalSubHeading: {
  fontFamily: "HoneywellSansWeb-Bold",
  fontSize: "14px",
  color: "#F0F0F0",
  float: "left",
  marginLeft: "40px",
  marginTop: "4px",
  textAlign: "left",
},
titleText: {
  marginTop: "34px",
  marginLeft: "40px",
  fontFamily: " HoneywellSansWeb-Bold",
  fontsize: "16px",
  color: "#F0F0F0",
  letterSpacing: "0",
  lineHeight: "24px",
},
label: {
  marginTop: "24px",
  marginLeft: "40px",
  fontFamily: " HoneywellSansWeb-Bold",
  fontsize: "16px",
  color: "#F0F0F0",
  letterSpacing: "0",
  lineHeight: "24px",
},
inputField: {
  width: "608px",
  height: "40px",
  marginRight: "40px",
  marginTop: "8px",
  marginLeft: "40px",
  background: "#505050",
  boxShadow: " inset 1px 1px 1px 0 rgba(0,0,0,0.30)",
  borderRadius: "4px",
  fontFamily: "HoneywellSansWeb-Medium",
  fontSize: "16px",
  color: "#F0F0F0",
  letterSpacing: "0",
  lineHeight: "24px",
  paddingLeft: "12px",
  border: 'none',
  borderRadius: '2px'
},
editText: {
  float: "right",
  marginRight: "40px",
  fontSize: "14px",
  color: "#64C3FF",
  marginTop: "4px",
},
}));
  export default useStyles;