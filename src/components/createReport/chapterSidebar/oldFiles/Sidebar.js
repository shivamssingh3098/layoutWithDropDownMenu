import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SidebarItem from "./SidebarItem";
import "./sidebarItem.css";
// import items from "../data/sidebar.json";

export default function Sidebar({ data }) {
  const params = useParams();
  const [reportData, setReportData] = useState("");
  const [chapterList, setChapterList] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/report/single-report/${params.id}`
    );
    setReportData(result.data.reportData);
    console.log(result.data.reportData.subTopics);
    setChapterList(result.data.reportData.subTopics);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sidebar">
      {chapterList.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
