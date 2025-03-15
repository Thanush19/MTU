import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const CollegeInsights = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-white mb-4">College Insights</h1>
      <div className="flex flex-col gap-4 w-full max-w-lg">
        <button
          onClick={() => navigate("/competitor-analysis")}
          className="w-full px-6 py-3  bg-gray-900 hover:bg-gray-800  text-white font-semibold rounded-lg text-lg transition duration-300 shadow-lg"
        >
          Get Competitor Analysis
        </button>
        <button
          onClick={() => navigate("/students-insights")}
          className="w-full px-6 py-3  bg-gray-900 hover:bg-gray-800  text-white font-semibold rounded-lg text-lg transition duration-300 shadow-lg"
        >
          Get Students’ Details
        </button>
        <button
          onClick={() => navigate("/students-preferences")}
          className="w-full px-6 py-3  bg-gray-900 hover:bg-gray-800  text-white font-semibold rounded-lg text-lg transition duration-300 shadow-lg"
        >
          What Students Prefer
        </button>
      </div>
      <button
        onClick={() => navigate("/college-details")}
        className="mt-6 px-6 py-3  bg-gray-900 hover:bg-gray-800  text-white font-semibold rounded-lg text-lg transition duration-300 shadow-lg"
      >
        Back to College Details
      </button>
    </div>
  );
};

export default CollegeInsights;
