/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function PricePanel() {
  const plans = [
    {
      name: "Free",
      price: "0",
      user: "Single User",
      storage: true,
      publicProject: true,
      communityAccess: true,
      privateProject: false,
      phoneSupport: false,
      subDomain: false,
      statusReport: false,
    },
    {
      name: "Plus",
      price: "9",
      user: "5 Users",
      storage: true,
      publicProject: true,
      communityAccess: true,
      privateProject: true,
      phoneSupport: true,
      subDomain: true,
      statusReport: false,
    },
    {
      name: "Pro",
      price: "49",
      user: "Unlimited Users",
      storage: true,
      publicProject: true,
      communityAccess: true,
      privateProject: true,
      phoneSupport: true,
      subDomain: true,
      statusReport: true,
    },
  ];

  return (
    <section className="container">
      {plans.map((plan, index) => (
        <PricePlan planDetails={plan} key={index} />
      ))}
    </section>
  );
}

function PricePlan({ planDetails }) {
  const [show, setShow] = useState(true);
  const fontBold = { fontWeight: planDetails.name === "Pro" ? 800 : 600 };

  return (
    <article
      className={`price--plan price--plan-${planDetails.name.toLowerCase()}`}
    >
      <p className="plan-name">{planDetails.name.toUpperCase()}</p>
      <p className="plan-price" style={fontBold}>
        ${planDetails.price}/Month
      </p>
      <hr />
      <ul className="plan-details">
        <li className={`details apply`}>{planDetails.user}</li>
        <li
          className={`details ${planDetails.storage ? "apply" : "not-apply"}`}
        >
          50GB Storage
        </li>
        <li
          className={`details ${
            planDetails.publicProject ? "apply" : "not-apply"
          }`}
        >
          Unlimited Public Projects
        </li>
        <li
          className={`details ${
            planDetails.communityAccess ? "apply" : "not-apply"
          }`}
        >
          Community Access
        </li>
        <li
          className={`details ${
            planDetails.privateProject ? "apply" : "not-apply"
          }`}
        >
          Unlimited Private Projects
        </li>
        <li
          className={`details ${
            planDetails.phoneSupport ? "apply" : "not-apply"
          }`}
        >
          Dedicated Phone Support
        </li>
        <li
          className={`details ${planDetails.subDomain ? "apply" : "not-apply"}`}
        >
          Free Sub Domain
        </li>
        <li
          className={`details ${
            planDetails.statusReport ? "apply" : "not-apply"
          }`}
        >
          Monthly Status Reports
        </li>
      </ul>
      {/* Conditonal Rendering */}

      {show ? (
        <button
          type="button"
          className="btn btn-submit"
          onClick={() => setShow(!show)}
        >
          Buy
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-remove"
          onClick={() => setShow(!show)}
        >
          Remove
        </button>
      )}
    </article>
  );
}

export default PricePanel;
