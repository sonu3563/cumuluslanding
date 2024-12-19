import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import axios from "axios";

// Card Component
function SubscriptionCard({ type, data, isActive, onHover }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 border-2 ${
        isActive ? "border-blue-500" : "border-transparent"
      } hover:border-blue-500 transition-all`}
      onMouseEnter={() => onHover(type)}
      onMouseLeave={() => onHover(null)}
    >
      <h2 className="text-xl font-semibold mb-4">
        {data.subscription_name}
        {data.recommended && (
          <span className="bg-blue-500 text-white text-xs px-1 py-1 rounded-full ml-2">
            Recommended
          </span>
        )}
      </h2>
      <p className="text-2xl font-bold mb-4">
        {data.price}
        {data.period && <span className="text-sm">{data.period}</span>}
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded mb-4">
        {data.buttonLabel}
      </button>
      <ul className="space-y-2">
        {data.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Subscription() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Fetch subscription data from the API
    axios
      .get("https://cumulus.onrender.com/api/subscriptions/get-subscriptions")
      .then((response) => {
        // Transform API data into the required format
        const formattedPlans = response.data.map((plan) => {
          return {
            subscription_name: plan.subscription_name,
            price: plan.cost.monthly || "Custom Pricing",
            period: plan.cost.monthly ? "/month" : null,
            features: [
              plan.features.storage,
              plan.features.encryption,
              plan.features.document_sharing,
              plan.features.inheritance_features,
              ...plan.features.integrations,
              ...plan.features.extra_features,
            ],
            buttonLabel: plan.cost.custom_pricing ? "Contact Us" : "Try Now",
            recommended: plan.subscription_name === "Legacy (Premium)", // Example condition for recommendation
          };
        });
        setPlans(formattedPlans);
      })
      .catch((error) => {
        console.error("Error fetching subscription data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Cumulus Subscription
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Upgrade to Cumulus Premium for exclusive features, advanced tools, and
        priority support!
      </p>
      <div className="flex justify-center mb-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
          Plans & Pricing
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 mb-6">
        <span>Monthly Payment</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
        </label>
        <span className="text-sm text-blue-500 font-semibold">
          Yearly payment{" "}
          <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
            25% off
          </span>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <SubscriptionCard
            key={index}
            type={plan.subscription_name}
            data={plan}
            isActive={hoveredPlan === plan.subscription_name}
            onHover={setHoveredPlan}
          />
        ))}
      </div>
    </div>
  );
}

export default Subscription;
