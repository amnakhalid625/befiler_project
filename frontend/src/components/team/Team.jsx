import React from "react";
import "./team.css";

// Import your images
import consultant1 from "../../assets/consultant-1.png";
import consultant2 from "../../assets/consultant-2.png";
import consultant3 from "../../assets/consultant-3.png";
import consultant4 from "../../assets/consultant-4.png";
import consultant5 from "../../assets/consultant-5.png";
import consultant6 from "../../assets/consultant-6.png";
import consultant7 from "../../assets/consultant-7.png";
import consultant8 from "../../assets/consultant-8.png";
import consultant9 from "../../assets/consultant-9.png";
import consultant10 from "../../assets/consultant-10.png";

const teamMembers = [
  {
    name: "Imama Siddiqui",
    role: "Manager Digital Tax",
    image: consultant1,
  },
  {
    name: "Muhammad Sharif",
    role: "Manager Corporate & Tax Services",
    image: consultant2,
  },
  {
    name: "Samrah Qazalbash",
    role: "Supervisor Tax & Account Services",
    image: consultant3,
  },
  {
    name: "Hina Sheikh",
    role: "Business Development Executive",
    image: consultant4,
  },
  {
    name: "Muhammad Ameer Ahmad",
    role: "Manager Tax Services",
    image: consultant5,
  },
  {
    name: "Muhammad Jamil",
    role: "CFO",
    image: consultant6,
  },
  {
    name: "Shahnawaz Samoon",
    role: "Manager Coordination & Communication",
    image: consultant7,
  },
  {
    name: "Faisal Nawaz",
    role: "Manager Sales Tax",
    image: consultant8,
  },
  {
    name: "Osama Kaleem",
    role: "Digital Marketing Specialist",
    image: consultant9,
  },
  {
    name: "Naseem Ahmed",
    role: "Corporate Tax Associate",
    image: consultant10,
  },
];

const Team = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Team of more than <span className="text-red-600">100 Talented and Qualified</span>
        </h2>
        <p className="text-2xl text-gray-700 mb-12">
          is available for your <span className="text-red-600">Support</span>
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className=" rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-red-300 mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;