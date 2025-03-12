import React from "react";
const Header = () => {
  return (
    <>
      <nav className="navbar p-l-5 p-r-5">
        <ul className="nav navbar-nav navbar-left">
          <li>
            <div className="navbar-header">
              <a href="javascript:void(0);" className="bars" />
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo.svg" width={30} alt="Oreo" />
                <span className="m-l-10">HRMS</span>
              </a>
            </div>
          </li>
          <li>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="input-group-addon">
                <i className="zmdi zmdi-search" />
              </span>
            </div>
          </li>
          <li className="float-right">
            <a href="sign-in.html" className="mega-menu" data-close="true">
              <i className="zmdi zmdi-power" />
            </a>
            <a
              href="javascript:void(0);"
              className="js-right-sidebar"
              data-close="true"
            >
            </a>
          </li>
          <li className="dropdown float-right">
            <a
              href="javascript:void(0);"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
            >
              <i className="zmdi zmdi-notifications" />
              <div className="notify">
                <span className="heartbit" />
                <span className="point" />
              </div>
            </a>
            <ul className="dropdown-menu pullDown">
              <li className="body">
                <ul className="menu list-unstyled">
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img
                          className="media-object"
                          src="assets/images/xs/avatar1.jpg"
                          alt=""
                        />
                        <div className="media-body">
                          <span className="name">
                            Sophia <span className="time">30min ago</span>
                          </span>
                          <span className="message">
                            There are many variations of passages
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                {" "}
                <a href="javascript:void(0);">View All</a>{" "}
              </li>
            </ul>
          </li>
          
        </ul>
      </nav>
    </>
  );
};
export default Header;
