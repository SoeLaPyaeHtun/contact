import { React } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


import { Route, Routes, Navigate } from "react-router-dom";


import "../pg-trans.css";
import ContactCard from "./ContactCard";


const NavBarL = () => {



  const navList = (
    <ul className="mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-gg1 text-lg"
      >
        <Link
          to="https://linkedin.com/in/soelapyaehtun"
          className="flex items-center text-[#0A66C2]"
          target="_blank"
        >
          LinkedIn
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-gg1 text-lg"
      >
        <Link
          to="https://github.com/SoeLaPyaeHtun"
          className="flex items-center text-[#171515]"
          target="_blank"
        >
          Github
        </Link>
      </Typography>
    </ul>
  );
  return (
    <div>
      <Navbar color="transparent" className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-center text-blue-gray-400">

          <div>{navList}</div>
        </div>
      </Navbar>
      <Content />
      <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
          <div className="flex justify-center items-center">copyright@2023</div>


        </div>
      </div>
    </div>
  );
};

export default NavBarL;

function Content() {

  return (

    <Routes>


      <Route path="*" element={<Navigate to="/contact" />} />

      <Route path="/contact" element={<ContactCard />} />

    </Routes>

  );
}
