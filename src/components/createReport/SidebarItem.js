import { useState } from "react";
import {
  IoArrowDownCircleOutline,
  IoEllipsisVerticalCircle,
  IoAddCircleOutline,
  IoPencil,
} from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.subTopics) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            {/* {item.icon && <i className={item.icon}></i>} */}
            {item.subTopicsName}
          </span>
          <div style={{ float: "right" }}>
          <span onClick={() => console.log(item._id)}>
            <IoEllipsisVerticalCircle />
            <ul    class="dropdown-menu list-action-li"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <IoAddCircleOutline />
                        Add
                    </li>
                    <li>
                    <MdOutlineDeleteOutline />
                        Update
                    </li>
                    <li>
                    <IoPencil />
                        Delete
                    </li>
                  </ul>
          </span>

          <span
            className="bi-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
            // onClick={() => console.log(item.subTopicsName)}
          >
            <IoArrowDownCircleOutline />
          </span>
          </div>
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
