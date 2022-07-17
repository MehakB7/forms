import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";

const getSubRoutes = (routes) => {
  if (!routes || routes.length < 0) {
    return null;
  }
  return getRoutes(routes);
};

const getRoutes = (route) => {
  return route.map((item, index) => {
    return <Route {...item}>{getSubRoutes(item.routes)}</Route>;
  });
};

export const AllRoutes = () => {
  return <Routes>{getRoutes(routes)}</Routes>;
};
