import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Formdetails from "../pages/Formdetails";

import About from "../pages/About";


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
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        >

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default Router;
