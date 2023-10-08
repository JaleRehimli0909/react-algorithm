import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  Link,
} from "react-router-dom";

import { Button, Result } from "antd";

import Home from "./Home";
import Test from "./Test";
import Contact from "./Contact";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>

        <Route path="*" element={<Navigate to="/404" />} />
        <Route
          path="404"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Button type="primary">
                  <Link to="/"> Back Home</Link>
                </Button>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
