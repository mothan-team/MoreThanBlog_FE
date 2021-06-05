import * as React from "react";
import { callAll } from "utils";
import { useOnClickOutSide } from "utils/useOnClickOutside";

interface IDropdownContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DropdownProps {
  children: React.ReactNode;
}

interface DropdownButtonProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const DropdownContext = React.createContext({} as IDropdownContextValue);

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutSide(
    ref,
    React.useCallback(() => setIsOpen(false), [])
  );

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={ref} {...props} className="relative" />
    </DropdownContext.Provider>
  );
};

const DropdownOpenButton = ({ children: child }: DropdownButtonProps) => {
  const { isOpen, setIsOpen } = React.useContext(DropdownContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(!isOpen), child.props.onClick),
    className: `cursor-pointer ${child.props.className}`,
  });
};

const useDropDown = () => {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("Should be used inside Dropdown Component");
  return context;
};

export { Dropdown, DropdownOpenButton, useDropDown };
