import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    role: "",
    experience: "",
    motivation: ""
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.experience) newErrors.experience = "Experience level is required";
    if (!formData.motivation) newErrors.motivation = "Motivation is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePreview = () => {
    if (validateForm()) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const sendEmail = async () => {
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        age: formData.age,
        phone: formData.phone,
        role: formData.role,
        experience: formData.experience,
        motivation: formData.motivation
      };

      const response = await emailjs.send(
        "service_2mr4ogr", 
        "template_81poifc", 
        templateParams,
        "R7wHrRQKYtT1nBLG-" 
      );

      console.log("Email sent successfully!", response);
      alert("Application submitted successfully!");
      setShowPopup(false);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="glass p-8 rounded-lg w-full max-w-md mt-24 mb-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Join Our Team</h1>
        <form className="space-y-6">
          {/* Input Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Input Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your age"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
          </div>

          {/* Input Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your WhatsApp number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Input Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Role in Programming
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Fullstack Developer">Fullstack Developer</option>
              <option value="Mobile Developer">Mobile Developer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Machine Learning Engineer">Machine Learning Engineer</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>

          {/* Input Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium mb-2">
              Level of Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select your experience level
              </option>
              <option value="Fresh Graduate">Fresh Graduate</option>
              <option value="Junior (1-2 years)">Junior (1-2 years)</option>
              <option value="Mid-Level (3-5 years)">Mid-Level (3-5 years)</option>
              <option value="Senior (5+ years)">Senior (5+ years)</option>
            </select>
            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
          </div>

          {/* Input Motivation */}
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium mb-2">
              What motivates you to join our team?
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Share your motivation..."
            />
            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handlePreview}
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Preview Data
          </button>
        </form>

        {/* Popup Preview */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="glass p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Preview Data</h2>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Age:</strong> {formData.age}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Role:</strong> {formData.role}</p>
              <p><strong>Experience:</strong> {formData.experience}</p>
              <p><strong>Motivation:</strong> {formData.motivation}</p>
              <div className="flex justify-end mt-6">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                >
                  Close
                </button>
                <button
                  onClick={sendEmail}
                  disabled={isSubmitting}
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;