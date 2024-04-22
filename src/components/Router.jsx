import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

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
            <Login/>
          </Layout>
        }
        
        >
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
