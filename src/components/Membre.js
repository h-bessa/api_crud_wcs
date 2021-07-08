import React from "react";
import firebase from "../utils/firebase";
import "./Membre.css";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

function Membre({ member }) {
  const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }));

  const handleDelete = () => {
    const memberRef = firebase.database().ref("Member").child(member.id);
    memberRef.remove();
  };
  const classes = useStyles();

  return (
    <div className="membre-container">
      <div className="member-item">{member.crewMember}</div>
      <Tooltip title="Retirer ce membre">
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      {/* <button > Retirer de l'équipage</button> */}
    </div>
  );
}

export default Membre;
