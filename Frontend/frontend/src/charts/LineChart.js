import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = ({ serverData }) => {
  let uniquePestle = [];

  serverData.forEach((i) => {
    if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
      uniquePestle.push(i.pestle);
    }
  });

  const pestleCount = uniquePestle.map((item) => {
    return {
      pestle: item,
      count: serverData.filter((i) => i.pestle === item).length,
    };
  });

  return (
    <div style={{ height: "70vh", width: "45vw" }}>
      <h3 style={{ textAlign: "center" }}>Line Chart</h3>
      <Line
        data={{
          labels: uniquePestle,
          datasets: [
            {
              label: "Projects ",
              data: pestleCount.map((i) => i.count),
              borderWidth: 1,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        }}
        height={300}
      />
    </div>
  );
};

export default LineChart;
