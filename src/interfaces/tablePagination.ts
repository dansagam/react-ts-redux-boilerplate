type Pagination = {
  total: number;
  pageNumber: number;
  pageSize: number;
};
export interface ITablePagination {
  search: string;
  sort: string;
  filterBy?: string | number;
  filterBy1?: string | number;
  filterBy2?: number | string;
  pagination: Pagination;
}

export type ITablePaginationFunction = (x: ITablePagination) => void;
