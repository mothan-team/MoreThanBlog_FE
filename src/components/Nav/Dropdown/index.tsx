import { DotsHorizontalIcon, MenuIcon } from "@heroicons/react/outline";
import { NavLink } from "../NavLink";
import {
  Dropdown,
  DropdownOpenButton,
  useDropDown,
} from "components/DropdownBase";
import React from "react";
import classNames from "classnames";
import { Items } from "../Menu";

interface DropdownContentProps {
  dropdownItems: Items[];
  align?: "left" | "right";
}

interface DropdownProps {
  dropdownItems: Items[];
}

export const LargeScreenDropdown = ({ dropdownItems }: DropdownProps) => {
  return (
    <Dropdown>
      <DropdownOpenButton>
        <DotsHorizontalIcon className="h-8 w-8" />
      </DropdownOpenButton>
      <DropdownContent dropdownItems={dropdownItems} />
    </Dropdown>
  );
};

export const SmallScreenDropdown = ({ dropdownItems }: DropdownProps) => {
  return (
    <Dropdown>
      <DropdownOpenButton>
        <MenuIcon className="h-8 w-8" />
      </DropdownOpenButton>
      <DropdownContent dropdownItems={dropdownItems} align="right" />
    </Dropdown>
  );
};

export const DropdownContent = ({
  dropdownItems,
  align = "left",
}: DropdownContentProps) => {
  const { setIsOpen, isOpen } = useDropDown();
  const onNavigate: React.EventHandler<React.MouseEvent> = (e) => {
    if (e.target instanceof HTMLAnchorElement) setIsOpen(false);
  };
  return (
    <ul
      className={classNames(
        "p-4 xl:p-6 whitespace-nowrap bg-gray-200 rounded-lg flex flex-col gap-2 absolute z-10",
        {
          "left-0": align === "left",
          "right-0 text-right": align === "right",
          "invisible opacity-0": !isOpen,
          "visible opacity-100": isOpen,
        }
      )}
      onClick={onNavigate}
    >
      {dropdownItems.map((item) => (
        <li key={item.to}>
          <NavLink {...item} />
        </li>
      ))}
    </ul>
  );
};
