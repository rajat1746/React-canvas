import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import useStyles from './styleEntityEditModal'


// className="MainModal-Container"
const EntityEditModal = (props) => {
  const classes = useStyles();
  return (
   
      <div className={classes.bodyContainer}>
        <div className="MainModal-Transparent-100" />
        <div className={classes.mainBody}>
          <div className={classes.x } onClick={() => props.closed()} >
            <CloseIcon />
          </div>
          <Grid container>
            <Grid item xs={12} style={{ margin: "0px" }}>
              <div className={classes.modalHeading}>
                COM 1234 | Honeywell IT{" "}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.modalSubHeading}>Subtitle </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.titleText}>Title </div>
            </Grid>
            <Grid item xs={12}>
              <input
                className={classes.inputField}
                placeholder="Honeywell It"
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.label}>Description </div>
            </Grid>
            <Grid item xs={12}>
              <input className={classes.inputField} />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.label}>Data Profile </div>
            </Grid>
            <Grid item xs={12}>
              <input className={classes.inputField} />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.label}>
                Access Control
                <Button
                  style={{
                    float: "right",
                    marginRight: "40px",
                    color:"#64C3FF",
                   
                  }}
                  size="small"
                >
                  Edit
                </Button>
                <BorderColorIcon
                  style={{
                    float: "right",
                    marginRight: "9.1px",
                    color: "#64C3FF",
                    marginTop:'4px'
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
  
  );
};
export default EntityEditModal;
