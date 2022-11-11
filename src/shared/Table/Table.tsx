/* eslint-disable react/no-array-index-key */
import React from "react";
// import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import TableHead from "shared/Table/TableHead";
import { DataSourceObjType, ITable, OrderType, TypeColumns } from "shared/Table/TableInterface";
import { SortOrder } from "utils/constants";
import { format, isValid } from "date-fns";
import TablePaginationFooter from "./TablePagination";

const Table = ({
  columns,
  tableParams,
  dataSource,
  emptyState,
  setTableParams,
  handleFilter,
}: ITable) => {
  const [order, setOrder] = React.useState<OrderType>(() => {
    if (tableParams.sort.startsWith("+")) {
      return SortOrder.ASC;
    }
    if (tableParams.sort.startsWith("-")) {
      return SortOrder.DESC;
    }
    return SortOrder.DESC;
  });
  const [orderBy, setOrderBy] = React.useState<string>(tableParams.sort.slice(1) || "");
  type SortMapper = {
    asc: "+";
    desc: "-";
  };

  const renderCellData = (
    column: TypeColumns,
    row: DataSourceObjType,
    index: number
  ): React.ReactNode => {
    // type ff = keyof DataSourceObjType
    if (column.dataIndex === "date") return isValid(row?.updatedAt) ? "" : format(new Date(), "Pp");
    if (column.render) return column.render(row?.[column.dataIndex], row, index);
    return row[column?.dataIndex] ?? "";
  };

  // const dataKeys = () => {
  //   return dataSource?.map((item, index) => item?.id || index);
  // };

  const sortMapping: SortMapper = {
    asc: "+",
    desc: "-",
  };

  const handleSort = (e: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === SortOrder.ASC;
    const changeOrder = isAsc ? SortOrder.DESC : SortOrder.ASC;
    setOrder(changeOrder);
    setOrderBy(property);
    setTableParams({
      ...tableParams,
      sort: changeOrder ? `${sortMapping[changeOrder]}${property}` : "",
    });
  };
  const renderDataItems = () => {
    return dataSource.map((row, rowIndex) => {
      // const key = dataKeys()[rowIndex];

      return (
        <TableRow key={`${row?.id}-${rowIndex}`}>
          {columns?.map((column, columnIndex) => (
            <TableCell key={`${column.dataIndex}-${columnIndex}`}>
              {renderCellData(column, row, rowIndex)}
            </TableCell>
          ))}
        </TableRow>
      );
    });
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    tableParams.pagination.pageNumber > 0
      ? Math.max(
          0,
          (1 + tableParams.pagination.pageNumber) * tableParams.pagination.pageSize -
            dataSource.length
        )
      : 0;
  return (
    <div>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <MuiTable stickyHeader>
            {dataSource?.length > 0 ? (
              <>
                <TableHead
                  columns={columns}
                  order={order}
                  orderBy={orderBy}
                  onSort={handleSort}
                  onFilter={handleFilter}
                />
                <TableBody>
                  {renderDataItems()}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TablePaginationFooter setTableParams={setTableParams} tableParams={tableParams} />
              </>
            ) : (
              <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
                {emptyState}
              </Box>
            )}
          </MuiTable>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Table;
