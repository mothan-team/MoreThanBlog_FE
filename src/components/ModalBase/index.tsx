import * as React from "react";
import { Dialog } from "@reach/dialog";
import { callAll } from "utils";

interface IModalContext {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalProps {
  children: React.ReactNode;
}

interface ModalButtonProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const ModalContext = React.createContext({} as IModalContext);

const Modal = (props: ModalProps) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return <ModalContext.Provider value={{ isOpen, setOpen }} {...props} />;
};

const ModalDismissButton = ({ children: child }: ModalButtonProps) => {
  const { setOpen } = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setOpen(false), child.props.onClick),
  });
};

const ModalOpenButton = ({ children: child }: ModalButtonProps) => {
  const { setOpen } = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setOpen(true), child.props.onClick),
  });
};

const ModalContent = (props: ModalProps) => {
  const { isOpen, setOpen } = React.useContext(ModalContext);
  return (
    <Dialog
      aria-label="Warning about next steps"
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      className="h-20 w-20 bg-red-200"
      {...props}
    />
  );
};

export { Modal, ModalContent, ModalOpenButton, ModalDismissButton };
