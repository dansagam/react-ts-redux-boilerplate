import { ITablePagination, ITablePaginationFunction } from "interfaces/tablePagination";
import React from "react";

// type ObjectType = {
//   [x: string]: string;
// };

export type DataSourceObjType = Record<string, string | number>;
export type TypeColumns = {
  dataIndex: string;
  title: string;
  filter: boolean;
  renderFilter?: React.ReactNode;
  sorter: boolean;
  render?: (row: string | number, col?: DataSourceObjType, index?: number) => JSX.Element;
};

export interface ITable {
  columns: TypeColumns[];
  dataSource: DataSourceObjType[] | [];
  tableParams: ITablePagination;
  setTableParams: ITablePaginationFunction;
  emptyState: React.ReactNode;
  handleFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
}

export interface ITableHead {
  columns: TypeColumns[];
  order: OrderType;
  orderBy: string;
  rowCount?: number;
  onSort?: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
  checker?: boolean;
}

export type OrderType = "asc" | "desc";
