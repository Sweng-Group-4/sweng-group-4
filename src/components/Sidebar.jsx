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
import searchBarIcon from './searchbaricon.png';
import logo from './jellyfishLogo.png'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh style={{marginLeft: '0px', marginTop: '4.5px'}}/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt style={{marginLeft: '0px', marginTop: '4px'}}/>
        },
        {
            path:"/search",
            name:"Search Bar",
            icon:<img src={searchBarIcon} alt="Search" style={{ width: '22px', height: '22px', marginLeft: '-1px', marginTop: '4px'}} />
        },
        {
            path:"/fileupload",
            name:"File Upload",
            icon:<img src={fileUploadIcon} alt="Upload" style={{ width: '25px', height: '19px', marginLeft: '-2px', marginTop: '5px'}} />
        },
        {
            path:"/Contact",
            name:"Contact",
            icon:<FaCommentAlt style={{marginTop: '5px'}}/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section" style={{ justifyContent: isOpen ? "space-between" : "center"}}>
               <img src={logo} alt="Sweng Group 4" style={{ display: isOpen ? "block" : "none", maxWidth: '100%', height: 'auto' }} className="logo" />
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

