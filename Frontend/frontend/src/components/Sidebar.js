import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Container
        style={{
          backgroundColor: "#e9ecef",
          display: "flex",
          marginhrefp: "10px",
          width: "fit-content",
        }}
      >
        <div
          style={{
            padding: "2px",
            maxWidth: "15%",
            height: "100vh",
            textAlign: "centre",
            lineHeight: "2.5rem",
            // marginLeft: "0",
            // marginRight: "0",
          }}
        >
          <div>
            <h5>Admin Dashboard</h5>
          </div>
          <div>
            <span>Charts▾</span>
          </div>
          <ul style={{ listStyleType: "square" }}>
            <li>
              <NavLink to="/">Tabsrow</NavLink>
            </li>
            <li>
              <NavLink to="/polar">PolarAreaChart</NavLink>
            </li>
            <li>
              <NavLink to="/doughnut">DoughnutChart</NavLink>
            </li>
            <li>
              <NavLink to="/radar">RadarChart</NavLink>
            </li>
            <li>
              <NavLink to="/pie">PieChart</NavLink>
            </li>
            <li>
              <NavLink to="/bar">BarChart</NavLink>
            </li>
            <li>
              <NavLink to="/line">LineChart</NavLink>
            </li>
          </ul>
          <ul>
            <div>
              <span>Pages▾</span>
            </div>
            <li>
              <NavLink to="/cal">Calendar</NavLink>
            </li>
            <li>
              <NavLink to="/form">FormPage</NavLink>
            </li>
          </ul>
        </div>
        {/* <Outlet /> */}
      </Container>
    </div>
  );
};

export default Sidebar;
