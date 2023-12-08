import React from 'react';
import '../App.scss';

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About the Ticketing System</h1>
      <p>This Ticketing System is a dynamic web application, meticulously crafted as a portfolio project by Matthew Penswick, a dedicated web developer based in Liverpool. The system is designed to provide an efficient and user-friendly platform for managing and resolving a wide range of tickets, from technical issues to general inquiries.</p>
      
      <h2>Project Features</h2>
      <p>The Ticketing System boasts a range of features aimed at enhancing user experience and administrative efficiency:</p>
      <ul>
        <li>Comprehensive <strong>Ticket Table/List</strong> displaying key ticket information with color-coded status indicators.</li>
        <li>Advanced <strong>Filter Options</strong> to navigate through tickets based on status, severity, category, and more.</li>
        <li>Efficient <strong>Search Functionality</strong> to swiftly locate specific tickets.</li>
        <li>Detailed <strong>Ticket Views</strong> within a single-page layout for a seamless user experience.</li>
        <li>Flexible <strong>Pagination</strong> to adjust the number of tickets visible per page.</li>
        <li>An <strong>Archive Tab</strong> for easy access to completed tickets.</li>
        <li><strong>Quick Action</strong> capabilities for managing tickets efficiently.</li>
        <li><strong>Export Functionality</strong> for data analysis and reporting.</li>
        <li><strong>Responsive Design</strong> ensuring accessibility across various devices.</li>
        <li><strong>Column Sorting</strong> in ticket tables for organized viewing.</li>
        <li><strong>Bulk Action</strong> options for handling multiple tickets simultaneously.</li>
        <li><strong>Date Range Filters</strong> for focused ticket exploration.</li>
        <li><strong>User-specific Views</strong> tailored to different user roles.</li>
      </ul>

      <h2>About Matthew Penswick</h2>
      <p>As a passionate web developer, Matthew Penswick specializes in creating dynamic, user-centric web applications. Hailing from Liverpool, Matthew combines technical expertise with a keen eye for design, ensuring every project is both functional and visually appealing. This Ticketing System project is a testament to his commitment to excellence in web development.</p>
    </div>
  );
}

export default AboutPage;
