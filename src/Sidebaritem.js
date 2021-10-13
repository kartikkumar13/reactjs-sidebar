import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebaritem = ({ title, path, icon }) => {
    return (
        <Link to={path} className="sidebar-item">
            <div className="sidebar-icon">
                {icon}
            </div>
            <h2>{title}</h2>
        </Link>
    )
}
