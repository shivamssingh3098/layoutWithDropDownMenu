import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./sidebar.css";
import {
  IoMenuOutline,
  IoCreateOutline,
  IoBarcodeOutline,
  IoCreate,
} from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";

const SideBar = () => {
  const [sidebarWidth, setSidebarWidth] = useState("80px");
  const [close, setClose] = useState(false);
  const [open, setOpen] = useState(true);

  // const navigate = useNavigate();

  const [position, setPosition] = useState("static");

  const [list, setList] = useState([
    {
      name: "My Reports",
      icon: <IoCreateOutline />,
      path: "/viewReport",
    },
    {
      name: "My Templates",
      icon: <IoBarcodeOutline />,
      path: "/templateCreation",
    },
    {
      name: "Create Reports",
      icon: <IoCreate />,
      path: "/createReport",
    },
    {
      name: "Preview Report",
      icon: <VscPreview />,
      path: "/previewReport",
    },
  ]);

  const sideBarOpen = () => {
    setSidebarWidth("250px");
    setClose(true);
    setOpen(false);
    setPosition("fixed");
  };
  const closeSidebar = () => {
    setSidebarWidth("80px");
    setPosition("static");
    setClose(false);
    setOpen(true);
  };

  return (
    <>
      <div
        className="sidebar"
        style={{
          width: sidebarWidth,
          position: position,
          backgroundColor: "#E9E9E9",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>

          {close ? (
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={closeSidebar}
            ></button>
          ) : (
            <span
              className="mx-auto"
              style={{ fontSize: "1.5rem" }}
              onClick={sideBarOpen}
            >
              <IoMenuOutline />
            </span>
          )}
        </div>
        <div className="sidebarBody">
          <ul className="side-li">
            {/* <Router> */}
            {list.map((item, index) => {return(
              <li key={index}>
                <Link to={item.path}>
                  {close ? (
                    <p style={{ curser: "pointer" }}>
                      <span
                        style={{
                          fontSize: "1.5rem",
                        }}
                      >
                        {item.icon}
                      </span>
                      <span className="ms-2">{item.name}</span>
                    </p>
                  ) : (
                    <span
                      to={item.path}
                      style={{ fontSize: "1.5rem", curser: "pointer" }}
                    >
                      {item.icon}
                    </span>
                  )}
                </Link>
              </li>
            )})}
            {/* </Router> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
