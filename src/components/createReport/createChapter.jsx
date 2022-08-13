import React, { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar"
import DataModal from "../popupModal/modal";
import { Editor } from "./editor/editor";
import WorkAreaHeader from "./workArea/WorkAreaHeader"
const axios = require("axios");

function CreateChapter() {
    const params = useParams();
    // const [reportData, setReportData] = useState("");
    const [modelOpen, setModalOpen] = useState(false);
    const [chapterList, setChapterList] = useState('');
    const [newName, setNewName] = useState('');
    const [subTopicId, setSubTopicId] = useState('');
    const [activeTeb, setActiveTab] = useState('');
    const [templateData, setTemplateData] = useState('');

    const selectId = (item) => {
        console.log(item)
        setActiveTab(item)

    }
    const modelSubmit = async () => {
        let obj = {
            subTopicName: "",
            reportId: "",
            subTopicId: '',
        }
        if(subTopicId){
            obj = {
                subTopicName: newName,
                subTopicId: subTopicId,
            }
        }else{
            obj = {
                subTopicName: newName,
                reportId: params.id,
            }
        }
        const result = await axios.post("http://localhost:8080/api/v1/subtopic", obj)
        getData()
        setModalOpen(false)
    }
    const onInputChange = (e) => {
    setNewName(e.target.value)
    }
    const handleDelete = async(x) => {
        await axios.delete(`http://localhost:8080/api/v1/subtopic/${x}`)
        getData()
    }

    const handleModal = (x) => {
        console.log(x)
        setSubTopicId(x._id)
        setModalOpen(modelOpen ? false : true)
    }
    const getData = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/report/single-report/${params.id}`);
        if(result.data.reportData.subTopics.length === 0){
            setModalOpen(true)
        }else{
            setChapterList(result.data.reportData.subTopics)
        }
    }

    const textAreaInputChange = (x) => {
        setTemplateData(x)
        console.log(x)
        console.log(` This is Template State Data ${templateData}`)
    }
    useEffect(() => {  
        getData()
     }, [])
  return (
    <>
        <div className="row">
            <WorkAreaHeader />
        </div>
        <div className="main">
        { chapterList ?
        <Sidebar items={chapterList} handleModal={handleModal} tabClick={selectId} deleteSub={handleDelete}/>
        :  ""
        }
      <div className="container-fluid">
        <div className="mt-5" style={{ minWidth: "78vw", minHight: "100vh"}}>
            <Editor handleInput={textAreaInputChange} templateData={templateData} />
        </div>
      </div>
      <DataModal handelModal={handleModal} show={modelOpen} onChange={onInputChange} submit={modelSubmit}/>
    </div>
    </>
  );
}

export default CreateChapter;
