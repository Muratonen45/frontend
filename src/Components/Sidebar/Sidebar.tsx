import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTable, FaMoneyBill } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { IconType } from "react-icons";
import { IconContext } from "react-icons";
import { IconBaseProps } from "react-icons/lib";

interface MenuItemProps {
  icon: IconType;
  text: string;
  to: string;
}

const MenuItem = ({ icon: Icon, text, to }: MenuItemProps) => {
  const IconComponent = Icon as React.ComponentType<IconBaseProps>;
  
  return (
    <IconContext.Provider value={{ size: '24px' }}>
      <Link
        to={to}
        className="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        <IconComponent />
        <h6 className="ml-3">{text}</h6>
      </Link>
    </IconContext.Provider>
  );
};

const Sidebar = () => {
  return (
    <nav className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
      <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
        <div className="flex bg-white flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
          <div className="md:flex-col md:min-w-full flex flex-col list-none">
            <MenuItem
              icon={FaHome}
              text="Şirket Profili"
              to="company-profile"
            />
            <MenuItem
              icon={FaTable}
              text="Gelir Tablosu"
              to="income-statement"
            />
            <MenuItem
              icon={FaTableCells}
              text="Bilanço"
              to="balance-sheet"
            />
            <MenuItem
              icon={FaMoneyBill}
              text="Nakit Akışı"
              to="cashflow-statement"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;