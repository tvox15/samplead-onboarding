import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import './dashboard.css';

export default function DashboardTemplate({ children }) {
    return (
        <>
            <div className="dashboard-main">
                <Header />
                <div className="dashboard-content">
                    <Sidebar side="left" />
                    <div className="page-content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
