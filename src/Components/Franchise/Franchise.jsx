import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import "./Franchise.css";
import Whyus from "../Whyus/Whyus";

function Franchise() {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    state: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required.";
      case "address":
        return value.trim() ? "" : "Address is required.";
      case "district":
        return value.trim() ? "" : "District is required.";
      case "state":
        return value.trim() ? "" : "State is required.";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required.";
        if (!/^\d{10}$/.test(value)) return "Enter a valid 10-digit phone number.";
        return "";
      default:
        return "";
    }
  };

  const validateAllFields = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });
    return newErrors;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  // Handle focus to trigger validation
  const handleFocus = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, formData[name]) });
  };

  const handleSubmit = async () => {
    const fieldErrors = validateAllFields();
    if (Object.values(fieldErrors).some((error) => error)) {
      setErrors(fieldErrors);
      setTouched(
        Object.keys(fieldErrors).reduce((acc, key) => ({ ...acc, [key]: true }), {})
      );
      return;
    }

    // Disable the button
    setIsSubmitting(true);

    try {
      // const response = await fetch("http://localhost:5000/send-franchise-details", {
      const response = await fetch("https://rocketbackend.onrender.com/send-franchise-details", {
        method: "POST",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setShowModal(false); // Close the modal
        setShowConfirmation(true); // Show confirmation popup
        setFormData({ name: "", address: "", district: "", state: "", email: "", phone: "" }); // Reset form data
      } else {
        alert("Failed to send details. Please try again.");
      }
    } catch (error) {
      console.error("Error sending details:", error);
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="Fran ">

     
      <div className="row myc my-5">
        <div className="col-lg-8">
          <p className="headtextfran">Let's Grow Together by Building a Franchise</p>
        </div>
        <div className="col-lg-4 imgcl">
          <Button className="butt" onClick={() => setShowModal(true)}>
            Apply Now
          </Button>
        </div>
      </div>

      {/* Modal for input */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Franchise Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Address", name: "address", type: "text" },
              { label: "District", name: "district", type: "text" },
              { label: "State", name: "state", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "phone", type: "text" },
            ].map((field) => (
              <Form.Group key={field.name} className="mb-3">
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  isInvalid={!!errors[field.name]}
                />
                <Form.Control.Feedback type="invalid">
                  {errors[field.name]}
                </Form.Control.Feedback>
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={handleSubmit}
            disabled={isSubmitting} // Disable while submitting
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Popup */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)} centered>
        <Modal.Body>
          <Alert variant="success" className="text-center">
            <p>Your details have been sent to your email. Please check your inbox.</p>
          </Alert>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Franchise;
