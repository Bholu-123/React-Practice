import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../useSortableTable";

const Table = ({ caption, data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data);

  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
