import React, { useState } from "react";

const NoteForm = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({
    name: "",
    DOB: "",
    height: "",
    weight: "",
    membersince: ""
  });

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", age: "", height: "", weight: "", membersince: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
        value={member.name}
      />
      <label htmlFor="DOB">Date of Birth</label>
      <input
        id="DOB"
        type="date"
        name="DOB"
        placeholder= "12/18/2018"
        onChange={handleChanges}
        value={member.age}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder= "5'9"
        onChange={handleChanges}
        value={member.height}
      />
       <label htmlFor="weight">Weight</label>
      <input
        id="Weight"
        type="text"
        name="weight"
        placeholder= "150lbs"
        onChange={handleChanges}
        value={member.weight}
      />
       <label htmlFor="membersince">Member Since</label>
      <input
        id="membersince"
        type="text"
        name="membersince"
        onChange={handleChanges}
        value={member.membersince}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default NoteForm;