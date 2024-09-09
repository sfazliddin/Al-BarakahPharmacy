/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";

const RefillPrescription = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prescriptionNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9fdk89i",
        "template_it24irn",
        e.target,
        "X530cKGCfmccHKkDd"
      )
      .then(
        (result) => {
          setStatus("Prescription refill request sent successfully!");
          setFormData({
            name: "",
            email: "",
            prescriptionNumber: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send request. Please try again.");
        }
      );
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Refill Prescription</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prescriptionNumber" className="form-label">
            Prescription Number
          </label>
          <input
            type="text"
            className="form-control"
            id="prescriptionNumber"
            name="prescriptionNumber"
            value={formData.prescriptionNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Request
        </button>
      </form>
      {status && <div className="mt-3">{status}</div>}
    </div>
  );
};

export default RefillPrescription;
