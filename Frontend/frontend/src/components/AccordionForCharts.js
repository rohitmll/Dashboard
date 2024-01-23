import React, { useState, useEffect } from "react";

import Accordion from "react-bootstrap/Accordion";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import DoughnutChart from "../charts/DoughnutChar";
import PieChart from "../charts/PieChart";
import PolarChart from "../charts/PolarChart";
import RadarChart from "../charts/Radarchat";

const AccordionForCharts = ({ data }) => {
  // const [data, setMainData] = useState([]);

  // const getDataFromDB = async () => {
  //   try {
  //     const response = await fetch("https://joyous-overcoat-worm.cyclic.app/api/data/all");
  //     const responseData = await response.json();
  //     setMainData(responseData.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getDataFromDB();
  // }, [data, setMainData]);
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Polar Area and Doughnut Charts - represents number of countries,
            sectors, topics, pestles, sources, etc are involved
          </Accordion.Header>
          <Accordion.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <PolarChart serverData={data} />
              <DoughnutChart serverData={data} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Radar and Pie Charts- represents number of projects as per pestle
          </Accordion.Header>
          <Accordion.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <RadarChart serverData={data} />
              <PieChart serverData={data} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Bar Chart - represents number of projects in each sector. And Line
            Chart- represents number of projects as per pestle.
          </Accordion.Header>
          <Accordion.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <BarChart serverData={data} />
              <LineChart serverData={data} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionForCharts;
