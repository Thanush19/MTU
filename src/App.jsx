import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StudentsReviews from "./StudentsReviews";
import Dashboard from "./Dashboard";
import StudentCollegeForm from "./StudentCollegeForm";
import CollegeDetails from "./CollegeDetails";
import CollegeInsights from "./CollegeInsights";
import CompetitorAnalysis from "./CompetitorAnalysis";
import StudentsInsights from "./StudentsInsights";
import StudentsPreferences from "./StudentPreferences";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students-reviews" element={<StudentsReviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/students-looking-colleges"
          element={<StudentCollegeForm />}
        />
        <Route path="/college-details" element={<CollegeDetails />} />
        <Route path="/colleges-insights" element={<CollegeInsights />} />
        <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
        <Route path="/students-insights" element={<StudentsInsights />} />
        <Route path="/students-preferences" element={<StudentsPreferences />} />
      </Routes>
    </Router>
  );
}

export default App;
