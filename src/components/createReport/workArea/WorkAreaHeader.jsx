import React from "react";
import "./workArea.css";

const WorkAreaHeader = () => {
  return (
    <>
    <section className="m-2">

      <div className="header-side-bars">
        <div className="row d-flex justify-content-around text-center">
          <div className="col-md-3 mt-4 ">
            <p className="" style={{ fontWeight: "bold" }}>
              Report editor
            </p>
          </div>
          <div className="col-md-3 mt-4 ">
            <p className="">
              {" "}
              <span
                className="p-2 "
                style={{ backgroundColor: "#D9D9D9", borderRadius: "7px" }}
              >
                Click to view Fullscreen
              </span>{" "}
            </p>
          </div>
          <div className="col-md-3 mt-4 ">
            <p className="">
              {" "}
              <span
                className="p-2"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "7px" }}
              >
                {" "}
                Export to PDF
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WorkAreaHeader;
