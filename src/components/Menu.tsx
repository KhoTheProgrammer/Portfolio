import { IoMdMenu, IoMdClose } from "react-icons/io";

interface MenuProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Menu = ({ toggleSidebar, isSidebarOpen }: MenuProps) => {
  return (
    <div 
      className="fixed top-[15px] right-[15px] z-[9998] text-white bg-[#149ddd] rounded-full p-1 lg:hidden cursor-pointer"
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? (
        <IoMdClose className="w-[30px] h-[30px]" />
      ) : (
        <IoMdMenu className="w-[30px] h-[30px]" />
      )}
    </div>
  );
};

export default Menu;