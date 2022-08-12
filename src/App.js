import "./App.css";
import { Router } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import WorkAreaHeader from "./components/createReport/workArea/WorkAreaHeader";
import ReportOpen from "./components/reportOpen/ReportOpen";
import MyReport from "./components/reportCreate/ReportCreate";
import TemplateCreation from "./components/templateCreate/templateCreate";
import Middle from "./components/middleSection/routes";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-start">
        <SideBar />
        <Middle />
        {/* <TemplateCreation /> */}
        {/* <MyReport /> */}
        {/* <ReportOpen /> */}
        {/* <ChapterSideBar /> */}
        {/* <WorkAreaHeader /> */}
      </div>
    </>
  );
}

export default App;
