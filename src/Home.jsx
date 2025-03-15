import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Re-View</h1>
      <p className="text-lg font-semibold text-gray-300 mb-6 text-center">
        Your College, Your Story – Guiding the Next Generation.
      </p>

      <p className="text-center max-w-2xl text-gray-400 mb-10 leading-relaxed">
        Re-View is a platform where students share their college experiences,
        helping others make informed decisions. Whether you're a student
        documenting your journey, an aspirant searching for the right college,
        or an institution seeking competitive insights, Re-View brings
        transparency and valuable data to education.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => navigate("/students-reviews")}
          className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-lg transition duration-300 border border-gray-700 shadow-lg"
        >
          Students Sharing Reviews
        </button>
        <button
          onClick={() => navigate("/students-looking-colleges")}
          className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-lg transition duration-300 border border-gray-700 shadow-lg"
        >
          Students Looking for Colleges
        </button>
        <button
          onClick={() => navigate("/colleges-insights")}
          className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-lg transition duration-300 border border-gray-700 shadow-lg"
        >
          Colleges Analyzing Insights
        </button>
      </div>
    </div>
  );
};

export default Home;
