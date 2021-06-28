export const callAll =
  (...fns: Function[]) =>
    (...args: any) => {
      fns.forEach((fn) => fn && fn(...args));
    };

export const backgroundColorList = ["bg-color1", "bg-color2", "bg-color3", "bg-color4", "bg-color5", "bg-color6", "bg-color7", "bg-color8"];

export const getBackgroundColor = () => {
  return backgroundColorList[Math.floor((Math.random() * 10 % 8)) + 1];
};
