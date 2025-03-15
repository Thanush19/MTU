import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [streak, setStreak] = useState(0);
  const [collegeName, setCollegeName] = useState("");
  const [reviews, setReviews] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Load stored data
    const storedData = JSON.parse(localStorage.getItem("reviewData"));
    const storedStreak = localStorage.getItem("streak");

    if (storedData) {
      setCollegeName(storedData.collegeName);
      setReviews(1); // Assuming 1 review per submission
    }

    if (storedStreak) {
      setStreak(parseInt(storedStreak));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Dashboard</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="text-6xl mb-4">🔥</div>
        <h2 className="text-xl font-semibold text-white">
          Streak: {streak} Day{streak !== 1 ? "s" : ""}
        </h2>
        <p className="text-gray-300 mt-2">Keep submitting reviews daily!</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mt-6 text-center">
        <h2 className="text-xl font-semibold text-white">Your College</h2>
        <p className="text-gray-400">{collegeName || "No college selected"}</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mt-6 text-center">
        <h2 className="text-xl font-semibold text-white">Total Reviews</h2>
        <p className="text-gray-400">{reviews}</p>
      </div>

      {/* Button to return to Home */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Dashboard;
