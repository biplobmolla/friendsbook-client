import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle, BiMessageRounded } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="px-10 py-4 bg-slate-300 z-50 fixed w-screen top-0 left-0">
        <ul className="flex justify-between items-center">
          <li className="basis-1/5">
            <Link to="/" className="text-xl font-medium">
              friendsbook
            </Link>
          </li>
          <li className="w-2/5 bg-white flex items-center relative py-2.5 rounded-full overflow-hidden">
            <input
              type="search"
              placeholder="Search..."
              className="absolute w-full h-full top-0 left-0 outline-none px-4"
            />
            <div>
              <BsSearch />
            </div>
          </li>
          <li className="basis-1/5">
            <ul className="flex justify-end items-center gap-x-4 text-3xl">
              <li>
                <BiMessageRounded className="cursor-pointer" />
              </li>
              <li>
                <BiUserCircle className="cursor-pointer" />
              </li>
              <li>
                <IoMdNotifications className="cursor-pointer" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
