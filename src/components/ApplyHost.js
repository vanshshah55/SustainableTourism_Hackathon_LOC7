import React, { useState } from 'react';
import { db } from '../components/firebase';
import { collection, addDoc } from 'firebase/firestore';

const ApplyHost = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    age: '',
    gender: '',
    experience: '',
    skills: '',
    availability: '',
    image: null
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'hosts'), formData);
      alert('Application submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        age: '',
        gender: '',
        experience: '',
        skills: '',
        availability: '',
        image: null
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="py-20 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-white mb-4">Apply to Become a Host</h1>
        <p className="text-gray-400 text-lg mb-8">Share your culture, skills, and heritage with travelers from around the world.</p>
        <form className="bg-neutral-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">Name <span className="text-red-500">*</span></label>
            <input type="text" id="name" className="w-full p-2 rounded bg-neutral-700 text-white" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">Email <span className="text-red-500">*</span></label>
            <input type="email" id="email" className="w-full p-2 rounded bg-neutral-700 text-white" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number <span className="text-red-500">*</span></label>
            <input type="tel" id="phone" className="w-full p-2 rounded bg-neutral-700 text-white" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-400 mb-2">Location <span className="text-red-500">*</span></label>
            <input type="text" id="location" className="w-full p-2 rounded bg-neutral-700 text-white" value={formData.location} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-400 mb-2">Age <span className="text-red-500">*</span></label>
            <input type="number" id="age" className="w-full p-2 rounded bg-neutral-700 text-white" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-400 mb-2">Gender <span className="text-red-500">*</span></label>
            <select id="gender" className="w-full p-2 rounded bg-neutral-700 text-white" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-400 mb-2">Experience <span className="text-red-500">*</span></label>
            <textarea id="experience" className="w-full p-2 rounded bg-neutral-700 text-white" rows="4" value={formData.experience} onChange={handleChange} required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="skills" className="block text-gray-400 mb-2">Skills and Expertise <span className="text-red-500">*</span></label>
            <textarea id="skills" className="w-full p-2 rounded bg-neutral-700 text-white" rows="4" value={formData.skills} onChange={handleChange} required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="availability" className="block text-gray-400 mb-2">Availability <span className="text-red-500">*</span></label>
            <input type="text" id="availability" className="w-full p-2 rounded bg-neutral-700 text-white" value={formData.availability} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-400 mb-2">Upload Image <span className="text-red-500">*</span></label>
            <input type="file" id="image" className="w-full p-2 rounded bg-neutral-700 text-white" onChange={handleImageChange} required />
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyHost;