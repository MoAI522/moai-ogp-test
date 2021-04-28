import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import UserPage from "./UserPage";

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        component={() => (
          <h1>
            Top
            <br />
            <Link to="/users/66666/">Link</Link>
          </h1>
        )}
      />
      <Route path="/users/:user_name/" exact component={UserPage} />
    </BrowserRouter>
  );
};
export default Layout;
