import React from "react";
// import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import SvgIcon from "@mui/material/SvgIcon";
import { SortOrder } from "utils/constants";
import { ITableHead } from "shared/Table/TableInterface";

const TableHead = ({ columns, order, orderBy, onSort, onFilter }: ITableHead) => {
  const handleSort = (property: string) => {
    const capitalizeKey = `${property.charAt(0).toUpperCase()}${property.slice(1)}`;
    return (event: React.MouseEvent<unknown>) => {
      if (onSort) {
        onSort(event, capitalizeKey);
      }
    };
  };

  const handleFilter = (property: string) => {
    return (event: React.MouseEvent<unknown>) => {
      if (onFilter) {
        onFilter(event, property);
      }
    };
  };
  return (
    <MuiTableHead>
      <TableRow>
        {columns.map((column, columnIndex) => {
          const { dataIndex, title, filter, sorter, renderFilter } = column;

          return (
            <TableCell key={dataIndex || columnIndex}>
              <TableSortLabel
                {...(sorter && orderBy === dataIndex && { "aria-label": dataIndex })}
                active={sorter && orderBy === dataIndex && !!order}
                hideSortIcon={!sorter && !filter}
                {...(order && {
                  direction: sorter && orderBy === dataIndex ? order : SortOrder.ASC,
                })}
                onClick={filter ? handleFilter(dataIndex) : handleSort(dataIndex)}
              >
                {title}
                {filter && renderFilter}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
