import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import prod1 from "/assets/prod1.png";
import prod2 from "/assets/prod2.png";
import prod3 from "/assets/prod3.png";

const images = [
  prod1,
  prod2,
  prod3,
];

export default function ProductImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center p-6 rounded-lg">
      <div className="relative w-full max-w-md flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Product"
          className="w-full max-h-full object-contain  bg-secondary"
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="flex space-x-3 mt-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-24 h-24 border rounded-lg cursor-pointer p-1 ${currentIndex === index ? "border-mainText" : "border-black"
              }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={img}
              alt="Thumbnail"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
