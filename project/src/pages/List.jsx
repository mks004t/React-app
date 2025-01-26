import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const BeltManagementSystem = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const beltsData = [
    {
      sequence: 1,
      department: "Mining",
      name: "CV-001",
      width: "1200mm",
      length: "500m",
      previousReplacement: "2023-06-15",
      latestRepair: "2024-01-10",
      life: "24 months",
      predictedLife: "30 months",
      jobDescription: "Edge repair",
      status: "Planned",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Card className="shadow-xl">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Belt Management System</h1>
          <p className="mb-6 text-gray-600">
            Monitor and manage conveyor belt maintenance and replacement schedules
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">From</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="-/-/-"
                className="w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">To</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="-/-/-"
                className="w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <select
                className="w-full border-gray-300 rounded-md shadow-sm"
                defaultValue="All Departments"
              >
                <option>All Departments</option>
                <option>Mining</option>
                <option>Logistics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Search</label>
              <Input
                placeholder="Search conveyor belts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <Button className="bg-gray-200 text-gray-700">Filters</Button>
            <Button className="bg-gray-200 text-gray-700">Export</Button>
          </div>

          <table className="w-full text-left bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Sequence</th>
                <th className="p-2">Department</th>
                <th className="p-2">Conveyor Name</th>
                <th className="p-2">Belt Width</th>
                <th className="p-2">Belt Length</th>
                <th className="p-2">Previous Replacement</th>
                <th className="p-2">Latest Repair</th>
                <th className="p-2">Life of Belt</th>
                <th className="p-2">Predicted Life</th>
                <th className="p-2">Job Description</th>
                <th className="p-2">Planned/Breakdown</th>
              </tr>
            </thead>
            <tbody>
              {beltsData.map((belt, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{belt.sequence}</td>
                  <td className="p-2">{belt.department}</td>
                  <td className="p-2">{belt.name}</td>
                  <td className="p-2">{belt.width}</td>
                  <td className="p-2">{belt.length}</td>
                  <td className="p-2">{belt.previousReplacement}</td>
                  <td className="p-2">{belt.latestRepair}</td>
                  <td className="p-2">{belt.life}</td>
                  <td className="p-2">{belt.predictedLife}</td>
                  <td className="p-2">{belt.jobDescription}</td>
                  <td className="p-2">{belt.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Showing 1 to 10 of 20 results</p>
            <div className="flex gap-2">
              <Button className="bg-gray-200 text-gray-700">Previous</Button>
              <Button className="bg-gray-200 text-gray-700">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeltManagementSystem;
