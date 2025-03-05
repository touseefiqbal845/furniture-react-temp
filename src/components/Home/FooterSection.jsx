import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax } from "react-icons/fa";
import logo from "/assets/footerlogo.png";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-paragraph pt-12">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h4 className=" text-white font-bold ">KNOW IT ALL FIRST!</h4>
            <p className="text-paragraph">Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-80 px-4 py-2 bg-background border rounded-md"
            />
            <button className="px-6 py-2 bg-tertiary text-white rounded-md hover:bg-primary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
        <div className="space-y-4">
          <h3 className="text-medium font-primary font-bold flex items-center gap-2">
            <img 

                src={logo}
            
             alt="Multikart Logo" className="h-full" /> 
          </h3>
          <p className="text-paragraph">Discover the latest fashion trends, explore unique styles, and enjoy seamless shopping.</p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaTiktok].map((Icon, index) => (
              <a key={index} href="#" className="text-paragraph hover:text-primary transition-colors">
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {[["MY ACCOUNT", ["Mens", "Womens", "Clothing", "Accessories", "Featured"]], ["WHY WE CHOOSE", ["Shipping & Return", "Secure Shopping", "Gallery", "Affiliates", "Contacts"]]].map(([title, links], index) => (
          <div key={index}>
            <h5 className="text-medium font-bold mb-4 text-white">{title}</h5>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item}>
                  <a href="#" className="text-paragraph hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="text-medium font-bold mb-4 text-white">STORE INFORMATION</h5>
          <ul className="space-y-4">
            {[['Multikart Demo Store, Demo Store India 345-659', FaMapMarkerAlt], ['Call Us: 123-456-7898', FaPhone], ['Email Us: Support@Multikart.Com', FaEnvelope], ['Fax: 123456', FaFax]].map(([text, Icon], index) => (
              <li key={index} className="flex gap-2">
                <Icon className="h-5 w-5 text-white shrink-0" />
                <span className="text-paragraph">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border bg-primary">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paragraph text-sm">© 2024-25 </p>
          <div className="flex gap-2">
            {["visa", "mastercard", "paypal", "american-express", "discover"].map((payment) => (
              <img
                key={payment}
                src={`https://multikart-react.vercel.app/assets/images/icon/${payment}.png`}
                alt={payment}
                className="h-6"
              />
            ))}
          </div>
        </div>
      </div>

      {showScroll && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 p-5 bg-mainText text-white rounded-full shadow-lg hover:bg-primary/90 transition-all"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
