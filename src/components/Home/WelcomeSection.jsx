import React from "react";
import prod1 from "/assets/prod1.png";
import prod2 from "/assets/prod2.png";
import prod3 from "/assets/prod3.png";
import prod4 from "/assets/prod4.png";
import prod6 from "/assets/prod6.png";
import prod7 from "/assets/prod7.png";
import prod8 from "/assets/prod8.png";
import ProductCard from "./Product";

const WelcomeSection = () => {
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
  ];

  return (
    <section className="container mx-auto px-6 py-12  lg:mt-0 md:mt-0 mt-0">
      <div className="relative xl:top-[-20vh] lg:h-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-4 gap-6">
          {[
            {
              title: "Free Shipping",
              desc: "Save 30%",
              image: prod6,
            },
            {
              title: "Online Payment",
              desc: "Save 30%",
              image: prod7,
            },
            {
              title: "24 X 7 Service",
              desc: "Save 30%",
              image: prod8,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-secondary p-6 text-center relative group"
            >
              <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 transition-all group-hover:scale-110">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col items-center lg:items-start text-center sm:text-left">
                <h4 className="mb-2 text-white font-bold text-base sm:text-sm md:text-2xl lg:text-2xl">
                  {feature.desc}
                </h4>
                <h3 className="mb-2 text-white font-bold text-sm sm:text-sm md:text-3xl lg:text-3xl">
                  {feature.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-primary opacity-0 transition-all cursor-pointer"></div>
            </div>
          ))}
        </div>
      </div>



      <div className="text-center mt-16">
        <h4 className="text-paragraph font-medium">Special Offer</h4>
        <h2 className="text-h2 text-heading font-bold mt-2">TOP COLLECTION</h2>
        <div className="w-20 border-t-4 border-mainText bg-mainText my-6 mx-auto"></div>
        <p className="text-paragraph text-p leading-normal mt-4 md:max-w-2xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full h-[0px] border-t border-gray-700 my-16 mx-auto"></div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 gap-6  p-6">
        {[
          {
            title: "Free Shipping",
            desc: "On Orders Over $50",
            icon: "M5 13l4 4L19 7",
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
          {
            title: "Fast Delivery",
            desc: "Get Your Products Delivered Fast",
            icon: "M2 12l2-2 6 6 6-6 2 2-8 8 8z",
          },
          {
            title: "Secure Payments",
            desc: "All Payments Are Secure",
            icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
          },

        ].map((feature, index) => (
          <div key={index} className=" bg-secondary text-center  p-6 rounded-lg flex items-center justify-between cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
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
              <div>
                <h4 className="text-mainText hover:text-white ">{feature.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>



    </section>
  );
};

export default WelcomeSection;
