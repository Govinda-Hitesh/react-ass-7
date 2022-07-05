import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'
import './ass4.css'


const Student = () => {
    const [student]=useContext(store)
  return (
    <div>

<div ><Link to="/AddStud"><button className='button-add'>Add Student</button></Link></div>

<table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  </thead>

  <tbody>
      {student.map((student)=>(<tr key={student.id}>

      <td>{student.Name}</td>
      <td>{student.Age}</td>
      <td>{student.Course}</td>
      <td>{student.Batch}</td>
      <td><Link to={`/EditStud/${student.id}`}>Edit</Link></td>
    </tr>
     ))}
  </tbody>
  </table>
 </div>
  )
}

export default Student