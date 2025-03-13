import React from "react";
import BlockHeader from "../../../components/common/BlockHeader";
import Table from "../../../components/common/table/Table";
import { useFormik } from "formik";
import * as Yup from "yup";
const Feature = () => {
  const blockHeader = {
    page_title: "Feature",
    welcome_text: "Welcome to HRMS",
    redirection: "/",
    redirection_name: "Dashboard",
    breadcrumb: "Feature",
  };
  const columns = [
    {
      name: "SR No.",
      selector: (row, index) => index + 1,
      sortable: false,
      width: "100px",
    },
    {
      name: "Feature Name",
      selector: (row) => row.feature_name,
      sortable: true,
    },
    { name: "Description", selector: (row) => row.description },
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
      feature_name: "Black Friday Deal",
      description: "50% off on all products",
    },
    {
      feature_name: "Cyber Monday Special",
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
    feature_name: "",
    description: "",
  };
  const validationSchema = Yup.object({
    feature_name: Yup.string().required("Please provide Feature name!"),
    description: Yup.string().required("Please write description!"),
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
                        href="#feature-list"
                      >
                        Feature Lists
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#add-feature"
                      >
                        Add Feature
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="feature-list">
                  <div className="card">
                    <div class="body table-responsive">
                      <Table columns={columns} data={data} />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="add-feature">
                  <div className="card">
                    <div className="body">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row clearfix">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group mb-4">
                              <label>Feature Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="feature_name"
                                onChange={formik.handleChange}
                                values={formik.values.feature_name}
                                placeholder="Please write feature name!"
                              />
                              {formik.errors.feature_name ? (
                                <span name="error" className="text-danger">
                                  {formik.errors.feature_name}
                                </span>
                              ) : null}
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
export default Feature;
