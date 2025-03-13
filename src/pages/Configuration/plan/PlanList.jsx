import React from "react";
import BlockHeader from "../../../components/common/BlockHeader";
import Table from "../../../components/common/table/Table";
import { useFormik } from "formik";
import * as Yup from "yup";
const PlanList = () => {
  const blockHeader = {
    page_title: "Plan",
    welcome_text: "Welcome to HRMS",
    redirection: "/",
    redirection_name: "Dashboard",
    breadcrumb: "Plan",
  };
  //
  const columns = [
    {
      name: "SR No.",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "100px",
    },
    { name: "Plan Name", selector: (row) => row.plan_name, sortable: true },
    { name: "Price", selector: (row) => row.price, sortable: true },
    { name: "Plan Cycle", selector: (row) => row.plan_cycle, sortable: true },
    {
      name: "Max Employee",
      selector: (row) => row.max_employee,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex">
          <button
            className="btn btn-sm btn-primary mx-1"
            onClick={() => handleEdit(row)}
          >
            <i className="zmdi zmdi-edit"></i>
          </button>
          <button
            className="btn btn-sm btn-info mx-1"
            onClick={() => handleView(row)}
          >
            <i className="zmdi zmdi-eye"></i>
          </button>
          <button
            className="btn btn-sm btn-danger mx-1"
            onClick={() => handleDelete(row)}
          >
            <i className="zmdi zmdi-delete"></i>
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  // Sample data
  const data = [
    {
      plan_name: "Basic Plan",
      price: 4000,
      plan_cycle: "Monthly",
      max_employee: 10,
    },
    {
      plan_name: "Standard Plan",
      price: 4000,
      plan_cycle: "Quarterly",
      max_employee: 50,
    },
    {
      plan_name: "Premium Plan",
      price: 4000,
      plan_cycle: "Yearly",
      max_employee: 200,
    },
    {
      plan_name: "Enterprise Plan",
      price: 4000,
      plan_cycle: "Custom",
      max_employee: "Unlimited",
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
  // Checkbox Options
  const checkboxOptions = [
    { label: "Email Notifications", value: "email_notifications" },
    { label: "SMS Alerts", value: "sms_alerts" },
    { label: "Push Notifications", value: "push_notifications" },
    { label: "Daily Reports", value: "daily_reports" },
  ];
  const initialValues = {
    plan_name: "",
    feature_text: "",
    price: "",
    plan_cycle: "",
    max_employee: "",
    additional_price: "",
    offer_id: "",
    selectedFeatures: [],
    description: "",
  };
  const validationSchema = Yup.object({
    plan_name: Yup.string().required("Please provide plan name!"),
    feature_text: Yup.string().required("Please provide feature text!"),
    price: Yup.number()
      .typeError("Price must be a number!")
      .positive("Price must be greater than zero!")
      .required("Please enter the price!"),
    plan_cycle: Yup.string().required("Please select a plan cycle!"),
    max_employee: Yup.number()
      .typeError("Max employee must be a number!")
      .positive("Max employee must be greater than zero!")
      .integer("Max employee must be a whole number!")
      .required("Please enter the max employee count!"),
    additional_price: Yup.number()
      .typeError("Additional price must be a number!")
      .min(0, "Additional price cannot be negative!")
      .required("Please enter the additional price!"),
    offer_id: Yup.string().required("Please select an offer!"),
    selectedFeatures: Yup.array().min(1, "Please select at least one feature!"),
    description: Yup.string().required("Please write a description!"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log(values);
        // await UserServices.addUser(values);
        // toast.success("User added successfully");
        // formik.resetForm();
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
                        href="#plan-list"
                      >
                        Plan Lists
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#add-plan"
                      >
                        Add Plan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="plan-list">
                  <div className="card">
                    <div class="body table-responsive">
                      <Table columns={columns} data={data} />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="add-plan">
                  <div className="card">
                    <div className="body">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row clearfix">
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group mb-4">
                              <label>Plan Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="plan_name"
                                onChange={formik.handleChange}
                                values={formik.values.plan_name}
                                placeholder="Please write plan name!"
                              />
                              {formik.errors.plan_name ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.plan_name}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group mb-4">
                              <label>Feature Text</label>
                              <input
                                type="text"
                                className="form-control"
                                id="feature_text"
                                onChange={formik.handleChange}
                                values={formik.values.feature_text}
                                placeholder="Please write feature text!"
                              />
                              {formik.errors.feature_text ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.feature_text}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group mb-4">
                              <label>Price</label>
                              <input
                                type="text"
                                className="form-control"
                                id="price"
                                onChange={formik.handleChange}
                                values={formik.values.price}
                                placeholder="Please write Plan Price!"
                              />
                              {formik.errors.price ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.price}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group mb-4">
                              <label>Plan Cycle</label>
                              <select
                                name="plan_cycle"
                                id="plan_cycle"
                                className="form-control"
                                onChange={formik.handleChange}
                                values={formik.values.plan_cycle}
                              >
                                <option value="1">Monthy</option>
                                <option value="2">Yearly</option>
                              </select>
                              {formik.errors.plan_cycle ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.plan_cycle}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group mb-4">
                              <label>Max Employee</label>
                              <input
                                type="text"
                                className="form-control"
                                id="max_employee"
                                onChange={formik.handleChange}
                                values={formik.values.max_employee}
                                placeholder="Please write offer Max Employee!"
                              />
                              {formik.errors.max_employee ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.max_employee}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="form-group mb-4">
                              <label>Prcie Per Addition Employee</label>
                              <input
                                type="text"
                                className="form-control"
                                id="additional_price"
                                onChange={formik.handleChange}
                                additional_price
                                values={formik.values.additional_price}
                                placeholder="Please write Prcie Per Addition Employee!"
                              />
                              {formik.errors.additional_price ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.additional_price}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mb-4">
                              <label>Offer</label>
                              <select
                                name="offer_id"
                                id="offer_id"
                                className="form-control"
                                onChange={formik.handleChange}
                                values={formik.values.offer_id}
                              >
                                <option value="1">Offer 1</option>
                                <option value="2">Offer 2</option>
                              </select>
                              {formik.errors.offer_id ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.offer_id}
                                </span>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mb-4">
                              <label>Select Features:</label>
                              <div className="row">
                                {checkboxOptions.map((option) => (
                                  <div
                                    key={option.value}
                                    className="col-md-3 mb-2"
                                  >
                                    <div className="form-check">
                                      <input
                                        type="checkbox"
                                        id={option.value}
                                        name="selectedFeatures"
                                        value={option.value}
                                        checked={formik.values.selectedFeatures.includes(
                                          option.value
                                        )}
                                        onChange={(e) => {
                                          const { checked, value } = e.target;
                                          if (checked) {
                                            formik.setFieldValue(
                                              "selectedFeatures",
                                              [
                                                ...formik.values
                                                  .selectedFeatures,
                                                value,
                                              ]
                                            );
                                          } else {
                                            formik.setFieldValue(
                                              "selectedFeatures",
                                              formik.values.selectedFeatures.filter(
                                                (item) => item !== value
                                              )
                                            );
                                          }
                                        }}
                                        className="form-check-input"
                                      />
                                      <label
                                        htmlFor={option.value}
                                        className="form-check-label"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {formik.errors.selectedFeatures && (
                                <span className="text-danger">
                                  {formik.errors.selectedFeatures}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mb-4">
                              <label>Description</label>
                              <textarea
                                className="form-control"
                                id="description"
                                onChange={formik.handleChange}
                                values={formik.values.description}
                                placeholder="Please write offer description!"
                              ></textarea>
                              {formik.errors.description ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.description}
                                </span>
                              ) : null}
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
                                disabled={formik.isSubmitting}
                              >
                                {formik.isSubmitting ? (
                                  <>
                                    <span
                                      className="spinner-border spinner-border-sm"
                                      role="status"
                                      aria-hidden="true"
                                    ></span>{" "}
                                    Saving...
                                  </>
                                ) : (
                                  "Save"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
export default PlanList;
