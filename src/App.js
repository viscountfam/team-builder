import React, {useState} from 'react';
import MemberCard from './components/MemberCard';
import MemberForm from './components/MemberForm';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      name: "Abraham Dent",
      DOB: "12/18/1972",
      height: "5'8",
      weight: "178lb",
      id: 881,
      membersince: "2010"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Math.floor(Math.random*1000),
      name: member.name,
      DOB: member.DOB,
      height: member.height,
      weight: member.weight,
      membersince: member.membersince
    };
    setMembers([...members, newMember])
  };
  return (
      <div className="App">
        <h1>Recent Members</h1>
        <MemberForm addNewMember={addNewMember} />
        <MemberCard member={members} />
      </div>
  );
}

export default App;
