import React from 'react';

const CounselingForm = () => {
  return (
    <div className="fixed m-auto right-8 top-96 bg-white shadow-lg border border-yellow-500 p-6 rounded-lg w-80">
      <h3 className="text-lg font-semibold text-blue-900">GET PERSONALISED COUNSELLING</h3>
      <select className="w-full p-2 border mt-3 rounded">
        <option>Select Program</option>
      </select>
      <select className="w-full p-2 border mt-3 rounded">
        <option>Select Course...</option>
      </select>
      <div className="flex gap-2 mt-3">
        <input type="text" placeholder="First Name" className="w-1/2 p-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-1/2 p-2 border rounded" />
      </div>
      <div className="flex gap-2 mt-3">
        <input type="text" placeholder="Phone" className="w-1/2 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-1/2 p-2 border rounded" />
      </div>
      <div className="flex gap-2 mt-3">
        <input type="text" placeholder="City" className="w-1/2 p-2 border rounded" />
        <input type="text" placeholder="School" className="w-1/2 p-2 border rounded" />
      </div>
      <select className="w-full p-2 border mt-3 rounded">
        <option>Select Class</option>
      </select>
      <button className="w-full mt-4 bg-yellow-500 text-white py-2 rounded-lg">Submit ➤</button>
    </div>
  );
};

export default CounselingForm;
