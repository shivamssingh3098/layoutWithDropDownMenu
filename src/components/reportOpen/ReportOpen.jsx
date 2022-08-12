import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./reportOpen.css";

const ReportOpen = () => {
  const [reportList, setReportList] = useState([]);

  const getReports = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/report/my-report`
    );
    setReportList(result.data.Reports);
  };

  useEffect(() => {
    getReports();
  }, []);
  return (
    <>
      <div className="header-side-bar">
        <div className="row d-flex justify-content-between text-center">
          <div className="col-md-3 mt-4 ">
            <h2 className="" style={{}}>
              My Reports
            </h2>
          </div>

          <div className="col-md-3 mt-4 ">
            <Link to="/createReport">
              {" "}
              <span
                className="p-2"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "7px" }}
              >
                {" "}
                Create a new Report{""}
              </span>
            </Link>
          </div>
        </div>

        <section className="p-5">
          <div
            className="row"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            {reportList
              ? reportList.map((item, index) => {
                  return (
                    <div>
                      <div className="col m-2 ">
                        <p key={item._id}>
                          {item.name}
                          <span className="report-color">
                            user: {item.author}
                          </span>{" "}
                          <Link to={`/createChapter/${item._id}`}>
                            <span className="report-btn ps-5 pb-1 pe-5 ms-5">
                              Open
                            </span>{" "}
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                })
              : ""}
            {/* Report End */}
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportOpen;
