import React from "react";

const Footer = () => {
  return (
<div>
  <footer class="bg-black">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <img src="#" class="mr-5 h-6 sm:h-9" alt="logo" />
          <p class="max-w-xs mt-4 text-sm text-white">
            info@Acetvm.Com
            <br />
            (+91)-0471-7117777/87/97
            <br />
            (+91)-0471-2384437/47
          </p>
          <div class="flex mt-8 space-x-6 text-white">
          
            <a class="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <span class="sr-only">Facebook</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
            </a>

       
            <a class="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <span class="sr-only">Instagram</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2c2.43 0 2.784.013 3.808.06..." clip-rule="evenodd"/>
              </svg>
            </a>

         
            <a class="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <span class="sr-only">LinkedIn</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M4 3c0-1.1.9-2 2-2h12..." clip-rule="evenodd"/>
              </svg>
            </a>

            <a class="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <span class="sr-only">WhatsApp</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48..." clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p class="font-medium text-white">Company</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a class="hover:opacity-75" href="#"> About </a>
              <a class="hover:opacity-75" href="#"> Meet the Team </a>
              <a class="hover:opacity-75" href="#"> History </a>
              <a class="hover:opacity-75" href="#"> Careers </a>
            </nav>
          </div>
          <div>
            <p class="font-medium text-white">Services</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a class="hover:opacity-75" href="#"> 1on1 Coaching </a>
              <a class="hover:opacity-75" href="#"> Company Review </a>
              <a class="hover:opacity-75" href="#"> Accounts Review </a>
              <a class="hover:opacity-75" href="#"> HR Consulting </a>
              <a class="hover:opacity-75" href="#"> SEO Optimisation </a>
            </nav>
          </div>
          <div>
            <p class="font-medium text-white">Helpful Links</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a class="hover:opacity-75" href="#"> Contact </a>
              <a class="hover:opacity-75" href="#"> FAQs </a>
              <a class="hover:opacity-75" href="#"> Live Chat </a>
            </nav>
          </div>
          <div>
            <p class="font-medium text-white">Legal</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
              <a class="hover:opacity-75" href="#"> Privacy Policy </a>
              <a class="hover:opacity-75" href="#"> Terms &amp; Conditions </a>
              <a class="hover:opacity-75" href="#"> Returns Policy </a>
              <a class="hover:opacity-75" href="#"> Accessibility </a>
            </nav>
          </div>
        </div>
      </div>

    
      <p class="mt-8 text-xs text-white text-center">© 2022 Company Name</p>
    </div>
  </footer>
</div>


  );
};

export default Footer;
