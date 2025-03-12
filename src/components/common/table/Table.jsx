import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, data }) => {
  const [filterText, setFilterText] = useState("");


  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(filterText.toLowerCase())
    )
  );


  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "16px",
        backgroundColor: "#f8f9fa",
      },
    },
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        responsive
        customStyles={customStyles}
      />
    </div>
  );
};

export default Table;
