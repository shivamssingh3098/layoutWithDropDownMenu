import React, { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar"
const axios = require("axios");

function CreateChapter() {
    const params = useParams();
    // const [reportData, setReportData] = useState("");
    const [chapterList, setChapterList] = useState('');
    
    const getData = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/report/single-report/${params.id}`);
        setChapterList(result.data.reportData.subTopics)
    }
    useEffect(() => {  
        getData()
     }, [])
  return (
    <>
        <div className="main">
        { chapterList ?
        <Sidebar items={chapterList}/>
        : ""
        }
      <div className="container">
        {/* <h1 className="title">My React App</h1>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="btn">Explore now</button> */}
      </div>
    </div>
    </>
  );
}

export default CreateChapter;
