import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";

const BudgetSection = () => {
  const [filter, setFilter] = useState("All");

  
  return (
    <div>
      {/* Budget Status Section */}
      <div className="bg-white p-4 shadow rounded-xl mt-6">
        <h2 className="text-lg font-semibold mb-4">Budget Status</h2>
        <div className="flex items-center gap-4 mb-4">
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">+ Add New Project</button>
          <button className="border border-gray-300 py-2 px-4 rounded-lg">Download Report</button>
          <input type="date" className="border border-gray-300 p-2 rounded-lg" />
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">Filter</button>
        </div>

        {/* Budget Cards */}
        <div className="grid grid-cols-4 gap-4">
          {["Insurance App", "Neo", "VR Website", "VR Website"].map((project, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg shadow">
              <h3 className="font-semibold">{project}</h3>
              <p className="text-gray-500 text-sm">Total Budget: 70,000€</p>
              <p className={`text-sm ${index === 0 ? 'text-red-500' : 'text-green-500'}`}>{index === 0 ? "-2,500€" : "4,000€"}</p>
              <div className="mt-2 h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className={`h-full ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-400' : 'bg-teal-500'}`}
                  style={{ width: `${index === 0 ? '70%' : index === 1 ? '60%' : index === 2 ? '90%' : '50%'}` }}
                ></div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Actual hours: 1,100 | Sold hours: {index === 2 ? '2,000' : index === 1 ? '1,000' : '1,100'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetSection;
