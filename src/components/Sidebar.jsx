import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    //FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import fileUploadIcon from './fileuploadicon.png';
import searchBarIcon from './seachbaricon.png';


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
            icon:<img src={searchBarIcon} alt="Search" style={{ width: '24px', height: '24px', marginRight: '5px' }} />
        },
        {
            path:"/fileupload",
            name:"File Upload",
            icon:<img src={fileUploadIcon} alt="Upload" style={{ width: '24px', height: '18px', marginRight: '4px'}} />
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
               <div className="top_section" style={{ justifyContent: isOpen ? "space-between" : "center"}}>
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

