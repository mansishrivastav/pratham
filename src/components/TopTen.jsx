import React from 'react';

const TopTen = () => {
  const nluData = [
    { rank: 1, name: "National Law School Of India University, Bengaluru", seats: 300 },
    { rank: 2, name: "NALSAR University of Law, Hyderabad", seats: 132 },
    { rank: 3, name: "National Law Institute University, Bhopal", seats: 202 },
    { rank: 4, name: "The West Bengal National University Of Juridical Science, Kolkata", seats: 132 },
    { rank: 5, name: "National Law University, Jodhpur", seats: 120 },
    { rank: 6, name: "Hidayatullah National Law University, Raipur", seats: 180 },
    { rank: 7, name: "Gujarat National Law University, Gandhinagar", seats: 204 },
    { rank: 8, name: "Dr. Ram Manohar Lohiya National Law University, Lucknow", seats: 187 },
    { rank: 9, name: "Rajiv Gandhi National University of Law, Patiala", seats: 214 },
    { rank: 10, name: "Chanakya National Law University, Patna", seats: 138 },
    { rank: 11, name: "National University of Advanced Legal Studies, Kochi", seats: 136 },
    { rank: 12, name: "National Law University Odisha, Cuttack", seats: 180 },
    { rank: 13, name: "National University of Study & Research in Law, Ranchi", seats: 122 },
    { rank: 14, name: "National Law University & Judicial Academy, Assam", seats: 60 },
    { rank: 15, name: "Damodaram Sanjivayya National Law University, Visakhapatnam", seats: 138 },
    { rank: 16, name: "Tamil Nadu National Law School, Tiruchirappalli", seats: 120 },
    { rank: 17, name: "Maharashtra National Law University, Mumbai", seats: 122 },
    { rank: 18, name: "Maharashtra National Law University, Nagpur", seats: 240 },
    { rank: 19, name: "Maharashtra National Law University, Aurangabad", seats: 120 },
    { rank: 20, name: "Himachal Pradesh National Law University, Shimla", seats: 160 },
    { rank: 21, name: "Dharmashastra National Law University, Jabalpur", seats: 134 },
    { rank: 22, name: "Dr BR Ambedkar National Law University Sonipat, Haryana", seats: 120 },
  ];

  const newNLUs = [
    { rank: 23, name: "National Law University, Tripura", seats: 120 },
    { rank: 24, name: "GNLU, Silvassa Campus", seats: 66 },
    { rank: 25, name: "Dr. Rajendra Prasad National Law University, Prayagraj", seats: 60 },
  ];

  return (
    <div className="mt-24 w-[900px] mx-24">
      <h2 className="text-[#081153] text-2xl font-bold">Top 25 NLUs under CLAT</h2>
      <div className="w-40 h-1 bg-yellow-500 my-4"></div>
      <table className="w-full border-collapse bg-white  border border-gray-300 overflow-hidden">
        <thead className="bg-[#081153] text-white">
          <tr>
            <th className="p-4 text-left">Rank</th>
            <th className="p-4 text-left">NLUs</th>
            <th className="p-4 text-left">Seats</th>
          </tr>
        </thead>
        <tbody >
          {nluData.map((nlu, index) => (
            <tr key={nlu.rank} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="p-4 border border-gray-200">{nlu.rank}.</td>
              <td className="p-4 border border-gray-200">{nlu.name}</td>
              <td className="p-4 border border-gray-200">{nlu.seats}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="p-4 bg-gray-100 font-semibold text-center text-lg">
              New NLUs
            </td>
          </tr>
          {newNLUs.map((nlu, index) => (
            <tr key={nlu.rank} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="p-4 border border-gray-200">{nlu.rank}.</td>
              <td className="p-4 border border-gray-200">{nlu.name}</td>
              <td className="p-4 border border-gray-200">{nlu.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-sm text-gray-600">
        • Source: Consortium of CLAT
      </div>
    </div>
  );
};

export default TopTen;