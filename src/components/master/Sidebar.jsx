import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menus from "./Menus";

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open

  const isActive = (path) => (location.pathname === path ? "active" : "");

  // Toggle submenu open/close
  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <>
      <aside id="leftsidebar" className="sidebar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#dashboard">
              <i className="zmdi zmdi-home" />
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane stretchRight active" id="dashboard">
            <div className="menu">
              <ul className="list">
                <li>
                  <div className="user-info">
                    <div className="image">
                      <a href="profile.html">
                        <img src="assets/images/profile_av.jpg" alt="User" />
                      </a>
                    </div>
                    <div className="detail">
                      <h4>Pro. Charlotte</h4>
                      <small>Design Faculty</small>
                    </div>
                  </div>
                </li>

                <li className="header">MAIN</li>

                {Menus.map((menu, index) => (
                  <li
                    key={index}
                    className={
                      menu.children.length > 0
                        ? openMenu === index
                          ? "active open"
                          : ""
                        : isActive(menu.path)
                    }
                  >
                    {menu.children.length > 0 ? (
                      <>
                        <a href="#" className="menu-toggle" onClick={(e) => {
                          e.preventDefault();
                          toggleMenu(index);
                        }}>
                          <i className={menu.icon} />
                          <span>{menu.title}</span>
                        </a>
                        <ul className="ml-menu" style={{ display: openMenu === index ? "block" : "none" }}>
                          {menu.children.map((child, childIndex) => (
                            <li key={childIndex} className={isActive(child.path)}>
                              <Link to={child.path}>{child.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link to={menu.path}>
                        <i className={menu.icon} />
                        <span>{menu.title}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
