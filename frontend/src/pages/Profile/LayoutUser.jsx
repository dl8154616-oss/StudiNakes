import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Compoenent
import ECourse from "../../components/UserProfile/ECourse"
import Exams from "../../components/UserProfile/Exams"
import Wishlist from "../../components/UserProfile/Wishlist"
import Certificates from "../../components/UserProfile/Certificates"
import OrderHistory from "../../components/UserProfile/OrderHistory"
import ExamAttempts from "../../components/UserProfile/ExamAttempts"
import LiveCoach from "../../components/UserProfile/LiveCoach"
import TopNavbar from "../../components/TopNavbar";

const LayoutUser = () => {
  const [activeTab, setActiveTab] = useState("ecourse");

  const renderContent = () => {
    switch (activeTab) {
      case "ecourse":
        return <ECourse />;
      case "exams":
        return <Exams />;
      case "wishlist":
        return <Wishlist />;
      case "certificates":
        return <Certificates />;
      case "order":
        return <OrderHistory />;
      case "attempts":
        return <ExamAttempts />;
      case "coach":
        return <LiveCoach />;
      default:
        return null;
    }
  };

  return (
    <>
    <TopNavbar/>
    <div className="container-fluid p-4" style={{ background: "#f5f7fb" }}>
      <div className="row">
        {/* SIDEBAR */}
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                className="rounded-circle mb-3"
                alt="User"
              />
              <h5 className="fw-bold">Timur Ercan</h5>
              <p className="text-muted">Product Manager</p>
            </div>

            <p>
              A passionate Product and self-developing UI/UX designer with strong analytical and user-focused
              problem-solving skills.
            </p>

            <hr />
            <p className="mb-1 fw-bold">Contact</p>
            <p className="mb-1">+92 345 9123751</p>
            <p className="mb-1">timurercan@gmail.com</p>
            <p className="mb-1">Turkey</p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="col-md-9">
          {/* NAVIGATION TABS */}
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button onClick={() => setActiveTab("ecourse")} className={`nav-link ${activeTab === "ecourse" ? "active" : ""}`}>E‑course</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab("exams")} className={`nav-link ${activeTab === "exams" ? "active" : ""}`}>Exams</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab("wishlist")} className={`nav-link ${activeTab === "wishlist" ? "active" : ""}`}>Wishlist</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab("certificates")} className={`nav-link ${activeTab === "certificates" ? "active" : ""}`}>Certificates</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab("order")} className={`nav-link ${activeTab === "order" ? "active" : ""}`}>Order History</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab("attempts")} className={`nav-link ${activeTab === "attempts" ? "active" : ""}`}>Exam Attempts</button>
            </li>
            <li className="nav-item">
              <button onClick={() => setActiveTab("coach")} className={`nav-link ${activeTab === "coach" ? "active" : ""}`}>Live Coach</button>
            </li>
          </ul>

          {/* CONTENT AREA */}
          <div className="card p-4 shadow-sm bg-white">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LayoutUser;
