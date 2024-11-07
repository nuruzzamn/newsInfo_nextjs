import NavBottom from "./NavBottom";
import NavMiddle from "./NavMiddle";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <NavMiddle />
      <hr className="border-gray-300 border-t-2 w-full" />
      <NavBottom />
      <hr className="border-gray-300 border-t-2 w-full shadow-lg" />
    </div>
  );
};

export default Navbar;
