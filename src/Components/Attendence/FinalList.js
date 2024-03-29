import React from 'react'

export default function FinalList({ attendanceRecords }) {
  console.log(JSON.stringify(attendanceRecords));

  return (
    <>
      <h1>Final List</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col" colSpan={2}>First</th>
            {/* <th scope="col">Last</th> */}
            <th scope="col">Actions</th>
          </tr>
        </thead>


        <tbody>


          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>


        </tbody>
      </table>
    </>





  )
}
