import { React } from "react";

import { Link } from "react-router-dom";
import "../pg-trans.css";

import profile from '../assets/profile/pro.jpg';
import resume from '../assets/resume/Soe_La_Pyae_Htun_Resume.pdf'


const ContactCard = () => {

  return (
    <>
      <div className="w-full flex md:flex-row flex-col items-center md:justify-center">


        <div class="w-5/6 lg:w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <img class="rounded-t-lg " src={profile} alt="" />

          <div class="p-5">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Soe La Pyae Htun
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                Software Engineer / FullStack Developer
              </p>
            </h5>

            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">

                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Email
                    </p>
                    <Link
                      to="mailto:soelapyaehtun@u.nus.edu"
                      className="flex items-center"
                      target="_blank"
                    >
                      soelapyaehtun@u.nus.edu
                    </Link>
                  </div>

                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">

                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Mobile
                    </p>
                    <Link
                      to="tel:+6586470728"
                      className="flex items-center"
                      target="_blank"
                    >
                      +65 86470728
                    </Link>
                  </div>

                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">

                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Portfolio
                    </p>
                    <p class="text-sm text-gray-700 truncate dark:text-gray-400">
                      <Link
                        to="https://soelapyaehtun.github.io/me/"
                        className="flex items-center"
                        target="_blank"
                      >
                        https://soelapyaehtun.github.io/me/
                      </Link>
                    </p>
                  </div>

                </div>
              </li>

              <li class="pt-4">
                <div class="flex flex-col justify-center items-center space-x-4">

                  <div class="flex-1 min-w-0">

                    <Link
                      to="https://wa.me/+6586470728"

                      target="_blank"
                    >
                      <span className="border border-[#25D366] p-2 rounded-lg">Chat on WhatsApp</span>

                    </Link>


                    <a href={resume} download="Soe_La_Pyae_Htun_Resume" target='_blank' className="m-2">
                      <span className="border border-blue-300 p-2 rounded-lg">Get Resume</span>
                    </a>


                  </div>


                </div>
              </li>
            </ul>

          </div>
        </div>


      </div>
    </>
  );
};

export default ContactCard;
