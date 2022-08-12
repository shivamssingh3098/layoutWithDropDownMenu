import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./myReport.css";
const MyReport = () => {
  const navigation = useNavigate();
  const [tempList, setTempList] = useState([]);
  const [reportData, setReportData] = useState({
    name: "",
    author: "",
    industry: "",
    template: "",
  });

  const OnInputChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  const createReport = async () => {
    const result = await axios.post(
      "http://localhost:8080/api/v1/report",
      reportData
    );
    navigation(`/createChapter/${result.data.newReport._id}`);
  };
  const getAllTemp = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/template/");
    setTempList(result.data.templateList);
  };
  useEffect(() => {
    getAllTemp();
  }, []);
  return (
    <>
      <div className="header-side-bar">
        <div className="row d-flex justify-content-between text-center">
          <div className="col-md-3 mt-4 ">
            <h2 className="" style={{}}>
              Report Creator
            </h2>
          </div>

          {/* <div className="col-md-3 mt-4 ">
            <link >
              {" "}
              <span
                className="p-2"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "7px" }}
              >
                {" "}
                Create a new Report
              </span>
            </li>
          </div> */}
        </div>

        <section>
          <div className="row">
            <div className="col-md-8 m-5 p-1 p-sm-5">
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-4 col-form-label ">
                  <b>Report Name:</b>
                </label>
                <div className="col-sm-8">
                  <input
                    name="name"
                    onChange={OnInputChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-4 col-form-label ">
                  <b>Author :</b>
                </label>
                <div className="col-sm-8">
                  <input
                    name="author"
                    onChange={OnInputChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-4 col-form-label ">
                  <b>Report Industry:</b>
                </label>
                <div className="col-sm-8">
                  <input
                    name="industry"
                    onChange={OnInputChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-4 col-form-label ">
                  <b>Select Template:</b>
                </label>
                <div className="col-sm-8 d-flex justify-content-around ">
                  {tempList.map((item, index) => (
                    <>
                      {reportData.template === item._id ? (
                        <div
                          className="card"
                          style={{
                            width: "10rem",
                            cursor: "pointer",
                            backgroundColor: "rgba(255, 255, 255,",
                          }}
                          key={item._id}
                        >
                          <div
                            className="card-body"
                            onClick={() =>
                              setReportData({
                                ...reportData,
                                template: item._id,
                              })
                            }
                          >
                            <h5 className="card-title">{item.header}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Body
                            </h6>
                            <p className="card-title">{item.footer}</p>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="card"
                          style={{ width: "10rem", cursor: "pointer" }}
                          key={item._id}
                        >
                          <div
                            className="card-body"
                            onClick={() =>
                              setReportData({
                                ...reportData,
                                template: item._id,
                              })
                            }
                          >
                            <h5 className="card-title">{item.header}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                              Body
                            </h6>
                            <p className="card-title">{item.footer}</p>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-md-8 m-5 mt-1 p-5 pt-1 ">
            <p className="">
              {" "}
              <span
                className="p-2"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "7px" }}
                onClick={createReport}
              >
                {" "}
                Create
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReport;
