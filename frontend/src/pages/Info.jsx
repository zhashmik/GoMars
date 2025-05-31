import React, { useState } from 'react';
import './Info.css';
import { handleError, handleSuccess } from '../util';
import { useNavigate } from 'react-router-dom';

function Info() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    // Travel Preferences
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    // Health & Safety
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const requiredFields = {
      1: ['firstName', 'lastName', 'dateOfBirth', 'nationality', 'email', 'phone'],
      2: ['departureDate', 'returnDate', 'accommodation'],
      3: ['healthDeclaration', 'emergencyContact']
    };

    const missingField = requiredFields[step].find(field => !formData[field]);
    if (missingField) {
      handleError("Please fill out all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    // Final Submit
    try {
      const response = await fetch("https://gomarsbackend.onrender.com/auth/Info", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/thankYou"), 1000);
      } else {
        handleError(error || message || "Submission failed");
      }
    } catch (err) {
      handleError(err.message || "Server error");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div><label>First Name</label><input name="firstName" value={formData.firstName} onChange={handleChange} /></div>
            <div><label>Last Name</label><input name="lastName" value={formData.lastName} onChange={handleChange} /></div>
            <div><label>Date of Birth</label><input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /></div>
            <div><label>Nationality</label><input name="nationality" value={formData.nationality} onChange={handleChange} /></div>
            <div><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} /></div>
            <div><label>Phone</label><input name="phone" value={formData.phone} onChange={handleChange} /></div>
          </>
        );
      case 2:
        return (
          <>
            <div><label>Departure Date</label><input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} /></div>
            <div><label>Return Date</label><input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} /></div>
            <div>
              <label>Accommodation</label>
              <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Space Hotel">Space Hotel</option>
                <option value="Martian Base">Martian Base</option>
              </select>
            </div>
            <div><label>Special Requests</label><textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} /></div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <label>Health Declaration</label>
              <select name="healthDeclaration" value={formData.healthDeclaration} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div><label>Emergency Contact</label><input name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} /></div>
            <div><label>Medical Conditions</label><textarea name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} /></div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-page"
      style={{
        backgroundImage: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(26, 32, 44, 0.3)), url('/Blog_Mars_Header.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'contrast(1.2) brightness(1.05)',
      }}>
      <div className="form-container">
        <h1>{step === 1 ? "Personal Information" : step === 2 ? "Travel Preferences" : "Health & Safety"}</h1>
        <form onSubmit={handleSubmit}>
          {renderStep()}
          <div className="button-group">
            <button
              type="button"
              onClick={() => {
                if (step === 1) {
                  navigate('/'); 
                } else {
                  setStep(step - 1);
                }
              }}
            >
            Back
            </button>
            <button type="submit">{step === 3 ? 'Submit' : 'Next'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Info;
