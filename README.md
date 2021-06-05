# NOTE

## Redux

- Use `useAppDispatch` and `useAppSelector` for automatically typed.
- Use `RootState`.
- Use `AppDispatch` for typing useDispatch.

# Modal Usage

```typescript
import {
  Modal,
  ModalContent,
  ModalOpenButton,
  ModalDismissButton,
} from "components/ModalBase";

export const ExampleModal = () => {
  return;
  <Modal>
    <ModalOpenButton>Click me to open Modal</ModalOpenButton>
    <ModalDismissButton>Close Modal</ModalDismissButton>
    <ModalContent>Content of the Modal</ModalContent>
  </Modal>;
};
```

# Dropdown Usage

```typescript
import {
  Dropdown,
  DropdownOpenButton,
  useDropdown,
} from "components/DropdownBase";

export const ExampleDropdown = () => {
  return (
    <Dropdown>
      <DropdownOpenButton>Click me to open Dropdown</DropdownOpenButton>
      <DropdownContent />
    </Dropdown>
  );
};

const DropdownContent = () => {
  const { isOpen } = useDropdown();
  return (
    <div
      className={classNames("animate-spin", {
        "visible opacity-100": isOpen,
        "invisible opacity-0": !isOpen,
      })}
    >
      Dropdown Content
    </div>
  );
};
```
