import React from "react";

export interface IBasic {
  children?: React.ReactNode;
}

export interface ApiResponsePagination {
  count: number;
  next: string;
  previous: string;
}
