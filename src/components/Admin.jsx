import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import '../App.scss';

function AdminPage() {
  const [activeTab, setActiveTab] = useState('userManagement');
  const navigate = useNavigate(); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleHomeClick = () => {
    navigate('/home'); 
  };

  return (
    <div className="admin-page">

        <nav className="admin-navigation">
        <h1>Admin Dashboard</h1>  
          <button id='' 
            onClick={() => handleTabChange('userManagement')}
            className={activeTab === 'userManagement' ? 'active' : ''}
          >
            User Management
          </button>
          <button id='' 
            onClick={() => handleTabChange('ticketOversight')}
            className={activeTab === 'ticketOversight' ? 'active' : ''}
          >
            Ticket Oversight
          </button>
          <button id='' 
            onClick={() => handleTabChange('systemSettings')}
            className={activeTab === 'systemSettings' ? 'active' : ''}
          >
            System Settings
          </button>
          <button id='' 
            onClick={() => handleTabChange('reports')}
            className={activeTab === 'reports' ? 'active' : ''}
          >
            Reports & Analytics
          </button>
          <button id='' 
            onClick={() => handleTabChange('announcements')}
            className={activeTab === 'announcements' ? 'active' : ''}
          >
            Announcements
          </button>
          <button id='' 
            onClick={() => handleTabChange('auditLogs')}
            className={activeTab === 'auditLogs' ? 'active' : ''}
          >
            Audit Logs
          </button>
          <button id='' 
            onClick={() => handleTabChange('performance')}
            className={activeTab === 'performance' ? 'active' : ''}
          >
            Performance Monitoring
          </button>
          <div className="nav-icons">
          <button id='home-icon'>
            <HomeOutlinedIcon className="home-icon" onClick={handleHomeClick} />
          </button>
          </div>
        </nav>

      <div className="admin-content">
        {activeTab === 'userManagement' && <UserManagement />}
        {activeTab === 'ticketOversight' && <TicketOversight />}
        {activeTab === 'systemSettings' && <SystemSettings />}
        {activeTab === 'reports' && <ReportsAnalytics />}
        {activeTab === 'announcements' && <Announcements />}
        {activeTab === 'auditLogs' && <AuditLogs />}
        {activeTab === 'performance' && <PerformanceMonitoring />}
      </div>
    </div>
  );
}

function UserManagement() {
  return <div>User Management Section</div>;
}

function TicketOversight() {
  return <div>Ticket Oversight Section</div>;
}

function SystemSettings() {
  return <div>System Settings Section</div>;
}

function ReportsAnalytics() {
  return <div>Reports & Analytics Section</div>;
}

function Announcements() {
  return <div>Announcements Section</div>;
}

function AuditLogs() {
  return <div>Audit Logs Section</div>;
}

function PerformanceMonitoring() {
  return <div>Performance Monitoring Section</div>;
}

export default AdminPage;
