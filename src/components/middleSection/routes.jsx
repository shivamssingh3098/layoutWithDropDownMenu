import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
// import CreateReport from "../createReport/CreateReport";
// import { Loder } from "../spinner/spinner";

// Import Components to Show in Middle Section

const ViewReport = React.lazy(() => import("../reportOpen/ReportOpen"));
const CreateReport = React.lazy(() => import("../reportCreate/ReportCreate"));
const TemplateCreation = React.lazy(() =>
  import("../templateCreate/templateCreate")
);
const CreateChapter = React.lazy(() => import("../createReport/createChapter"));

const Middle = () => {
  const params = useParams();
  return (
    // <React.Suspense fallback={<Loder />}>
    <Routes>
      <Route path="/" element={<Navigate replace to="/viewReport" />} />
      <Route path="/viewReport" element={<ViewReport />}></Route>
      <Route path="/createReport" element={<CreateReport />}></Route>
      <Route path="/templateCreation" element={<TemplateCreation />}></Route>
      <Route path="/createChapter/:id" element={<CreateChapter />}></Route>
    </Routes>
    // </React.Suspense>
  );
};

export default Middle;
