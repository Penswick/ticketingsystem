import React, { useState } from 'react';
import '../App.scss';

function TicketSubmit() {
  const [ticketData, setTicketData] = useState({
    title: '',
    description: '',
    severity: 'Low',
    category: '',
    image: null, // Added for the image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData({
      ...ticketData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setTicketData({
      ...ticketData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement backend integration for form submission
    console.log(ticketData);

    // TODO: Handle image file upload to the server
    // For demonstration, this will log the image file name
    console.log("Image File:", ticketData.image?.name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ticket-submit-form">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" onChange={handleChange} />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" onChange={handleChange}></textarea>

        <label htmlFor="severity">Severity:</label>
        <select name="severity" id="severity" onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Severe">Severe</option>
        </select>

        <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={handleChange}>
          <option value="Technical Issue">Technical Issue</option>
          <option value="Account Problem">Account Problem</option>
          <option value="Feature Request">Feature Request</option>
        </select>
        <label htmlFor="image">Upload Image:</label>
        <input type="file" name="image" id="image" onChange={handleImageChange} accept="image/*" />

        <input type="submit" value="Submit Ticket" />
      </form>
    </div>
  )
}

export default TicketSubmit;
