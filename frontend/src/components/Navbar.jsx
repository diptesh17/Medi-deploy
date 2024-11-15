import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/dashboard"
          className="text-white text-3xl font-bold ml-4 font-['Roboto']"
        >
          Medicare
        </Link>
        <div className="flex items-center space-x-6 ml-auto">
          <Link
            to="/home"
            className="text-white text-lg hover:text-gray-200 font-['Roboto'] font-medium"
          >
            Home
          </Link>
          <Link
            to="/help"
            className="text-white text-lg hover:text-gray-200 font-['Roboto'] font-medium"
          >
            Help
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:text-gray-200 font-['Roboto'] font-medium"
          >
            Contact
          </Link>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-200 font-['Roboto']"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
