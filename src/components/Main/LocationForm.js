import React, { useState } from "react";

const LocationForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({
      title: "",
      date: "",
      comment: "",
    });
  };

  return (
    <div>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default LocationForm;
