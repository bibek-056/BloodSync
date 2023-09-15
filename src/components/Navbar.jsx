import  { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Inspire: STEM for Social Cause</div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          &#8801;
        </button>
      </div>
      <div
        className={`lg:flex ${menuOpen ? 'fixed inset-0 z-50 overflow-hidden bg-gray-800' : 'hidden'}`}
      >
        <div className="lg:hidden absolute top-0 right-0 p-4">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col space-y-20 lg:space-y-0 lg:space-x-8 lg:flex-row justify-center items-center h-full ">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
