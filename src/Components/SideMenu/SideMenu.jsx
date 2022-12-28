import React from "react";
import { GiHamburger } from "react-icons/gi";
const SideMenu = () => {
  return (
    <div className="bg-sideMenuBg relative h-[100%] basis-20 p-4">
      {/* Logo Div */}
      <div
        className="logo mt-4 gap-2 text-[white] flex items-center justify-center 
       m-auto"
      >
        <GiHamburger className="text-[20px]" />
        <h1 className="text-[20px] align-center justify-center font-black ">
          Foodie
        </h1>
      </div>
      {/* User Div */}

      <div className="flex items-center justify-center text-[white] flex-col mt-[3rem] admin">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Paul_Circle.png/1200px-Paul_Circle.png"alt="Admin Image" />
      </div>

    </div>
  );
};

export default SideMenu;
