import React, { useState } from "react";
import emailjs from "emailjs-com";
import yourImage from '../assets/display-image.jpg'; // Import your image

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: ""
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
        phone: formData.phone
      };

      const response = await emailjs.send(
        "service_2mr4ogr", 
        "template_81poifc", 
        templateParams,
        "R7wHrRQKYtT1nBLG-" 
      );

      console.log("Email sent successfully!", response);
      alert("Form submitted successfully!");
      setShowPopup(false);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="glass p-8 rounded-lg w-full max-w-md mt-24 mb-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Join Our Team</h1>
        
        {/* Display Image - Larger Size */}
        <div className="mb-8 flex justify-center">
          <div className="w-64 h-64 border-2 border-gray-600 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={yourImage} 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <form className="space-y-6">
          {/* Input Fields */}
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
              
              <div className="mt-6">
                <p className="font-medium mb-2">Image Preview:</p>
                <div className="w-48 h-48 mx-auto border border-gray-600 rounded-lg overflow-hidden">
                  <img 
                    src={yourImage} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

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
