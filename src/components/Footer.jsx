import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import logo from '../assets/logo_white3.5.png';

const Footer = () => {
  return (
    <footer className="bg-[#3B536D] text-[#EFF7FF] py-10 ">
      <div className="flex flex-col lg:flex-row justify-between items-center ">
        {/* Left side */}
        <div className=" w-full order-2 lg:order-1 justify-center items-center align-middle text-center lg:w-1/3">
          <div className="mb-4">
            <p> INSPIRE: STEM for Social Impact</p>
            <p>Elliott 164, University of Victoria</p>
            <p>PO BOX 1700 STN CSC</p>
            <p>Victoria, B.C V8W 2Y2, Canada</p>
          </div>
        </div>

        {/* Middle logo */}
        <div className=" w-full order-1 lg:order-2 lg:w-2/3 m-2 flex items-center justify-center align-middle text-center">
          {/* Replace 'logo.png' with the path to your logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-16 lg:h-18 w-4/5 lg:w-2/3 mx-auto"
          />
        </div>

        {/* Right side social icons */}
        <div className="w-full order-3 lg:w-1/3 lg:order-3  p-2 flex items-center justify-around">
          <div className="bg-[#EFF7FF] hover:bg-[rgb(185,209,233)] p-3 my-3 rounded-full text-[#3B536D] text-2xl mx-8">
            <a href="https://www.instagram.com/inspireuvic/">
              <AiOutlineInstagram />
            </a>
          </div>
          <div className="bg-[#EFF7FF] hover:bg-[rgb(185,209,233)] p-3 my-3 rounded-full text-[#3B536D] text-2xl mx-8">
            <a href="https://www.linkedin.com/company/uvicinspire/posts/?feedView=all">
              <AiOutlineLinkedin />
            </a>
          </div>
          <div className="bg-[#EFF7FF] hover:bg-[rgb(185,209,233)] p-3 my-3 rounded-full text-[#3B536D] text-2xl mx-8">
            <a href="https://twitter.com/inspireuvic">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
