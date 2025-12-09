import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import Sidebar from '../../components/SideBar/sidebar';
import Dashboard from '../../components/SideBar/dashboard';

const FePanel = () => {
  const location = useLocation();

  if (!location.state?.fromLogin) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="flex w-full h-[85vh] gap-[var(--gap)]">
      <div className="w-72 flex-shrink-0 h-full rounded-[var(--radius)] overflow-hidden">
        <Sidebar />
      </div>
  <div className="profile-main-card">
    {/* header etc. */}
    <Dashboard />
  </div>
</div>    
  )
}

export default FePanel