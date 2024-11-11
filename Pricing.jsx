import { Check } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Popup Component
const PlanPopup = ({ plan, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-btn" onClick={onClose}>X</button>
      <h2>{plan.title} Package</h2>
      <h3>Price: Rs {plan.price}</h3>
      <p>Duration: {plan.length} Months</p>
      <div className="description">
        <p><Check /> Equipment</p>
        <p><Check /> All Day Free Training</p>
        <p><Check /> Free Restroom</p>
        <p><Check /> 24/7 Skilled Support</p>
        <p><Check /> 20 Days Freezing Option</p>
      </div>
      <Link to={"/"} className="join-button">Join Now</Link>
    </div>
  </div>
);

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const pricing = [
    { imgUrl: "/pricing.jpg", title: "QUARTERLY", price: 18000, length: 3 },
    { imgUrl: "/pricing.jpg", title: "HALF_YEARLY", price: 34000, length: 6 },
    { imgUrl: "/pricing.jpg", title: "YEARLY", price: 67000, length: 12 },
  ];

  const openPopup = (plan) => {
    setSelectedPlan(plan);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedPlan(null);
    setIsPopupOpen(false);
  };

  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((plan) => (
          <div className="card" key={plan.title}>
            <img src={plan.imgUrl} alt={plan.title} />
            <div className="title">
              <h1>{plan.title}</h1>
              <h2>PACKAGE</h2>
              <h3>Rs {plan.price}</h3>
              <p>For {plan.length} Months</p>
              <button onClick={() => openPopup(plan)} className="discover-btn">
                Discover Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && <PlanPopup plan={selectedPlan} onClose={closePopup} />}
    </section>
  );
};

export default Pricing;
