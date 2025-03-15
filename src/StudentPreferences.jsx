import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const StudentsPreferences = () => {
  const navigate = useNavigate();

  const studentPreferencesData = [
    { city: "Chennai", feeRange: "1-2 Lakhs", cutOff: 180 },
    { city: "Coimbatore", feeRange: "2-3 Lakhs", cutOff: 175 },
    { city: "Bangalore", feeRange: "3-4 Lakhs", cutOff: 185 },
    { city: "Hyderabad", feeRange: "1-2 Lakhs", cutOff: 170 },
  ];

  const feeRangeData = [
    { range: "1-2 Lakhs", value: 40 },
    { range: "2-3 Lakhs", value: 30 },
    { range: "3-4 Lakhs", value: 20 },
    { range: "4+ Lakhs", value: 10 },
  ];

  const technologyPreferences = [
    { tech: "AI/ML", value: 35 },
    { tech: "Cybersecurity", value: 25 },
    { tech: "Data Science", value: 20 },
    { tech: "Robotics", value: 20 },
  ];

  const labPreferences = [
    { lab: "AI Lab", value: 30 },
    { lab: "IoT Lab", value: 25 },
    { lab: "Robotics Lab", value: 20 },
    { lab: "Biotech Lab", value: 25 },
  ];

  const careerAspirations = [
    { career: "Software Engineer", value: 40 },
    { career: "Entrepreneur", value: 20 },
    { career: "Researcher", value: 25 },
    { career: "Consultant", value: 15 },
  ];

  const colors = ["#ffbb33", "#ff4444", "#00C49F", "#4B0082"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        What Students Prefer
      </h1>

      {/* Bar Chart for City Preferences and Cutoff Marks */}
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          City Preferences and 12th Cutoff (Out of 200)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={studentPreferencesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="city" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              cursor={{ fill: "#333" }}
              contentStyle={{ backgroundColor: "#111", color: "#fff" }}
            />
            <Bar
              dataKey="cutOff"
              fill="#facc15"
              barSize={40}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Fee Range Preferences */}
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Preferred Fee Range
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={feeRangeData}
              dataKey="value"
              nameKey="range"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {feeRangeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#111", color: "#fff" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart for Technology Preferences */}
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Technology Preferences
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={technologyPreferences}>
            <XAxis dataKey="tech" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: "#111", color: "#fff" }}
            />
            <Bar dataKey="value" fill="#00C49F" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Career Aspirations */}
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Career Aspirations
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={careerAspirations}
              dataKey="value"
              nameKey="career"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {careerAspirations.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#111", color: "#fff" }}
            />
          </PieChart>
        </ResponsiveContainer>
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

export default StudentsPreferences;
