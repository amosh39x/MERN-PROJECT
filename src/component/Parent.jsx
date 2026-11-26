import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name = "Amosh"
               email = "Amosh@gamil.com"
               mobile = {989387282839}
               mark = {[99,98,97,96,95]}
               dept = {{
                PL : "JavaScript", 
                Stack : "MERN"
               }}
               isActive = {true}
               />
        <Child name = "Arvind"
               email = "Arvind@gamil.com"
               mobile = {9282728299}
               mark = {[95,96,97,98,99]}
               dept = {{
                PL : "JavaScript", 
                Stack : "MERN"
               }}
               isActive = {false}
               />
    </div>
  )
}

export default Parent