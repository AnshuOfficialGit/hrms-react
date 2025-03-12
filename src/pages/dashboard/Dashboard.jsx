import React from "react";
import CountUp from "react-countup";
import BlockHeader from "../../components/common/BlockHeader";

const Dashboard = () => {
  const blockHeader = {
    "page_title":"Dashboard",
    "welcome_text":"Welcome to HRMS",
    "redirection":"/",
    "redirection_name":"HRMS",
    "breadcrumb":"Dashboard"
  }
  return (
    <>
      <section className="content home">
      <BlockHeader data={blockHeader}/>

        <div className="container-fluid">
          <div className="row clearfix">
            {[
              { title: "Student", value: 2049, icon: "zmdi-account-o" },
              { title: "Teacher", value: 39, icon: "zmdi-account-circle" },
              { title: "Attendance", value: 798, icon: "zmdi-label" },
              { title: "Courses", value: 43, icon: "zmdi-graduation-cap" },
              { title: "Expense", value: 2154, icon: "zmdi-balance-wallet", prefix: "$" },
              { title: "Income", value: 5478, icon: "zmdi-balance", prefix: "$" }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card top_counter">
                  <div className="body">
                    <div className={`icon xl-slategray`}>
                      <i className={`zmdi ${item.icon}`} />
                    </div>
                    <div className="content">
                      <div className="text">{item.title}</div>
                      <h5 className="m-b-0">
                        {item.prefix}
                        <CountUp start={0} end={item.value} duration={2.5} />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
