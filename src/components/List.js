import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import Membre from "./Membre";
import "./List.css";

function List() {
  const [memberList, setMemberList] = useState();

  useEffect(() => {
    const memberRef = firebase.database().ref("Member");
    memberRef.on("value", (snapshot) => {
      const lists = snapshot.val();
      const memberListBuffer = [];
      for (let id in lists) {
        memberListBuffer.push({ id, ...lists[id] });
      }
      setMemberList(memberListBuffer);
      console.log(memberList);
    });
  }, []);

  return (
    <div className="list-all">
      <div className="border">
        <h2>Membres de l'équipage</h2>
        <section className="section">
          {memberList
            ? memberList.map((member, index) => (
                <Membre member={member} key={index} />
              ))
            : ""}
        </section>
      </div>
    </div>
  );
}

export default List;
