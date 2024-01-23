import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BarChart from "./charts/BarChart";
import DoughnutChart from "./charts/DoughnutChar";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import PolarChart from "./charts/PolarChart";
import RadarChart from "./charts/Radarchat";
import Calender from "./pages/Calender";
import Form from "./pages/Form2";
import Tabsrow from "./components/Tabsrow";

function App() {
  const [mainData, setMainData] = useState([]);
  const getDataFromDB = async () => {
    try {
      const response = await fetch("https://joyous-overcoat-worm.cyclic.app/api/data/all");
      const responseData = await response.json();
      setMainData(responseData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDataFromDB();
  }, [mainData, setMainData]);

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="content">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<Tabsrow data={mainData} setMainData={setMainData} />}
            />
            <Route path="/cal" element={<Calender />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<BarChart serverData={mainData} />} />
            <Route
              path="/doughnut"
              element={<DoughnutChart serverData={mainData} />}
            />
            <Route path="/line" element={<LineChart serverData={mainData} />} />
            <Route path="/pie" element={<PieChart serverData={mainData} />} />
            <Route
              path="/polar"
              element={<PolarChart serverData={mainData} />}
            />
            <Route
              path="/radar"
              element={<RadarChart serverData={mainData} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
