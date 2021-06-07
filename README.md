[![CI/CD](https://github.com/mothan-team/MoreThanBlog_FE/actions/workflows/config.yml/badge.svg)](https://github.com/mothan-team/MoreThanBlog_FE/actions/workflows/config.yml)


# Redux

- Use `useAppDispatch` and `useAppSelector` for automatically typed.
- Use `RootState`.
- Use `AppDispatch` for typing useDispatch.

## Action
1. Create actionCreator using creatAction from utils/actionFactory
```typescript
  // The first generic type is Type type, the argument is actual Type value
  const increment = createAction<'INCREMENT'>('INCREMENT')
  const incrementAction = increment()
  // The second generic type is the payload type, you may need to declare with interface of type.
  const incrementByValue = creatAction<"INCREMENT_BY_VALUE", number>("INCREMENT_BY_VALUE)
  dispatch(incrementByValue(5))
```

1. Export the IAction for later use of type safe in the reducer
```typescript
  export type IAction = ReturnType<typeof increment | typeof incrementByValue>
```

Done!! You will your actions typesafe.

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

