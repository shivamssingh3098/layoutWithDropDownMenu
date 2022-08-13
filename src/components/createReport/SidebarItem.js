import { useState } from "react";
import {
  IoArrowDownCircleOutline,
  IoEllipsisVerticalCircle,
  IoAddCircleOutline,
  IoPencil,
} from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
// import Modal from "../popupModal/modal";

export default function SidebarItem({ item, handleModal, tabClick, deleteSub }) {
  const [open, setOpen] = useState(false);

  if (item.subTopics) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span  onClick={()=> {tabClick(item)}}>
            {/* {item.icon && <i className={item.icon}></i>} */}
            {item.subTopicsName}
          </span>
          <div style={{ float: "right" }}>
          <span onClick={() => {handleModal(item)}}>
          <IoAddCircleOutline />
          </span>
          <span onClick={() => {deleteSub(item._id )}}>
          <MdOutlineDeleteOutline />
          </span>
          {/* <span onClick={() => console.log(item._id)}>
            <IoEllipsisVerticalCircle />
          </span> */}

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
          {item.subTopics.map((subTopics, index) => (
            <SidebarItem key={index} item={subTopics} handleModal={handleModal} tabClick={tabClick} deleteSub={deleteSub} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span href={item.path || "#"} className="sidebar-item plain">
        {item.subTopicsName}
        <div style={{ float: "right" }}>
          <span onClick={() => {handleModal(item)}}>
          <IoAddCircleOutline />
          </span>
          <span onClick={() => {deleteSub(item._id )}}>
          <MdOutlineDeleteOutline />
          </span>
          </div>
      </span>
    );
  }
}
