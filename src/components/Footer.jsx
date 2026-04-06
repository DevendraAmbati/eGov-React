import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "/",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    url: "/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "/",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "/",
  },
];

const Footer = () => {
  return (
    <>
     
      <footer className="bg-[#e9f5fb] py-12 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhgr2N4_6WURi8D7ADHRe1V0ngGGnNLtErQ&s"
              alt="eGov"
              className="h-12 mb-4"
            />
            <p className="text-gray-600 max-w-sm mb-6">
              Catalysing digital transformation in public service delivery at speed & scale.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="relative group">
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {item.name}
                    </span>
                    <Link
                      to={item.url}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-900 text-blue-900 
                      hover:bg-blue-900 hover:text-white 
                      transform transition duration-300 
                      hover:scale-110 active:scale-95"
                    >
                      <Icon size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h6 className="text-blue-900 font-semibold mb-5 text-lg">
              Useful Links
            </h6>

            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/our-impact">Our Impact</Link></li>
                <li><Link to="/digit-sandbox">DIGIT Sandbox</Link></li>
              </ul>

              <ul className="space-y-3 text-gray-600 text-sm">
                <li><Link to="/our-people">Our People</Link></li>
                <li><Link to="/financials">Financials</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h6 className="text-blue-900 font-semibold mb-4 text-lg">
              Subscribe Now
            </h6>

            <p className="text-gray-600 text-sm mb-4">
              Receive regular updates of our monthly newsletter DOT - in your inbox.
            </p>

            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-3 rounded-l-full outline-none shadow-sm"
              />
              <button className="bg-orange-400 px-5 rounded-r-full text-white hover:bg-orange-500 transition">
                ✉
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-[#0076bd] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          
          <p className="opacity-90 text-center md:text-left">
            ©2024. eGov. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="opacity-90 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="opacity-90 hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;