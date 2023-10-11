import React from "react";
import "../../styles/Dashboard/Dashboard.css";
import Search from "../../assets/Search.svg";
import Bell from "../../assets/Vector.svg";
import Person from "../../assets/person.svg";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dash-container">
        <div className="dash-nav">
          <h1 className="dash-title">Dashboard</h1>
        </div>
        
        <div className="dash-nav-1">
        <div className="form-group-has-search">
          <input type="text" className="form-control1" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
          <img className="img1" src={Bell} alt="bell" />
          <img className="img2" src={Person} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
