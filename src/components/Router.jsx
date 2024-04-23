import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
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
