import React from 'react'
import { Sidebaritem } from './Sidebaritem'
import { SidebarData } from './SidebarData'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            {SidebarData.map((items, index) => {
                return (
                    <Sidebaritem key={index} title={items.title} path={items.path} icon={items.icon} />)
            })}
        </div>
    )
}
