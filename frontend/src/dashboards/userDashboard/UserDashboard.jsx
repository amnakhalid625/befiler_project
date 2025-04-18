import React from 'react';

// Import images from assets folder
import personalTaxIcon from '/src/assets/ud1.png';
import familyTaxIcon from '/src/assets/ud2.png';
import ntnRegistrationIcon from '/src/assets/ud3.png';
import irisProfileIcon from '/src/assets/ud4.png';
import businessIncorporationIcon from '/src/assets/ud5.png';
import gstRegistrationIcon from '/src/assets/ud6.png';
import serviceChargesIcon from '/src/assets/ud7.png';
import salaryCalculatorIcon from '/src/assets/ud8.png';
import faqIcon from '/src/assets/ud9.png';
import blogIcon from '/src/assets/ud10.png';
import videosIcon from '/src/assets/ud11.png';
import DashboardNavbar from '../../components/dashboardnavbar/DashBoardNavbar';
import Blogs from '../../components/blogs/Blogs'; 
import Videos from '../../components/videos/Video';


const UserDashboard = () => {
  // Dashboard services data
  const services = [
    {
      id: 1,
      title: 'Personal Tax Filing',
      icon: personalTaxIcon
    },
    {
      id: 2,
      title: 'Family Tax Filing',
      icon: familyTaxIcon
    },
    {
      id: 3,
      title: 'NTN Registration',
      icon: ntnRegistrationIcon
    },
    {
      id: 4,
      title: 'IRIS Profile Update',
      icon: irisProfileIcon
    },
    {
      id: 5,
      title: 'Business Incorporation',
      icon: businessIncorporationIcon
    },
    {
      id: 6,
      title: 'GST Registration',
      icon: gstRegistrationIcon
    },
    {
      id: 7,
      title: 'Service Charges',
      icon: serviceChargesIcon
    },
    {
      id: 8,
      title: 'Salary Tax Calculator',
      icon: salaryCalculatorIcon
    },
    {
      id: 9,
      title: 'FAQ',
      icon: faqIcon
    },
    {
      id: 10,
      title: 'Blog & Updates',
      icon: blogIcon
    },
    {
      id: 11,
      title: 'Videos',
      icon: videosIcon
    }
  ];

  return (
    <>
    <DashboardNavbar />
    <div className="bg-white shadow-sm py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">User Dashboard</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="flex flex-col items-center transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mb-2 border border-gray-100 p-1">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm text-center font-medium text-gray-800">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Videos />
<Blogs />

    </>
  );
};

export default UserDashboard;