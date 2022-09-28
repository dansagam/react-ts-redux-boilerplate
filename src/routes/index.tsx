import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

export interface IBaseRoutes {
  path: string;
  exact?: boolean;
  component: React.LazyExoticComponent<() => JSX.Element>;
  isAuthenticated?: boolean;
  layout?: JSX.Element;
}

const renderRoutes = ({ component: Component, ...route }: IBaseRoutes) => {
  const ProtectedComponent = route.isAuthenticated ? React.Fragment : React.Fragment;
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                width: "100%",
                background: "#e3e3e3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Loading...</h1>
            </div>
          }
        >
          <ProtectedComponent>
            <Component />
          </ProtectedComponent>
        </Suspense>
      }
    />
  );
};

export function RouterWrapper() {
  return (
    <Routes>
      {routes?.map((v) => renderRoutes(v))}
      <Route path="404" element={<div>No match</div>} />
      <Route path="*" element={<div>No match</div>} />
    </Routes>
  );
}
