import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
// import CreateReport from "../createReport/CreateReport";
// import { Loder } from "../spinner/spinner";

// Import Components to Show in Middle Section

// const ViewReport = React.lazy(() => import("../reportOpen/ReportOpen"));
// const CreateReport = React.lazy(() => import("../reportCreate/ReportCreate"));
// const TemplateCreation = React.lazy(() =>
//   import("../templateCreate/templateCreate")
// );
// const CreateChapter = React.lazy(() => import("../createReport/createChapter"));

import ViewReport from "../reportOpen/ReportOpen";
import CreateReport from "../reportCreate/ReportCreate";

import TemplateCreation from "../templateCreate/templateCreate";

import CreateChapter from "../createReport/createChapter";

const Middle = () => {
  const params = useParams();
  return (
    // <React.Suspense fallback={<Loder />}>
    <Routes>
      <Route path="/" element={<Navigate replace to="/viewReport" />} />
      <Route path="/viewReport" element={<ViewReport />} />
      <Route path="/createReport" element={<CreateReport />} />
      <Route path="/templateCreation" element={<TemplateCreation />} />
   
      <Route path="/createChapter" element={ <CreateChapter />} />
    </Routes>
    // </React.Suspense>
  );
};

export default Middle;
