import React from 'react';

const ImportantDates = () => {
  const dates = [
    { activity: "Application Opens", date: "July, 2024" },
    { activity: "Application Closes", date: "November, 2024" },
    { activity: "Issues of Admit Card", date: "November 2024 (Last week) or December 2024 (First week)" },
    { activity: "Exam Date", date: "December 01, 2024 (Offline)" },
    { activity: "Release of Answer Key", date: "December 2024" },
    { activity: "Result Declaration", date: "December 2024 or January 2025" },
    { activity: "Counselling", date: "January 2025" }
  ];

  return (
    <div className="mt-16 w-[900px] mx-24">
      <h2 className="text-[#081153] text-2xl font-bold">Important Dates 2025</h2>
      <div className="w-28 h-1 bg-yellow-500 my-4"></div>
      
      <table className="w-full border-collapse mt-8">
        <thead>
          <tr>
            <th className="text-left p-4 bg-[#1e2f6f] text-white font-semibold border border-gray-200 w-1/3">
              Activity
            </th>
            <th className="text-left p-4 bg-[#1e2f6f] text-white font-semibold border border-gray-200 w-2/3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {dates.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="p-4 border border-gray-200 font-medium">
                {item.activity}
              </td>
              <td className="p-4 border border-gray-200">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDates;