import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentsReviews = () => {
  const [collegeName, setCollegeName] = useState("");
  const [review, setReview] = useState("");
  const [savedData, setSavedData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load saved data from localStorage
    const storedData = JSON.parse(localStorage.getItem("reviewData"));
    if (storedData && Date.now() < storedData.expiry) {
      setSavedData(storedData);
    } else {
      localStorage.removeItem("reviewData"); // Remove expired data
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data with expiration time (5 mins)
    const reviewData = {
      collegeName,
      review,
      expiry: Date.now() + 5 * 60 * 1000, // 5 minutes
    };

    localStorage.setItem("reviewData", JSON.stringify(reviewData));
    localStorage.setItem("streak", 1); // First-time streak
    setSavedData(reviewData);
    setShowPopup(true);

    // Clear input fields
    setCollegeName("");
    setReview("");

    // Auto-clear data after 5 minutes
    setTimeout(() => {
      localStorage.removeItem("reviewData");
      setSavedData(null);
    }, 5 * 60 * 1000);

    // Redirect to Dashboard after 3 seconds
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Submit Your College Review</h1>

      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-3">
          <span className="text-gray-300">College Name:</span>
          <input
            type="text"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-300">Your Review:</span>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </label>

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>

      {/* Pop-up */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
            <span className="text-yellow-400 text-6xl">⭐</span>
            <h2 className="text-2xl font-bold text-white mt-4">
              You've completed your first review!
            </h2>
            <p className="text-gray-400 mt-2">Your streak has started.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsReviews;
