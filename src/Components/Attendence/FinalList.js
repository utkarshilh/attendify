import React from 'react';
import { useState } from 'react';

export default function FinalList({ attendanceRecords }) {

  const [records, setRecords] = useState(attendanceRecords);
  const handleStatusButtonClick = (index) => {
    const newRecord = [...records];


    // updating the current status just opposite of current status
    { (newRecord[index].status === 'present') ? newRecord[index].status = 'absent' : newRecord[index].status = 'present' }

    setRecords(newRecord);
  }
  return (
    <>
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
      <button className='btn btn-primary btn-lg'>Submit</button>
    </>
  );
}
