import React, { createContext, useState } from 'react'

export const store=createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"hitesh",
"Age":"24",
"Course":"MERN",
"Batch":"Oct",
"id":"1"

},

{

    "Name":"aruna",
    "Age":"22",
    "Course":"MERN",
    "Batch":"sep",
    "id":"2"
    
    },
    {

        "Name":"akash",
        "Age":"22",
        "Course":"MERN",
        "Batch":"Dec",
        "id":"3"
        
        },
        
        {
        
            "Name":"das",
            "Age":"23",
            "Course":"MERN",
            "Batch":"Oct",
            "id":"4"
            
            },
            {
        
                "Name":"ishu",
                "Age":"25",
                "Course":"MERN",
                "Batch":"Oct",
                "id":"5"
                
                },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail