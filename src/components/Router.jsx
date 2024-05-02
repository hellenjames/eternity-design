import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Formdetails from "../pages/Formdetails";

import Designer from "../pages/Designer";
import Rocky from "../pages/Rocky";
import Payments from "../pages/Payments";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Notfound />
            </Layout>
          }
        />

        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/formdetails"
          element={
            <Layout>
              <Formdetails />
            </Layout>
          }
        ></Route>

        <Route
          path="/designer"
          element={
            <Layout>
              <Designer />
            </Layout>
          }
        />
        <Route
          path="/rocky"
          element={
            <Layout>
              <Rocky />
            </Layout>
          }
        />
        <Route
          path="/payments"
          element={
            <Layout>
              <Payments />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
