import React from 'react'

const Child = ({ name, email, mobile, mark,dept,isActive}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <p>Email: {email}</p>
        <p>Mobile No: {mobile}</p>
        <h2>Department</h2>
        <p>Programming Language : {dept.PL}</p>
        <p>Full Stack : {dept.Stack}</p>
        {mark.map((m, i) => 
            <p key={i}>{`Mark ${i+1}: ${m}`}</p>
        )}
        <p>Status: {isActive ? "Active" : "Offline"} </p>
    </div>
  )
}

export default Child