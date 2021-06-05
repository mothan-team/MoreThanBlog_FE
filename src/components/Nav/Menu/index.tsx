import { NavLink } from "components/Nav/NavLink";
import { LargeScreenDropdown } from "../Dropdown";

export interface Items {
  to: string;
  children: React.ReactNode;
}

const largeScreenMenuItems: Items[] = [
  {
    to: "/",
    children: "Home",
  },
  {
    to: "/about",
    children: "About",
  },
  {
    to: "/contact",
    children: "Contact",
  },
];

export const largeScreenDropdownItems: Items[] = [
  {
    to: "/elect",
    children: "Open Source - Elect",
  },
  {
    to: "/tags",
    children: "Tags",
  },
  {
    to: "/authors",
    children: "Authors",
  },
];

export const smallScreenDropdownItems: Items[] = [
  ...largeScreenMenuItems,
  ...largeScreenDropdownItems,
];

export const Menu = () => {
  return (
    <ul className="hidden lg:flex gap-10 lg:flex-1">
      {largeScreenMenuItems.map((item) => (
        <li key={item.to}>
          <NavLink {...item} />
        </li>
      ))}
      <li>
        <LargeScreenDropdown dropdownItems={largeScreenDropdownItems} />
      </li>
    </ul>
  );
};
