import React from "react";

const BlockHeader = ({data}) => {
  return (
    <>
      <div className="block-header">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h2>
              {data.page_title}
              <small>{data.welcome_text}</small>
            </h2>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <ul className="breadcrumb float-md-right">
              <li className="breadcrumb-item">
                <a href={data.redirection}>
                  <i className="zmdi zmdi-home" /> {data.redirection_name}
                </a>
              </li>
              <li className="breadcrumb-item active">{data.breadcrumb}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockHeader;
