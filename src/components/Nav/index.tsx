import { Menu, smallScreenDropdownItems } from "./Menu";
import logo from "./logo.png";
import { SearchIcon } from "@heroicons/react/outline";
import { SmallScreenDropdown } from "./Dropdown";

function Nav() {
  return (
    <nav className="flex justify-between items-center text-md mt-10 font-black xl:text-lg">
      <Menu />
      <AppLogo />
      <div className="hidden lg:flex lg:flex-1">
        <SearchIcon className="w-6 h-6 ml-auto cursor-pointer" />
      </div>
      <div className="lg:hidden">
        <SmallScreenDropdown dropdownItems={smallScreenDropdownItems} />
      </div>
    </nav>
  );
}

const AppLogo = () => {
  return <img src={logo} alt="" className="h-20 w-20" />;
};

export { Nav };
