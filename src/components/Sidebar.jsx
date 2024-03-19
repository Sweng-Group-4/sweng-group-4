import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/search",
            name:"Search Bar",
            icon:<img src="https://cdn.discordapp.com/attachments/1196390810632065084/1219624546282504292/search-icon-white-png-10.jpg?ex=660bfadf&is=65f985df&hm=0010cc9919baad4e9aa1ea080af42964d4ce9377bc8a1e21beb1cfd3ff9e9b48&" alt="Search" style={{ width: '24px', height: '24px' }} />
        },
        {
            path:"/fileupload",
            name:"File Upload",
            icon:<img src="https://cdn2.iconfinder.com/data/icons/cloud-data-glyph/64/166_cloud-data-computing-arrow-technology-upload-512.png" alt="Upload" style={{ width: '24px', height: '24px' }} />
        },
        {
            path:"/Contact",
            name:"Contact",
            icon:<FaCommentAlt/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Sweng Group 4</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;