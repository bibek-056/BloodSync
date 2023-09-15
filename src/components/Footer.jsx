import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import logo from '../assets/logo_white3.5.png';

const Footer = () => {
  return (
    <footer className="bg-[#3B536D] text-[#EFF7FF] p-4">
      <div className="lg:flex justify-between items-center">
        {/* Left side */}
        <div className="w-full justify-center items-center align-middle text-center lg:w-1/3">
          <div className="mb-4">
            <p> INSPIRE: STEM for Social Impact</p>
            <p>Elliott 164, University of Victoria</p>
            <p>PO BOX 1700 STN CSC</p>
            <p>Victoria, B.C V8W 2Y2, Canada</p>
          </div>
        </div>

        {/* Middle logo */}
        <div className="w-full lg:w-2/3 m-2 flex items-center justify-center align-middle text-center">
          {/* Replace 'logo.png' with the path to your logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 lg:h-20 w-4/5 lg:w-2/3 mx-auto"
          />
        </div>

        {/* Right side social icons */}
        <div className="w-full lg:w-1/3 p-2 flex items-center justify-around">
          <div className="bg-[#EFF7FF] hover:bg-[rgb(185,209,233)] p-3 my-3 rounded-full text-[#3B536D] text-2xl mx-8">
            <a href="#">
              <AiOutlineInstagram />
            </a>
          </div>
          <div className="bg-[#EFF7FF] hover:bg-[rgb(185,209,233)] p-3 my-3 rounded-full text-[#3B536D] text-2xl mx-8">
            <a href="#">
              <AiOutlineLinkedin />
            </a>
          </div>
          <div className="bg-[#EFF7FF] hover:bg-[rgb(185,209,233)] p-3 my-3 rounded-full text-[#3B536D] text-2xl mx-8">
            <a href="#">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
