import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Company Info */}
        <div>
          <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" />
          <p className="max-w-xs mt-4 text-sm text-white">
            info@Acetvm.Com
            <br />
            (+91)-0471-7117777/87/97
            <br />
            (+91)-0471-2384437/47
          </p>
          <p >
            For Admission enquries:
            <br />
            (+91) 9562781288
          </p>
          <p>
            For General enquries:
            <br />
            (+91) 8281711677
          </p>
          <div className="flex mt-8 space-x-6">
            {/* Social Icons - Replace with your own components */}
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
             
            </a>
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
            
            </a>
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              {/* <YourWhatsAppIcon /> */}
            </a>
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              {/* <YourLinkedInIcon /> */}
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-medium text-white">Company</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a className="hover:opacity-75" href="#"> About </a>
              <a className="hover:opacity-75" href="#"> Meet the Team </a>
              <a className="hover:opacity-75" href="#"> History </a>
              <a className="hover:opacity-75" href="#"> Careers </a>
            </nav>
          </div>
          <div>
            <p className="font-medium text-white">Services</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a className="hover:opacity-75" href="#"> 1on1 Coaching </a>
              <a className="hover:opacity-75" href="#"> Company Review </a>
              <a className="hover:opacity-75" href="#"> Accounts Review </a>
              <a className="hover:opacity-75" href="#"> HR Consulting </a>
              <a className="hover:opacity-75" href="#"> SEO Optimization </a>
            </nav>
          </div>
          <div>
            <p className="font-medium text-white">Helpful Links</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a className="hover:opacity-75" href="#"> Contact </a>
              <a className="hover:opacity-75" href="#"> FAQs </a>
              <a className="hover:opacity-75" href="#"> Live Chat </a>
            </nav>
          </div>
          <div>
            <p className="font-medium text-white">Legal</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a className="hover:opacity-75" href="#"> Privacy Policy </a>
              <a className="hover:opacity-75" href="#"> Terms & Conditions </a>
              <a className="hover:opacity-75" href="#"> Returns Policy </a>
              <a className="hover:opacity-75" href="#"> Accessibility </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Centered Copyright */}
      <p className="mt-8 text-xs text-white text-center">© 2022 Company Name</p>
    </div>
  </footer>

  );
};

export default Footer;
