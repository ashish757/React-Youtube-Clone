import React, { useContext } from "react";
import SideNavOption from "./SideBarOption";
import YouTubeLogo from "../YouTubeLogo";
import {Menu, Whatshot, LibraryAdd, Home, YouTube, Subscriptions, History, WatchLater, ThumbUp, Movie } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import "./sidebar.css";
import { globalData } from "../dataLayer/globalData";

function Divider({ name }) {
  return <div className={"divider " + name }></div>
}

export default function Sidebar() {
  const { state, dispatch } = useContext(globalData);

  const sidebarHandler = () => {
    dispatch({ type: "SIDEBAR" });
  };
  console.log("Sidebar RENDERED");
  return (
    <div
      className={state.isSideBarActive ? "sidebar sidebar--active" : "sidebar"}
    >
      <div className="sidebar__header">
        <Menu onClick={sidebarHandler} className="menu__logo" />
        <YouTubeLogo x="80px" y="25px" />
      </div>
      <SideNavOption Icon={Home} text="Home" active />
      <SideNavOption Icon={Whatshot} text="Trending" />
      <SideNavOption Icon={Subscriptions} text="Subscriptions" />
      <Divider />
      <SideNavOption Icon={LibraryAdd} text="Library" />
      <SideNavOption Icon={History} text="History" />
      <SideNavOption Icon={WatchLater} text="Watch Later" />
      <SideNavOption Icon={ThumbUp} text="Liked Videos" />
      <Divider />
      <div className="sidebar__section__title">SUBSCRIPTIONS</div>
      <SideNavOption Icon={Avatar} text="TED-ED" channel />
      <SideNavOption Icon={Avatar} text="DEV ED" channel />
      <SideNavOption Icon={Avatar} text="Tech With Tim " channel />
      <SideNavOption Icon={Avatar} text="Love Babbar" channel />
      <Divider />
      <div className="sidebar__section__title">MORE FROM YOUTUBE</div>
      <SideNavOption Icon={YouTube} text="YouTube Premium" />
      <SideNavOption Icon={Movie} text="Movies" />
    </div>
  );
}
