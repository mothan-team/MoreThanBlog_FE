import * as React from "react";

const useOnClickOutSide = (
  ref: React.RefObject<HTMLElement>,
  handler: React.EventHandler<React.SyntheticEvent>
) => {
  React.useEffect(() => {
    const listener = (e: React.MouseEvent | React.TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener as any);
    document.addEventListener("touchstart", listener as any);

    return () => {
      document.removeEventListener("mousedown", listener as any);
      document.removeEventListener("touchstart", listener as any);
    };
  }, [ref, handler]);
};

export { useOnClickOutSide };
