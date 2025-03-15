import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const competitorData = [
  { name: "Tech Innovators", placements: 85, labs: 80, departments: 75 },
  {
    name: "Future Engineers College",
    placements: 78,
    labs: 85,
    departments: 70,
  },
  { name: "NextGen University", placements: 82, labs: 88, departments: 80 },
];

const CompetitorAnalysis = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Competitor Analysis
      </h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mb-6">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">
          Comparison of Top Competitor Colleges
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={competitorData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: "#111", color: "#fff" }}
            />
            <Legend />
            <Bar
              dataKey="placements"
              fill="#facc15"
              barSize={40}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="labs"
              fill="#22c55e"
              barSize={40}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="departments"
              fill="#3b82f6"
              barSize={40}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-around gap-6 w-full max-w-4xl">
        {competitorData.map((college, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md w-72 text-center"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {college.name}
            </h3>
            <p className="text-gray-400">
              🏅 Placements: {college.placements}%
            </p>
            <p className="text-gray-400">🔬 Labs: {college.labs}% equipped</p>
            <p className="text-gray-400">
              📚 Departments: {college.departments}% specialization
            </p>
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

export default CompetitorAnalysis;
