import React, { useState } from "react";
import firebase from "../utils/firebase";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Fab from "@material-ui/core/Fab";
import "../App.css";
import "./Form.css";

function Form() {
  const [crewMember, setCrewMember] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberRef = firebase.database().ref("Member");
    const member = {
      crewMember,
    };
    memberRef.push(member);
    setCrewMember("");
  };

  const handleOnchange = (e) => {
    setCrewMember(e.target.value);
    console.log(crewMember);
  };

  return (
    <div className="form-container">
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form" onSubmit={handleSubmit}>
        <label className="labelClass" htmlFor="name">
          Entrez le nom de l&apos;Argonaute
        </label>
        <TextField
          id="outlined-search"
          type="search"
          variant="outlined"
          value={crewMember}
          onChange={handleOnchange}
          InputProps={{ required: true }}
        />
        <Fab className="button" type="submit" variant="extended">
          <SaveIcon className={classes.extendedIcon} />
          Ajouter ce membre
        </Fab>
        {/* <button type="submit">Envoyer</button> */}
      </form>
    </div>
  );
}

export default Form;
