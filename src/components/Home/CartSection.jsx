import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const Cart = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();


    const cart = [
        {
            id: 1,
            name: "Couture Edge",
            price: 6.74,
            quantity: 1,
            image:
                "https://themes.pixelstrap.com/multikart/assets/images/marijuana/banner/1.png",
        },
        {
            id: 2,
            name: "Classic Jacket",
            price: 7.84,
            quantity: 1,
            image:
                "https://themes.pixelstrap.com/multikart/assets/images/marijuana/banner/1.png",
        },
        {
            id: 3,
            name: "Urban Chic",
            price: 3.84,
            quantity: 2,
            image:
                "https://themes.pixelstrap.com/multikart/assets/images/marijuana/banner/1.png",
        },
    ];

    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const freeShippingThreshold = 57.7;
    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const remainingForFreeShipping = Math.max(
        freeShippingThreshold - subtotal,
        0
    );
    const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

    const updateQuantity = (id, change) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? "0%" : "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-[25%] bg-primary shadow-lg p-6 overflow-y-auto z-50"
            >
                <div className="flex justify-between items-center border-b pb-3">
                    <h4 className="text-white">
                        My Cart ({cart.length})
                    </h4>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white    text-medium"
                    >
                        &times;
                    </button>
                </div>

                {remainingForFreeShipping > 0 ? (
                    <p className="text-sm text-grayText mt-3">
                        Spend{" "}
                        <span className="font-bold text-white">
                            ${remainingForFreeShipping.toFixed(2)}
                        </span>{" "}
                        more for Free Shipping!
                    </p>
                ) : (
                    <p className="text-sm text-white mt-3 font-bold">
                        You qualify for free shipping! 🎉
                    </p>
                )}
                <div className="w-full bg-gray-200 rounded-full flex items-center relative mt-8 h-6 overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{
                            width: `${progress}%`,
                            background: "linear-gradient(to right, #d4b196,#d4b196)",
                        }}
                    ></div>

                    <motion.div
                        className="absolute top-0 left-0 h-full w-full opacity-40"
                        style={{
                            background: "linear-gradient(to right, #d4b196, #d4b196, #d4b196)",
                        }}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    ></motion.div>

                    <motion.div
                        className="absolute transform -translate-y-1/2"
                        initial={{ x: "0%" }}
                        animate={{ x: `${progress}%` }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ left: `${progress}%`, transform: "translateX(-100%)" }}
                    >
                        <FaTruck className="text-secondary text-medium" />
                    </motion.div>

                    <span className="absolute left-2 text-white font-bold text-sm">
                        34 min
                    </span>
                </div>
                <button
                    onClick={clearCart}
                    className="text-white font-bold text-right w-full mt-3"
                >
                    Clear Cart
                </button>

                <div className="divide-y mt-3">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center py-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 rounded"
                            />
                            <div className="flex-1 ml-4">
                                <h4 className="text-white">{item.name}</h4>
                                <p className="text-grayText text-sm">
                                    {item.quantity} X ${item.price.toFixed(2)}
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-2">
                                <div className="flex items-center space-x-2 border">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className=" px-2 py-1 text-lg text-white bg-primary"
                                    >
                                        -
                                    </button>
                                    <span className="w-6 text-center text-white text-primary">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className=" px-2 py-1 text-white  text-lg bg-primary"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-primary text-white"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mt-[10vh]">
                    <div className=" bottom-0 border-t pt-3">
                        <h3 className="text-mainText font-bold  flex justify-between">
                            Sub Total:
                            <span className="text-mainText">
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(subtotal)}
                            </span>
                        </h3>
                    </div>

                    <div className="flex space-x-2 mt-4  bottom-0 ">
                        <button
                            type="button"
                            className="flex-1 bg-mainText text-white py-3 rounded hover:bg-opacity-80"
                            aria-label="View Cart"
              onClick={() => navigate("/cart")}

                        >
                            View Cart
                        </button>
                        <button
                            type="button"
                            className="flex-1 bg-mainText text-white py-3 rounded hover:bg-opacity-80"
                            aria-label="Proceed to Checkout"
                            onClick={() => navigate("/checkout")}
                        >
                            Check Out
                        </button>
                    </div>
                </div>
            </motion.div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40"
                ></div>
            )}
        </>
    );
};

export default Cart;
