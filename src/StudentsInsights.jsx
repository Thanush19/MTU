import React from "react";
import { useNavigate } from "react-router-dom";

const StudentsInsights = () => {
  const navigate = useNavigate();

  const studentsData = [
    {
      name: "Meenatchi",
      tenthMark: 85,
      twelfthMark: 92,
      preference: "Engineering",
      interest: "AI/ML",
    },
    {
      name: "Karthik",
      tenthMark: 78,
      twelfthMark: 88,
      preference: "Medicine",
      interest: "Biotech",
    },
    {
      name: "Priya",
      tenthMark: 91,
      twelfthMark: 95,
      preference: "Commerce",
      interest: "Finance",
    },
    {
      name: "Arun",
      tenthMark: 80,
      twelfthMark: 85,
      preference: "Engineering",
      interest: "Robotics",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Students' Insights
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full max-w-4xl">
        {studentsData.map((student, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">
              {student.name}
            </h2>
            <p className="text-gray-400">10th Mark: {student.tenthMark}%</p>
            <p className="text-gray-400">12th Mark: {student.twelfthMark}%</p>
            <p className="text-gray-400">Preference: {student.preference}</p>
            <p className="text-gray-400">Interest: {student.interest}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/colleges-insights")}
        className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg text-lg transition duration-300 shadow-lg"
      >
        Back to College Insights
      </button>
    </div>
  );
};

export default StudentsInsights;
