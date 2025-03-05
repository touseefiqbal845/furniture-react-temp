import React from "react";
import prod1 from "/assets/prod1.png";
import prod2 from "/assets/prod2.png";
import prod3 from "/assets/prod3.png";
import prod4 from "/assets/prod4.png";
import prod6 from "/assets/prod6.png";
import prod7 from "/assets/prod7.png";
import prod8 from "/assets/prod8.png";
import verticalbanner from "/assets/verticalbanner.png";
import ProductCard from "./Product";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Woodan Diwan",
      image: prod1,
      price: "29.99",
      oldPrice: "49.99",
      rating: 4,
    },
    {
      id: 2,
      name: "Wing Lounge Chair",
      image: prod2,
      price: "19.99",
      oldPrice: "39.99",
      rating: 3,
    },
    {
      id: 3,
      name: "Egon Wood Chair",
      image: prod3,
      price: "15.99",
      oldPrice: "25.99",
      rating: 5,
    },
    {
      id: 4,
      name: "Woodan Center Table",
      image: prod3,
      price: "15.99",
      oldPrice: "25.99",
      rating: 2,
    },
    {
      id: 5,
      name: "Woodan Center Table",
      image: prod4,
      price: "15.99",
      oldPrice: "25.99",
      rating: 4,
    },

    {
      id: 6,
      name: "Woodan Diwan",
      image: prod1,
      price: "29.99",
      oldPrice: "49.99",
      rating: 4,
    },
    {
      id: 7,
      name: "Wing Lounge Chair",
      image: prod2,
      price: "19.99",
      oldPrice: "39.99",
      rating: 3,
    },
    {
      id: 8,
      name: "Egon Wood Chair",
      image: prod3,
      price: "15.99",
      oldPrice: "25.99",
      rating: 5,
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12 mt-0">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
        <div className="lg:w-1/5 w-full flex justify-center">
          <img
            src={verticalbanner}
            alt="Vertical Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-4/5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6  h-full">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[0px] border-t border-gray-700 my-16 mx-auto"></div>

      <div className="flex justify-center items-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            {
              title: "Free Shipping",
              desc: "On Orders Over $50",
              icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
            },
            {
              title: "Online Payment",
              desc: "Instantly Pay Online",
              icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
            },
            {
              title: "24 X 7 Service",
              desc: "Our Service is Available 24/7",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-secondary text-center p-6 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105 "
            >
              <div className="flex items-center space-x-4 justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-mainText transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={feature.icon}
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col items-start transition-colors duration-300 hover:text-white">
                  <h4 className="text-white font-bold text-start">
                    {feature.title}
                  </h4>
                  <p className="text-start">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[0px] border-t border-gray-700 mt-16 mx-auto"></div>
    </section>
  );
};

export default ProductList;
