"use client";
import { useState } from "react";

import { Addbenefits, Deletebenefits, Editbenefits } from "../PopUps";

const benefits = [
  {
    id: 1,

    title: "App Development",
    description: "web Development",
  },
  {
    id: 2,

    title: "App Development",
    description: "ios Development",
  },
  {
    id: 2,

    title: "App Development",
    description: "Game Development",
  },
];

export default function BenefitsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = benefits.filter((work) =>
    work.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-max sm:min-w-[97%] mt-8 sm:m-8 p-8 bg-white w-auto rounded-2xl shadow-custom max-w-[100%]">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-4xl font-bold ">Benefits</h2>
        <Addbenefits />
      </div>

      <div className="flex flex-col my-4 md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-lg font-medium text-gray-600">
          Show{" "}
          <select className="ml-2 border rounded-md px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>{" "}
          entries
        </div>
        <div className="flex items-center gap-2 my-8">
          <label className="text-lg font-medium text-gray-600">Search:</label>
          <input
            type="text"
            placeholder="Search Link..."
            className="border rounded-md px-3 py-1 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="min-w-full bg-white text-xl text-gray-700">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Title</th>
              <th className="px-6 py-3 text-left font-semibold">Description</th>
              <th className="px-6 py-3 text-left font-semibold">Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredPartners.length > 0 ? (
              filteredPartners.map((benefit) => (
                <tr
                  key={benefit.id}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4">{benefit.title}</td>
                  <td className="px-6 py-4">{benefit.description}</td>
                  <td className="px-6 py-4 flex gap-4 text-right">
                    <Editbenefits data={benefit} />
                    <Deletebenefits />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-400">
                  No entries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-xl text-gray-600 mt-4">
        <span>
          Showing 1 to {filteredPartners.length} of {filteredPartners.length}{" "}
          entries
        </span>
        <div className="flex items-center gap-1 my-6">
          <button className="px-3 py-1 border rounded-md bg-gray-50 hover:bg-gray-100">
            Previous
          </button>
          <span className="px-3 py-1 border rounded-md bg-blue-600 text-white">
            1
          </span>
          <button className="px-3 py-1 border rounded-md bg-gray-50 hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
