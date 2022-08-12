import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./myReport.css";
const TemplateCreation = () => {
  const navigation = useNavigate();
  const [tempData, setTempData] = useState({
    tempName: "",
    tempEditor: "",
    header: "",
    footer: "",
  });

  const OnInputChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
  };

  const createReport = async () => {
    const result = await axios.post(
      "http://localhost:8080/api/v1/template/",
      tempData
    );
    navigation(`/viewReport/`);
  };
  return (
    <>
      <div className="header-side-bar">
        <div className="row d-flex justify-content-between text-center">
          <div className="col-md-3 mt-4 ">
            <h2 className="" style={{}}>
              Template Create
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
                  <b>Template Name:</b>
                </label>
                <div className="col-sm-8">
                  <input
                    name="tempName"
                    onChange={OnInputChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-4 col-form-label ">
                  <b>Template Editor :</b>
                </label>
                <div className="col-sm-8">
                  <input
                    name="tempEditor"
                    onChange={OnInputChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-4 col-form-label ">
                  <b>Header:</b>
                </label>
                <div className="col-sm-8">
                  <input
                    name="header"
                    onChange={OnInputChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-4 col-form-label ">
                  <b>Footer:</b>
                </label>
                <div className="col-sm-8">
                  <input
                    name="footer"
                    onChange={OnInputChange}
                    type="text"
                    className="form-control m-1"
                  />
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

export default TemplateCreation;
