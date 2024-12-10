import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "../pages/Admin/Portfolio";
import Highlights from "../pages/Admin/Highlights";
import Analysis from "../pages/Admin/Analysis";
import Reports from "../pages/Admin/Reports";
import PortfolioUser from "../pages/Portfolio";
import HighlightsUser from "../pages/Highlights";
import AnalysisUser from "../pages/Analysis";
import ReportsUser from "../pages/Reports";
import Home from "../pages/Home";
import AnalysisDetails from "../pages/AnalysisDetails";
import Contact from "../pages/Contact";
import { useAdmin } from "../context/AdminContext";

const RoutesAdmin: React.FC = () => (
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/highlights" element={<Highlights />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/analysis" element={<Analysis />} />
    <Route path="*" element={<Portfolio />} />
  </Routes>
);

const RoutesUser: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<PortfolioUser />} />
    <Route path="/highlights" element={<HighlightsUser />} />
    <Route path="/reports" element={<ReportsUser />} />
    <Route path="/analysis" element={<AnalysisUser />} />
    <Route path="/analysis/:name" element={<AnalysisDetails />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

const RouteHandler: React.FC = () => {
  const { isAdmin } = useAdmin();
  return isAdmin ? <RoutesAdmin /> : <RoutesUser />;
};

export default RouteHandler;
