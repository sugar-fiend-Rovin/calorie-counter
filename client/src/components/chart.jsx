import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { render } from "react-dom";

export default function Chart() {
  const [percentage, setpercentage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setpercentage(80);

    setData({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [setpercentage, setData]);

  return (
    <div>
      <div>
        <ErrorChart data={data} />
      </div>
    </div>
  );
}

const ErrorChart = ({ data }) => {
  return (
    <div>
      <Bar data={data}></Bar>
    </div>
  );
};
