import React, { useState, useEffect, useParams } from "react";
import "./chapterSidebarStyle.css";

const ChapterSideBar = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="chapter-side-bar">
        <div className="row">
          <div className="col text-center mt-4 ">
            <p className="" style={{ fontWeight: "bold" }}>
              Create a report: {data.name}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col p-3">
            <p style={{ fontWeight: "bold", color: "red" }}>Chapters </p>
            <ul className="chapters-list"></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterSideBar;
