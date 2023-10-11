import React from "react";
import "../../styles/Dashboard/Total.css";
import RevImg from "../../assets/revenue.svg";
import TransactionImg from "../../assets/transaction.svg";
import LikesImg from "../../assets/likes.svg";
import UsersImg from "../../assets/users.svg";

const TotalBox = () => {
  return (
      <div className="total-container">

        <div className="total-nav">
          <div className="rev-img">
            <img src={RevImg} alt="reveneue logo" />
          </div>
          <spam>Total Revenues</spam>
          <div className="inner-con">
          <h2 className="total-title">$2,129,430</h2>
          <div className="total-perc">+2.5%</div>
          </div>
        </div>

        <div className="total-nav">
          <div className="trans-img">
            <img src={TransactionImg} alt="transaction logo" />
          </div>
          <spam>Total Transactions</spam>
          <div className="inner-con">
          <h2 className="total-title">1,520</h2>
          <div className="total-perc">+1.8%</div>
          </div>
          
        </div>

        <div className="total-nav">
          <div className="likes-img">
            <img src={LikesImg} alt="likes logo" />
          </div>
          <spam>Total Likes</spam>
          <div className="inner-con">
          <h2 className="total-title">9,721</h2>
          <div className="total-perc">+1.4%</div>
          </div>
          
        </div>

        <div className="total-nav">
          <div className="users-img">
            <img src={UsersImg} alt="users logo" />
          </div>
          <spam>Total Users</spam>
          <div className="inner-con">
          <h2 className="total-title">9,721</h2>
          <div className="total-perc">+4.2%</div>
          </div>
        </div>

      </div>
  );
};

export default TotalBox;
