import React from "react";
import { FaUserCircle, FaBell, FaThLarge, FaCheckCircle, FaSyncAlt, FaExclamationTriangle, FaUsers } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";

const lineData = [
  { name: "19 June", cost: 0 },
  { name: "20 June", cost: 3000 },
  { name: "21 June", cost: 4000 },
  { name: "22 June", cost: 4000 },
  { name: "23 June", cost: 5000 },
  { name: "24 June", cost: 6000 },
  { name: "25 June", cost: 7000 }
];

const pieData = [
  { name: "Under Budget", value: 48, color: "#48bb78" },
  { name: "On Budget", value: 33, color: "#4299e1" },
  { name: "Over Budget", value: 19, color: "#e53e3e" }
];

const Dashboard = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-teal-400">H</span>OURS
        </h1>
        <ul className="flex gap-6 text-sm mx-auto items-center justify-center flex-1">
          <li className="cursor-pointer border-b-2 border-teal-400">Dashboard</li>
          <li className="cursor-pointer hover:text-teal-400">Projects</li>
          <li className="cursor-pointer hover:text-teal-400">Team</li>
          <li className="cursor-pointer hover:text-teal-400">Clients</li>
          <li className="cursor-pointer hover:text-teal-400">Time</li>
          <li className="cursor-pointer hover:text-teal-400">Reports</li>
        </ul>
        <div className="flex items-center gap-3">
          <FaBell className="text-xl text-gray-400 cursor-pointer" />
          <FaUserCircle className="text-2xl text-gray-400" />
          <span className="text-sm">Mario</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex gap-4 my-6">
        {/* Left Side: Summary Cards and Charts */}
        <div className="flex-1">
          {/* Summary Cards */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {[{ icon: <FaThLarge className="text-teal-400 text-xl absolute top-2 left-2" />, value: 5, label: "Total Projects" },
              { icon: <FaCheckCircle className="text-teal-400 text-xl absolute top-2 left-2" />, value: 1, label: "Completed" },
              { icon: <FaSyncAlt className="text-teal-400 text-xl absolute top-2 left-2" />, value: 3, label: "Ongoing" },
              { icon: <FaExclamationTriangle className="text-red-500 text-xl absolute top-2 left-2" />, value: 1, label: "Delayed", className: "bg-red-200" },
              { icon: <FaUsers className="text-teal-400 text-xl absolute top-2 left-2" />, value: 5, label: "Employees" }].map((item, index) => (
              <div key={index} className={`p-4 shadow rounded-xl relative ${item.className || 'bg-white'}`}>
                <div>{item.icon}</div>
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-2xl font-semibold mt-4">{item.value}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Total Revenue</h2>
              <LineChart width={400} height={300} data={[{ name: "19 June", cost: 0 }, { name: "20 June", cost: 3000 }, { name: "21 June", cost: 4000 }, { name: "22 June", cost: 4000 }, { name: "23 June", cost: 5000 }, { name: "24 June", cost: 6000 }, { name: "25 June", cost: 7000 }]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cost" stroke="#4299e1" strokeWidth={2} />
              </LineChart>
            </div>

            <div className="bg-white p-4 shadow rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Budget Status</h2>
              <PieChart width={300} height={300}>
                <Pie data={[{ name: "Under Budget", value: 48, color: "#48bb78" }, { name: "On Budget", value: 33, color: "#4299e1" }, { name: "Over Budget", value: 19, color: "#e53e3e" }]} cx={150} cy={150} outerRadius={100} dataKey="value">
                  {[{ color: "#48bb78" }, { color: "#4299e1" }, { color: "#e53e3e" }].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>

        {/* Right Side: Team Mood */}
        <div className="w-64 bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Team Mood</h2>
          {["Andrea", "Alvaro", "Juan", "Jose", "Maria"].map((name, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <span>{name}</span>
              <span className="text-yellow-500">😊</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;