import SidebarItem from "./SidebarItem";

export default function Sidebar({ items, handleModal, tabClick, deleteSub }) {
  return (
    <div className="sidebar">
      <div styles={{ width: "100%" }}>
        <span onClick={handleModal}>Add Chapter</span>
      </div>
      {items
        ? items.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              handleModal={handleModal}
              tabClick={tabClick}
              deleteSub={deleteSub}
            />
          ))
        : ""}
    </div>
  );
}
