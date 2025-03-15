import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StudentsReviews from "./StudentsReviews";
import Dashboard from "./Dashboard";
import StudentCollegeForm from "./StudentCollegeForm";
import CollegeDetails from "./CollegeDetails";

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
        {/* Future routes */}
        {/* <Route path="/colleges-insights" element={<CollegesInsights />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
