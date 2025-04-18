import sidebarImg from '../../assets/singPic.png';
import { Link } from 'react-router-dom';

const SignSidebar = () => {
  return (
    <div className="h-full bg-[#E6E6E6] flex flex-col justify-between p-6 text-sm font-medium">
      <div>
        <h1 className="text-2xl font-bold mb-4 mt-10">Why Befiler?</h1>
        <img 
          src={sidebarImg} 
          alt="Sidebar Illustration" 
          className="mb-6 w-full max-w-[250px] mx-auto object-contain" 
        />

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 ">
          <li>Easiest way to file tax returns</li>
          <li>3 Steps NTN registration</li>
          <li>Professional tax expert at your support</li>
          <li>One fee for all</li>
          <li>Your data is private & confidential</li>
          <li>Highest rated app by users on Google store</li>
          <li>Pakistan's 2021 digital award winner</li>
        </ul>
      </div>

      <div className="text-center  text-gray-700">
        <p className="font-bold">2025 Befiler (Pvt) Limited</p>
        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-400 mt-2">
          <Link to="/terms" className="hover:underline">T&C, Privacy Policy</Link>
          <span>||</span>
          <Link to="/" className="hover:underline">Contact:info@befiler.com</Link>
        </div>
      </div>
    </div>
  );
};

export default SignSidebar;