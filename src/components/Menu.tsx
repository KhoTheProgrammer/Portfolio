import { IoMdMenu, IoMdClose } from "react-icons/io";

interface MenuProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Menu = ({ toggleSidebar, isSidebarOpen }: MenuProps) => {
  return (
    <button
      type="button"
      aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      aria-expanded={isSidebarOpen}
      className="fixed top-[15px] right-[15px] z-[9998] text-white bg-blue-500 hover:bg-blue-600 rounded-full p-1 lg:hidden cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? (
        <IoMdClose className="w-[30px] h-[30px]" />
      ) : (
        <IoMdMenu className="w-[30px] h-[30px]" />
      )}
    </button>
  );
};

export default Menu;
