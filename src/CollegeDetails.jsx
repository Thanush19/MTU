import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CollegeDetails = () => {
  const navigate = useNavigate();

  // Hardcoded college data
  const collegeData = {
    name: "Tech Innovators Institute",
    location: "Chennai, Tamil Nadu",
    fees: "₹1,20,000 per year",
    features: [
      "Modern Labs",
      "Experienced Faculty",
      "Incubation Center",
      "Placement Support",
    ],
    rating: 4.5,
    chartsData: [
      { category: "Placements", value: 85 },
      { category: "Infrastructure", value: 90 },
      { category: "Faculty", value: 80 },
      { category: "Extracurricular", value: 70 },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        College Details
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">
          {collegeData.name}
        </h2>
        <p className="text-gray-400 mb-4">Location: {collegeData.location}</p>
        <p className="text-gray-400 mb-4">Fees: {collegeData.fees}</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-4 mb-2">
          Key Features
        </h3>
        <ul className="text-gray-300">
          {collegeData.features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-2">
          Overall Student Rating
        </h3>
        <p className="text-2xl font-bold text-green-400">
          ⭐ {collegeData.rating} / 5
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mt-6">
        <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center">
          College Performance Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={collegeData.chartsData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <XAxis dataKey="category" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              cursor={{ fill: "#333" }}
              contentStyle={{ backgroundColor: "#111", color: "#fff" }}
            />
            <Bar
              dataKey="value"
              fill="#facc15"
              barSize={30}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg text-lg transition duration-300 shadow-lg"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default CollegeDetails;
