import React from "react";
import Home from "../pages/Home";

interface RouterComponent {
  name: string;
  path: string;
  component: React.ReactNode;
}

const routers: RouterComponent[] = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "index",
    path: "/",
    component: Home,
  },
];

export default routers;
