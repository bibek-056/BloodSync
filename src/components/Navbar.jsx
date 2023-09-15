import { useState } from 'react';
import logo from '../assets/logo_white3.5.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [networkDropdownOpen, setNetworkDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!projectsDropdownOpen);
  };

  const toggleNetworkDropdown = () => {
    setNetworkDropdownOpen(!networkDropdownOpen);
  };

  const toggleMediaDropdown = () => {
    setMediaDropdownOpen(!mediaDropdownOpen);
  };

  return (
    <nav className="bg-[#3B536D] p-4 flex justify-between items-center">
      <div className="text-[#EFF7FF] text-xl font-bold">
        <img src={logo} alt="Logo" className="h-10 w-72" />
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          &#8801;
        </button>
      </div>
      <div
        className={`lg:flex ${
          menuOpen
            ? 'fixed inset-0 z-50 overflow-hidden bg-[#EFF7FF]'
            : 'hidden'
        }`}
      >
        <div className="lg:hidden absolute top-0 right-0 p-4">
          <button
            onClick={toggleMenu}
            className="text-[#3B536D] text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <ul className="flex uppercase text-2xl font-semibold text-[#3B536D] lg:text-lg lg:text-[#eff7ff]  flex-col space-y-14 lg:space-y-0 lg:space-x-8 lg:flex-row justify-center items-center h-full ">
          <li className="hover:text-[#92E4DC]">
            <a href="https://inspireuvic.org/about">About</a>
          </li>
          <li
            onMouseEnter={toggleProjectsDropdown}
            onMouseLeave={toggleProjectsDropdown}
            className="hover:text-[#92E4DC]"
          >
            <a href="https://inspireuvic.org/projects">Project</a>
            {projectsDropdownOpen && (
              <div
                className={`uppercase absolute top-0 right-80 mt-12 bg-[#3B536D] text-[#eff7ff]  border border-[#3B536D] py-2 px-4 w-60`}
              >
                {/* Add your dropdown content here */}
                <ul>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/fall2023">fall 2023</a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/fall2022">FALL 2022</a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/summer2022">Summer 2022</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            onMouseEnter={toggleNetworkDropdown}
            onMouseLeave={toggleNetworkDropdown}
            className="hover:text-[#92E4DC]"
          >
            <p className='cursor-pointer'>Network</p>
            {networkDropdownOpen && (
              <div
                className={` uppercase absolute top-0 right-52 mt-12 bg-[#3B536D]
                 text-[#eff7ff] border border-[#3B536D] py-2 px-4 w-60`}
              >
                {/* Add your dropdown content here */}
                <ul>
                  <li className=" uppercase hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/ambassadors">
                      Ambassadors
                    </a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/design-challenges">
                      Design Challanges
                    </a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/community">
                      Community
                    </a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/initiatives">
                     Learn More....
                    </a>
                  </li>

                  {/* https://inspireuvic.org/initiatives */}
                </ul>
              </div>
            )}
          </li>
          <li
            className="hover:text-[#92E4DC]"
            onMouseEnter={toggleMediaDropdown}
            onMouseLeave={toggleMediaDropdown}
          >
            <a href="#">Media</a>
            {mediaDropdownOpen && (
              <div
                className={` uppercase absolute top-0 right-0 mt-12
                bg-[#3B536D] text-[#eff7ff] border border-[#3B536D] py-2 px-4 w-60`}
              >
                {/* Add your dropdown content here */}
                <ul>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/newsletters-copy">
                      Newsletter
                    </a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/inspire-podcast">
                      Podcast
                    </a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li className="hover:text-[#92E4DC]">
                    <a href="https://inspireuvic.org/program-guide">
                      Program Reports
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <div className=" hover:bg-[rgb(185,209,233)] uppercase rounded-full text-[#3B536D] px-4 py-1 mr-2 bg-[#eff7ff]">
              <a href="https://inspireuvic.org/join-us">Contact</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
