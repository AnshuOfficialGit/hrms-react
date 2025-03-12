import React from "react";

import BlockHeader from "../../../components/common/BlockHeader";
import Table from "../../../components/common/table/Table";

import { useFormik } from "formik";
import * as Yup from "yup";

const ClientList = () => {
  const blockHeader = {
    page_title: "Offers",
    welcome_text: "Welcome to HRMS",
    redirection: "/",
    redirection_name: "Dashboard",
    breadcrumb: "Offers",
  };
  const columns = [
    {
      name: "SR No.",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "100px",
    },
    { name: "Offer Name", selector: (row) => row.offer_name, sortable: true },
    { name: "Price Type", selector: (row) => row.price_type, sortable: true },
    { name: "Amount", selector: (row) => row.amount, sortable: true },
    { name: "Start Date", selector: (row) => row.start_date, sortable: true },
    { name: "End Date", selector: (row) => row.end_date, sortable: true },
    { name: "Description", selector: (row) => row.description },
  ];

  // Sample data
  const data = [
    {
      offer_name: "Black Friday Deal",
      price_type: "Fixed",
      amount: "$50",
      start_date: "2024-11-01",
      end_date: "2024-11-30",
      description: "50% off on all products",
    },
    {
      offer_name: "Cyber Monday Special",
      price_type: "Percentage",
      amount: "20%",
      start_date: "2024-12-01",
      end_date: "2024-12-05",
      description: "20% discount on selected items",
    },
  ];

  const handleEdit = (row) => {
    console.log("Edit:", row);
  };

  const handleView = (row) => {
    console.log("View:", row);
  };

  const handleDelete = (row) => {
    console.log("Delete:", row);
  };
  const initialValues = {
    name: "",
    price_type: "",
    amount: "",
    start_date: "",
    end_date: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please provide offer name!"),
    price_type: Yup.string().required("Please select price type!"),
    amount:Yup.string().required("Please write value of amount or percentage!"),
    start_date: Yup.string().required("Please select start date!"),
    end_date: Yup.string().required("Please select end date!"),
    description: Yup.string().required("Please write description!"),
  })
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await UserServices.addUser(values);
        toast.success("User added successfully");
        formik.resetForm();
      } catch (error) {
        toast.error("User added successfully");
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <>
      <section className="content">
        <BlockHeader data={blockHeader} />
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
                        href="#offer-list"
                      >
                        Offer Lists
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#add-offer"
                      >
                        Add Offer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="offer-list">
                  <div className="card">
                    <div class="body table-responsive">
                      <Table columns={columns} data={data} />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="add-offer">
                  <div className="card">
                    <div className="body">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group mb-4">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Please write offer name!"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="form-group mb-4">
                            <label>Price Type</label>
                            <select
                              name="price_type"
                              id="price_type"
                              className="form-control"
                            >
                              <option value="1">Fixed</option>
                              <option value="2">Percentage</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                          <div className="form-group mb-4">
                            <label>Amount/Percentage</label>
                            <input
                              type="text"
                              className="form-control"
                              id="amount"
                              placeholder="Please write offer amount/percentage!"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-4">
                            <label>Start date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="start_date"
                              placeholder="Please write offer Start date!"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-4">
                            <label>End date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="end_date"
                              placeholder="Please write offer End date!"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group mb-4">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              id="description"
                              placeholder="Please write offer description!"
                            ></textarea>
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
