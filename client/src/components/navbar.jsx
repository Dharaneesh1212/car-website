import { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdContactMail, MdMenu, MdClose } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { BiSolidCarMechanic } from "react-icons/bi";
import { FaCrown, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main id="navbar" className="w-screen fixed flex items-center justify-between p-4 z-10 bg-transparent">
      <div className="font-semibold text-xl text-white animate__animated animate__zoomIn">
        <h1>
          AUT<span className="text-red-600">O</span>W
          <span className="text-red-600">O</span>RKS
        </h1>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[5rem] left-0 w-full bg-black flex flex-col items-center gap-4 lg:flex lg:flex-row lg:static lg:top-0 lg:w-auto lg:bg-transparent`}
      >
        <Link
          to="/"
          className="animate__animated animate__zoomIn flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
          onClick={() => setIsOpen(false)}
        >
          <MdHome />
          HOME
        </Link>
        <Link
          to="/gallery"
          className="animate__animated animate__zoomIn flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
          onClick={() => setIsOpen(false)}
        >
          <GrGallery />
          GALLERY
        </Link>
        <Link
          to="/service"
          className="animate__animated animate__zoomIn flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
          onClick={() => setIsOpen(false)}
        >
          <BiSolidCarMechanic />
          SERVICE
        </Link>
        <Link
          to="/amc"
          className="animate__animated animate__zoomIn flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
          onClick={() => setIsOpen(false)}
        >
          <FaCrown />
          AMC
        </Link>
        <Link
          to="/contact"
          className="animate__animated animate__zoomIn flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
          onClick={() => setIsOpen(false)}
        >
          <MdContactMail />
          CONTACT
        </Link>
        <Link
          to="/register"
          className="animate__animated animate__zoomIn flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
          onClick={() => setIsOpen(false)}
        >
          <FaUser />
          REGISTER
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
