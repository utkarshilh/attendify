import React from 'react';

export default function FinalList({ attendanceRecords }) {
  console.log(JSON.stringify(attendanceRecords));

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
          {attendanceRecords.map((item, index) => (
            <tr key={index}>
              <td>{item.roll}</td>
              <td colSpan={2}>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>
        submit
      </button>
    </>
  );
}
