import React from "react";

const MemberCard = props => {
    return (
        <div>
            {props.member.map(member => (
            <div className="membership card" key={member.id}>
            <h2>{member.name}</h2>
            <span>{`Date of Birth: ${member.DOB}`}</span>
            <span>{`Height: ${member.height}` }</span>
            <span>{`Weight: ${member.weight}` }</span>
            <span>{`Member Since ${member.membersince}` }</span>
            </div>
            ))}
        </div>
    )
}

export default MemberCard