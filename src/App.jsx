import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  const [isClicked, setIsClicked] = useState("/domains");

  const handleClick = (path) => {
    setIsClicked(path);
  };

  return (
    <>
      <nav>
        <NavLink
          to="/domains"
          className={() =>
            `nav-link  ${isClicked === "/domains" ? "nav-link-clicked" : ""}`
          }
          onClick={() => handleClick("/domains")}
        >
          Domains
        </NavLink>
        <NavLink
          to="/webhosting"
          className={() =>
            `nav-link  ${isClicked === "/webhosting" ? "nav-link-clicked" : ""}`
          }
          onClick={() => handleClick("/webhosting")}
        >
          Web Hosting
        </NavLink>
        <NavLink
          to="/dedicatedservers"
          className={() =>
            `nav-link  ${
              isClicked === "/dedicatedservers" ? "nav-link-clicked" : ""
            }`
          }
          onClick={() => handleClick("/dedicatedservers")}
        >
          Dedicated Servers
        </NavLink>
        <NavLink
          to="/virtualcloud"
          className={() =>
            `nav-link  ${
              isClicked === "/virtualcloud" ? "nav-link-clicked" : ""
            }`
          }
          onClick={() => handleClick("/virtualcloud")}
        >
          Virtual Cloud Servers
        </NavLink>
        <NavLink
          to="/wordpress"
          className={() =>
            `nav-link  ${isClicked === "/wordpress" ? "nav-link-clicked" : ""}`
          }
          onClick={() => handleClick("/wordpress")}
        >
          WordPress Hosting
        </NavLink>
        <NavLink
          to="/emailhosting"
          className={() =>
            `nav-link  ${
              isClicked === "/emailhosting" ? "nav-link-clicked" : ""
            }`
          }
          onClick={() => handleClick("/emailhosting")}
        >
          Email Hosting
        </NavLink>
        <NavLink
          to="/vpshosting"
          className={() =>
            `nav-link  ${isClicked === "/vpshosting" ? "nav-link-clicked" : ""}`
          }
          onClick={() => handleClick("/vpshosting")}
        >
          VPS Hosting Servers
        </NavLink>
        <NavLink
          to="/freeHosting"
          className={() =>
            `nav-link  ${
              isClicked === "/freeHosting" ? "nav-link-clicked" : ""
            }`
          }
          onClick={() => handleClick("/freeHosting")}
        >
          Free Hosting
        </NavLink>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
