import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentCollegeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    interest: "",
    city: "",
    tenthMark: "",
    twelfthMark: "",
    techInterest: "",
    collegeType: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("studentData", JSON.stringify(formData));
    setTimeout(() => localStorage.removeItem("studentData"), 5 * 60 * 1000);
    navigate("/college-details");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Student College Form</h1>
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.replace(/([A-Z])/g, " $1").trim()}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500"
            required
          />
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentCollegeForm;
