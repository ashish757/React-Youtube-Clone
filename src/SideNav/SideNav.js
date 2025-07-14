import React, {useContext} from "react";
import SideNavOption from "./SideNavOption";
import { Subscriptions, Home, Whatshot, LibraryAdd } from "@material-ui/icons";
import "./sidenav.css";
import { globalData } from "../dataLayer/globalData";


export default function SideNav() {
  const { dispatch } = useContext(globalData);
   
  const options = [
    { id: 'home', text: "Home", icon: Home, link: "/YouTube-clone" },
    { id: 'trending', text: "Trending", icon: Whatshot, link: "/YouTube-clone/trending" },
    { id: 'subscriptions', text: "Subscriptions", icon: Subscriptions, link: "/YouTube-clone/subscriptions" },
    { id: 'library', text: "Library", icon: LibraryAdd, link: "/YouTube-clone/library" },
  ];

  console.log("SideNav RENDERED");
  return (
    <div className="sidenav" >
      {
        options.map(option => {
          return <SideNavOption Icon={option.icon} link={option.link} text={option.text} id={option.id} key={option.id} />
        })
      }
    </div>
  );
}