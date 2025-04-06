import {Outlet, Link} from "react-router-dom"; //outlet is used to render the child components of the current route, link is used to create links to other routes
import React from "react";
const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/degrees">Degrees</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet /> {/* This is where the child components will be rendered */}
    </div>
  );
}
export default App;