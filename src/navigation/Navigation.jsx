import React from "react";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import {
  Services,
  Home,
  About,
  Projects,
  Contact,
  Resources
} from "../screens/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <Home />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollRestoration />
        <Contact />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <ScrollRestoration />
        <Projects />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollRestoration />
        <About />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <ScrollRestoration />
        <Services />
      </>
    ),
  },
  {
    path: "/resources",
    element: (
      <>
        <ScrollRestoration />
        <Resources />
      </>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;

