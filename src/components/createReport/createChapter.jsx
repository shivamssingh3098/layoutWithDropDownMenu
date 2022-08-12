import React, { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import WorkAreaHeader from "./workArea/WorkAreaHeader";
import ChapterSideBar from "./chapterSidebar/ChapterSideBar";
const axios = require("axios");

function CreateChapter() {
    const params = useParams();
    const [reportData, setReportData] = useState("");
    const [chapterList, setChapterList] = useState([]);
    
    const getData = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/report/single-report/${params.id}`);
        setReportData(result.data.reportData);
    }
    useEffect(() => {  
        getData()
     }, [])
  return (
    <>
      {/* <div className=""> */}
        {/* <WorkAreaHeader /> */}
        <div className="d-flex flex-container align-items-center">
        {/* <div className="col-md-3"> */}
            <ChapterSideBar data={reportData} />
        {/* </div> */}
        {/* <div className="col-md-9 "> */}
            <h1>hello</h1>
        {/* </div> */}
        </div>
    {/* </div> */}
    </>
  );
}

export default CreateChapter;
