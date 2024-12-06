import NavBottom from "./NavBottom";
import NavMiddle from "./NavMiddle";

const Navbar = () => {
  return (
    <div className="">
      <div className="max-w-7xl px-6 mx-auto">
        <NavMiddle />
        <hr className="border-gray-300 border-t-2 w-full" />
        <NavBottom />
        <hr className="border-gray-300 border-t-2 w-full shadow-lg" />
      </div>
    </div>
  );
};

export default Navbar;
