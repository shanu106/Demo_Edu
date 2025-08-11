import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import QuickLinks from "../Components/QuickLinks";
import Footer from "../Components/Footer";

import Drawer from "../Components/Drawer";
import { Link } from "react-router-dom";

const contact = () => {
  
  return (
    <>
      <div className=" w-full h-full  ">
     
        <div className="w-full bg-[#e9ecef]  text-[#212529] h-auto  p-5 ">
          <div className="w-full md:h-1/4 flex flex-wrap">
            <h3 className="w-full text-center text-3xl font-bold font-serif">
              " Get in Touch with us ! "
            </h3>
            <p className="w-full text-center mt-5 text-lg md:text-4xl font-mono">
              " We are here to answer your Questions... ! "
            </p>
          </div>

          <div className="p-4 w-full  h-3/4 flex flex-wrap">
            <div className="md:w-1/2 md:h-full rounded-2xl ">
              <h2 className="text-[#780000] font-bold font-serif">
                Little Kingdom Public School
              </h2>
              <p className="font-thin font-serif">
                5 , jaroli trade center, indore , MP, 4231234
              </p>

              <div className="flex items-center gap-2 mt-5">
                <i className="border  px-1 text-xl rounded-full ri-contacts-book-2-line"></i>
                <p className="text-lg"> +91 22-456-789</p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
                <div>
                  <p className="text-[#780000] font-bold font-serif">
                    Principal
                  </p>
                  <p className="text-lg"> principal@littlekingdom.edu.in</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
                <div>
                  <p className="text-[#780000] font-bold font-serif">
                    Vice Principal
                  </p>
                  <p className="text-lg"> vp@littlekingdom.edu.in</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
                <div>
                  <p className="text-[#780000] font-bold font-serif">
                    Admissions
                  </p>
                  <p className="text-lg"> admission@littlekingdom.edu.in</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
                <div>
                  <p className="text-[#780000] font-bold font-serif">
                    Main Office
                  </p>
                  <p className="text-lg">office@littlekingdom.edu.in</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:h-full ">
              <iframe
                className="w-full h-full m-3 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.90064963463!2d77.24073995003705!3d23.19932351820722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1754574875020!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* design page here  */}

      
      </div>
  
    </>
  );
};

export default contact;

// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]

