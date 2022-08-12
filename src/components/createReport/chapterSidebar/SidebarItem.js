import { useState } from "react";
import "./sidebarItem.module.css";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.subTopics) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {/* { item.icon && <i className={item.icon}></i> } */}
            {item.subTopicsName}
          </span>
          <i
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.subTopics.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        {/* {item.icon && <i className={item.icon}></i>} */}
        {item.subTopicsName}
      </a>
    );
  }
}
