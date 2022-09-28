import React from "react";
import { IBaseRoutes } from "routes";

const routes: IBaseRoutes[] = [
  {
    path: "/*",
    exact: true,
    component: React.lazy(() => import("views/auth/routes")),
  },
];

export default routes;
