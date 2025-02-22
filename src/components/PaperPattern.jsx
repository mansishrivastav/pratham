import React from 'react';

const PaperPattern = () => {
  const subjects = [
    {
      subject: "Quantitative Techniques",
      weightage: "10-14",
      marks: "10%",
      duration: ""
    },
    {
      subject: "Logical Reasoning",
      weightage: "22-26",
      marks: "20%",
      duration: ""
    },
    {
      subject: "English Language",
      weightage: "22-26",
      marks: "20%",
      duration: "120 Minutes"
    },
    {
      subject: "Current Affairs and GK",
      weightage: "28-32",
      marks: "25%",
      duration: ""
    },
    {
      subject: "Legal Reasoning",
      weightage: "28-32",
      marks: "25%",
      duration: ""
    },
    {
      subject: "Total",
      weightage: "120 Marks",
      marks: "100%",
      duration: ""
    }
  ];

  return (
    <div className="mt-16 w-[900px] mx-24">
      <h2 className="text-[#081153] text-2xl font-bold">Paper Pattern</h2>
      <div className="w-28 h-1 bg-yellow-500 my-4"></div>
      
      <table className="w-full border-collapse mt-8">
        <thead>
          <tr>
            <th className="text-left p-4 bg-[#1e2f6f] text-white font-semibold border border-gray-200">
              Subjects
            </th>
            <th className="text-left p-4 bg-[#1e2f6f] text-white font-semibold border border-gray-200">
              Weightage
            </th>
            <th className="text-left p-4 bg-[#1e2f6f] text-white font-semibold border border-gray-200">
              Maximum Marks
            </th>
            <th className="text-left p-4 bg-[#1e2f6f] text-white font-semibold border border-gray-200">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((item, index) => (
            <tr key={index}>
              <td className={`p-4 border border-gray-200 font-medium ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                {item.subject}
              </td>
              <td className={`p-4 border border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                {item.weightage}
              </td>
              <td className={`p-4 border border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                {item.marks}
              </td>
              <td className="p-4 border border-gray-200 bg-white">
                {item.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className='list-disc mt-6'>
        <li><span className='font-bold'>Negative Marking:</span> Yes (-0.25)</li>
        <li><span className='font-bold'>Mode of Examination:</span> Offline</li>
        <li><span className='font-bold'>Consortium of CLAT Official Website:</span> <span className='text-blue-700'>consortiumofnlus.ac.in</span></li>
      </ul>
    </div>
  );
};

export default PaperPattern;