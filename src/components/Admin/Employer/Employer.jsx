import React from 'react'
import DataTable from 'react-data-table-component'

const Employer = () => {
  const filterUser = [
    {
      fullname: '<NAME>',
      position: '<EMAIL>',
      role: 'Admin',
      email: 'Active'
    },
    {
      fullname: '<NAME>',
      position: '<EMAIL>',
      role: 'Admin',
      email: 'Active'
    },
    {
      fullname: '<NAME>',
      position: '<EMAIL>',
      role: 'Admin',
      email: 'Active'
    },
    {
      fullname: '<NAME>',
      position: '<EMAIL>',
      role: 'Admin',
      email: 'Active'
    },
  ]
  const columns = [
    {
      name: "Name",
      selector: (row) => row?.fullname,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row?.position,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row?.role,
      sortable: true,
    },
  ];
  const customStyle = {
    rows: {
      style: {
        cursor: "pointer",
        backgroundColor: "#29a28550",
        color: "#272727",
        "&:hover": {
          backgroundColor: "#29a285",
          color: "#fff",
        },
      },
    },
    headCells: {
      style: {
        borderRadius: 2,
        backgroundColor: "#29a285",
        color: "#fff",
      },
    },
  };
  return (
    <div className='px-6'>
      <h1 className='text-2xl font-semibold mb-4'>List of Employer</h1>
      <DataTable
        columns={columns}
        data={filterUser}
        fixedHeader
        pagination
        selectableRows
        customStyles={customStyle}
        onRowClicked={(row) => rowHandler(row)}
      />
    </div>
  )
}

export default Employer