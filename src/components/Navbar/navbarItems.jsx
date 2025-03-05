import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = () => {
    const menuItems = [
        {
            title: "Home",
            fashionTypes: { "SUMMER FASHION": [] },
            image: "",
        },
        {
            title: "Feature",
            fashionTypes: {
                "WINTER FASHION": ["Home", "About", "Services", "Contact"],
                "SUMMER FASHION": ["T-Shirts", "Shorts", "Sandals", "Sunglasses"],
                "AUTUMN FASHION": ["Jackets", "Boots", "Scarves", "Sweaters"],
                "SPRING FASHION": ["Dresses", "Cardigans", "Light Jackets", "Sneakers"],
                "CASUAL WEAR": ["Jeans", "Hoodies", "Sneakers", "T-Shirts"],
                "FORMAL WEAR": ["Suits", "Ties", "Dress Shoes", "Blazers"],
                "SPORTSWEAR": ["Running Shoes", "Gym Wear", "Tracksuits", "Compression Wear"],
                "TRADITIONAL WEAR": ["Sarees", "Kurtas", "Kimonos", "Ethnic Dresses"],
                "STREET STYLE": ["Graphic Tees", "Cargo Pants", "Sneakers", "Caps"],
                "LUXURY FASHION": ["Designer Wear", "Jewelry", "Luxury Bags", "High-End Shoes"]
            },
            image: "https://themes.pixelstrap.com/multikart/assets/images/menu-banner.jpg",
        }
        ,
        {
            title: "Shops",
            fashionTypes: {
                "VENDOR SHOPS": ["SHOP1", "SHOP2", "SHOP3", "SHOP4"],

            },
            image: "",
        },
        {
            title: "Product",
            fashionTypes: {
                "SUMMER FASHION": ["T-Shirts", "Jeans", "Shorts", "Sunglasses"],

            },
            image: "",
        },
        {
            title: "Pages",
            fashionTypes: {
                "SUMMER FASHION": ["T-Shirts", "Jeans", "Shorts", "Sunglasses"],
            },
            image: "",
        }, {
            title: "Blogs",
            fashionTypes: {
                "SUMMER FASHION": ["T-Shirts", "Jeans", "Shorts", "Sunglasses", "Designer Wear", "Jewelry", "Luxury Bags", "High-End Shoes"],

            },
            image: "",
        },
    ];

    return (
        <>
            <header className=" ">
                <div className="container mx-auto lg:px-8 lg:py-8">
                    <div className="hidden lg:flex justify-center items-center">

                        <nav className="flex min-w-[20px] flex-row gap-0 p-0 font-sans text-base font-normal text-white">
                            {menuItems.map((menuItem, index) => {
                                const fashionTypeCount = Object.keys(
                                    menuItem.fashionTypes
                                ).length;
                                const gridColsClass =
                                    fashionTypeCount <= 1
                                        ? "grid-cols-1"
                                        : fashionTypeCount <= 2
                                            ? "grid-cols-2"
                                            : fashionTypeCount <= 2
                                                ? "grid-cols-3"
                                                : fashionTypeCount <= 4
                                                    ? "grid-cols-4"
                                                    : "grid-cols-4";

                                const dropdownPosition = menuItem.title === "Feature" ? "xl:left-[-600%] " : "left-0";


                                return menuItem.title === "Home" ? (
                                    <div key={index} className="relative w-full ml-5 ">
                                        <div className="relative flex items-center w-full p-0  text-left select-none text-blue-gray-900 ml-5 mt-1">
                                            <span class="relative flex items-center justify-between w-full group cursor-pointer  ">
                                                <Link to="/">

                                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900 ml-5 relative">
                                                        {menuItem.title}

                                                    </p>
                                                </Link>
                                                {menuItem.title !== "Home" && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-4 h-4 text-blue-gray-900 transition-transform group-hover:rotate-180 "
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}


                                            </span>
                                        </div></div>
                                ) : (
                                    <div key={index} className="relative w-full ml-5  ">
                                        <div className="relative flex items-center w-full p-0  text-left select-none text-blue-gray-900 ml-0">
                                            <span className="relative flex items-center justify-between w-full group cursor-pointer mt-1">
                                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900 ml-5 relative">
                                                    {menuItem.title}
                                                    {menuItem.title === "Feature" && (
                                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#c4a382] text-xs text-white font-bold px-2 py-0.5 rounded-md shadow
                                                       before:absolute before:content-[''] before:w-0 before:h-0 before:border-l-[6px] before:border-l-transparent 
                                                       before:border-r-[6px] before:border-r-transparent before:border-t-[6px] before:border-t-[#c4a382] before:top-full before:left-1/2 before:-translate-x-1/2">
                                                            NEW
                                                        </span>

                                                    )}
                                                </p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-4 h-4 text-blue-gray-900 transition-transform group-hover:rotate-180 "
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <div
                                                    className={`absolute ${dropdownPosition} top-[100%] z-10 p-4 text-sm font-normal bg-primary   rounded-lg shadow-lg w-[200px] xl:min-w-max
                 text-blue-gray-500 shadow-blue-gray-500/10 opacity-0 scale-95 pointer-events-none 
                group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out`}
                                                >
                                                    <footer className="bg-primary ">
                                                        <div className="mx-auto">

                                                            <div
                                                                className={`grid gap-8 px-4 py-6 lg:py-8 md:${gridColsClass}`}
                                                            >
                                                                {Object.entries(menuItem.fashionTypes).map(
                                                                    ([fashionType, links], typeIndex) => (
                                                                        <div key={typeIndex}>
                                                                            <h4 className="text-heading  font-bold mt-2">
                                                                                {fashionType}
                                                                            </h4>
                                                                            <ul className="text-paragraph  dark:white font-medium mt-4">
                                                                                {links.map((link, linkIndex) => (
                                                                                    <li key={linkIndex} className="mb-2">
                                                                                        <a
                                                                                            href="#"
                                                                                            className="hover:underline"
                                                                                        >
                                                                                            <Link to="/products">

                                                                                                {link}
                                                                                            </Link>
                                                                                        </a>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>

                                                            {menuItem.image && (
                                                                <div className="w-full mt-4">
                                                                    <img
                                                                        src={menuItem.image}
                                                                        alt="Banner"
                                                                        className="w-full object-cover"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </footer>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavbarItems;
