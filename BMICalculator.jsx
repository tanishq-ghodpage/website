import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [showChart, setShowChart] = useState(false);

  const calculateBMI = () => {
    if (height && weight) {
      const calculatedBmi = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(calculatedBmi);
      setShowChart(true);
    }
  };

  return (
    <section className="bmi">
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateBMI();
            }}
          >
            <div>
              <label>Height (cm):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg):</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
          {bmi && (
            <div className="result">
              <h2>Your BMI: {bmi}</h2>
            </div>
          )}
        </div>

        {showChart && (
          <div className="bmi-chart">
            <h2>BMI Ranges for Men and Women</h2>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>BMI Range</th>
                  <th>Men</th>
                  <th>Women</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Underweight</td>
                  <td>&lt; 18.5</td>
                  <td>Under 18.5</td>
                  <td>Under 18.5</td>
                </tr>
                <tr>
                  <td>Normal Weight</td>
                  <td>18.5 - 24.9</td>
                  <td>18.5 - 24.9</td>
                  <td>18.5 - 24.9</td>
                </tr>
                <tr>
                  <td>Overweight</td>
                  <td>25 - 29.9</td>
                  <td>25 - 29.9</td>
                  <td>25 - 29.9</td>
                </tr>
                <tr>
                  <td>Obesity</td>
                  <td>&gt;= 30</td>
                  <td>30 or higher</td>
                  <td>30 or higher</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default BMICalculator;
