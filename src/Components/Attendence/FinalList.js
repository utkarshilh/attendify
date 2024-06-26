import axios from 'axios';
import React from 'react';

import { useState } from 'react';

export default function FinalList({ attendanceRecords, classs, section, subject, changeStatus }) {

  const [records, setRecords] = useState(attendanceRecords);

  console.log("change status" + changeStatus)

  async function handleSubmit() {


    if (records.length === 0) {
      alert("No record to submit");
      return;


    }

    try {
      const response = await axios.post('http://localhost:5001/submitAttendance', { records, classs, subject, section }, { timeout: 5000 })

      if (response.status === 200) {
        alert("Successfully inserted");
        changeStatus(false)

      }
      else {
        alert("something went wrong")

      }
    } catch (error) {
      alert(error);

    }
    finally {
      console.log("this is finally")
      // this code will redirect to the previous
    }

  }
  const handleStatusButtonClick = (index) => {
    const newRecord = [...records];


    // updating the current status just opposite of current status
    { (newRecord[index].status === 'present') ? newRecord[index].status = 'absent' : newRecord[index].status = 'present' }

    setRecords(newRecord);

    console.log(records);

  }
  return (
    <div className="ml-64 p-4">

      <h1>Final List</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col" colSpan={2}>First</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.roll}</td>
              <td colSpan={2}>{item.name}</td>

              <td><button onClick={() => handleStatusButtonClick(index)} className={(item.status === 'present') ? 'btn btn-success' : 'btn btn-danger'} >{item.status}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-primary btn-lg' onClick={handleSubmit}>Submit</button>
    </div>
  );
}
