import React from "react";
import "./sidebaroption.css"
import { Link } from "react-router-dom";



export default function SideBarOption({ text, Icon, active, channel }) {
  let name = "sidebar__option"
  if (active) name += " sidebar__option--active"; 
  if (channel) name += " type-channel"; 
    console.log("SidebarOption RENDERED");
  return (
    <Link to="/YouTube-clone" className="sidebar__option--link">
      <div className={name}>
        <div className="option__icon">{<Icon />}</div>
        <div className="option__text">{text}</div>
      </div>
      </Link>
    );
}
