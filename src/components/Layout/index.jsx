import { useState } from "react";
import {
  FiShoppingCart,
  FiUser,
  FiHeart,
  FiSearch,
  FiSettings,
} from "react-icons/fi";
import { RiAccountCircle2Line } from "react-icons/ri";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import logo from "/assets/logo.png";
import NavbarMobile from "../Navbar/NavbarItemsMobile";
import NavbarItems from "../Navbar/navbarItems";
import Footer from "../Home/FooterSection";
import Cart from "../Home/CartSection";
import { Link } from "react-router-dom";

function Layout({children}) {
  const [cartCount] = useState(0);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemCount = 3;

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div className="min-h-screen bg-primary overflow-hidden  ">
      <header className="bg-black shadow-sm ">
        <div className="container mx-auto px-8 py-0 xs:px-2 py-2">
          <div className="flex flex-col xl:flex-row justify-between items-center">
            <div className="w-full flex flex-row justify-between items-center ">
              <div className="flex flex-row justify-between w-full ">
                <Link to="/">
                <img
                  src={
                    logo
                  }
                  alt="Naturekart Logo"
                  className="w-40 h-30 "
                />
                </Link>
               
                <div className=" lg:hidden ">
                  <button
                    className="text-white hover:text-primary   "
                    onClick={() => setIsNavbarOpen(true)}
                  >
                    <RiMenuUnfold2Line size={24} />
                  </button>
                </div>
              </div>

              <div className=" hidden md:block">
                <NavbarItems />
              </div>
            </div>

            <div className="hidden md:flex flex-row items-center space-x-8">
              <button
                onClick={handleHeartClick}
                className="p-2 rounded-full shadow hover:bg-primary transition"
              >
                {isHeartFilled ? (
                  <MdFavorite size={25} className="text-white" />
                ) : (
                  <MdFavoriteBorder size={25} className="text-gray-400" />
                )}
              </button>
              <button className="text-heading hover:text-primary">
                <RiAccountCircle2Line size={25} />
              </button>
              <button className="text-heading hover:text-primary">
                <FiSearch size={25} />
              </button>
              <button className="text-heading hover:text-primary">
                <FiSettings size={25} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="text-white   relative"
              >
                <FiShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-yellowbg text-white text-xs font-semibold rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        <NavbarMobile
          isOpen={isNavbarOpen}
          toggleSidebar={() => setIsNavbarOpen(false)}
        />
      </header>
      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      <main className="flex-grow">{children}</main>

      <Footer />
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around items-center py-3 md:hidden">
        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiHeart size={20} />
          <span className="text-xs">Fav</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center relative">
          <FiShoppingCart size={20} />
          <span className="text-xs">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiSearch size={20} />
          <span className="text-xs">Search</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiUser size={20} />
          <span className="text-xs">Account</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiSettings size={20} />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </div>
  );
}

export default Layout;
