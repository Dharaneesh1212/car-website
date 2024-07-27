import { Link, Outlet } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { BiSolidCarMechanic } from "react-icons/bi";
import { GiQueenCrown } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <main className="w-full h-[5rem] fixed flex items-center justify-between p-10">
      <div className="font-semibold text-xl text-white">
        <h1>
          AUT<span className="text-red-600">O</span>W
          <span className="text-red-600">O</span>RKS
        </h1>
      </div>
      <div className="flex items-center justify-center gap-7">
        <Link
          to="/"
          className="flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
        >
          <MdHome />
          HOME
        </Link>
        <Link
          to="/gallery"
          className="flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
        >
          <GrGallery />
          GALLERY
        </Link>
        <Link
          to="/service"
          className="flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
        >
          <BiSolidCarMechanic />
          SERVICE
        </Link>
        <Link
          to="/amc"
          className="flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
        >
          <GiQueenCrown />
          AMC
        </Link>
        <Link
          to="/contact"
          className="flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
        >
          <MdContactMail />
          CONTACT
        </Link>
        <Link
          to="/register"
          className="flex justify-center items-center gap-1 text-xl text-white hover:text-red-600"
        >
          <FaUser />
          REGISTER
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
