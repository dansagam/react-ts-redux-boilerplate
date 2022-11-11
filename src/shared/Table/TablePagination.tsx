import React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import MuiTablePagination from "@mui/material/TablePagination";
import { ITableFooter } from "shared/Table/TableInterface";

const TablePagination = ({ tableParams, setTableParams }: ITableFooter) => {
  const tableOptions = [
    {
      label: "10 items",
      value: 10,
    },
    {
      label: "20 items",
      value: 20,
    },
    {
      label: "30 items",
      value: 30,
    },
  ];

  const handlePageChange = (event: unknown, newPage: number) => {
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        pageNumber: newPage,
      },
    });
  };
  const handleRowPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        pageNumber: 0,
        pageSize: parseInt(event.target.value, 10),
      },
    });
  };
  return (
    <TableFooter>
      <TableRow>
        <MuiTablePagination
          rowsPerPageOptions={tableOptions}
          count={tableParams.pagination.total}
          page={tableParams.pagination.pageNumber}
          rowsPerPage={tableParams.pagination.pageSize}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowPerPageChange}
        />
      </TableRow>
    </TableFooter>
  );
};

export default TablePagination;
