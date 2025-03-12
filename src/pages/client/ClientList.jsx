import React from "react";
import { Link } from "react-router-dom";
import BlockHeader from "../../components/common/BlockHeader";

const ClientList = () => {
  const blockHeader = {
    "page_title":"Client Management",
    "welcome_text":"Welcome to HRMS",
    "redirection":"/",
    "redirection_name":"Dashboard",
    "breadcrumb":"Clients"
  }
  return (
    <>
      <section className="content">
        <BlockHeader data={blockHeader}/>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="body">
                  <ul className="nav nav-tabs padding-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#client-list"
                      >
                        Client Lists
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#add-client"
                      >
                        Add Client
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="client-list">
                  <div className="card">
                    <div class="body table-responsive">
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr>
                            <th>no</th>
                            <th>Dept. Name</th>
                            <th>Brief</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>No. of Students</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>MBA</td>
                            <td>
                              Lorem Ipsum is simply dummy text of the printing
                            </td>
                            <td>info@gamil.com</td>
                            <td>+123 456 7890</td>
                            <td>55</td>
                            <td>
                              <button
                                class="btn btn-primary btn-sm btn-round"
                                onclick="editDept(1)"
                              >
                                <i class="zmdi zmdi-edit"></i>
                              </button>

                              <button
                                class="btn btn-info btn-sm btn-round"
                                onclick="viewDept(1)"
                              >
                                <i class="zmdi zmdi-eye"></i>
                              </button>
                              <button
                                class="btn btn-danger btn-sm btn-round"
                                onclick="deleteDept(1)"
                              >
                                <i class="zmdi zmdi-delete"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="add-client">
                  <div className="card">
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-4">
                            <label>Block Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Block Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-4">
                            <label>Room Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Room Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group mb-4">
                            <label>Room Type</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Room Type"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group mb-4">
                            <label>No of Bed</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="No of Bed"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group mb-4">
                            <label>Cost Per Bed</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Cost Per Bed"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 mt-4">
                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-raised btn-round"
                            >
                              Cancel
                            </button>

                            <button
                              type="submit"
                              className="btn btn-raised btn-round btn-primary"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientList;
