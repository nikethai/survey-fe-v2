import { FC } from "react";
import { Drawer as DaisyDrawer, DrawerProps } from "react-daisyui";

import { MenuItem } from "./components/MenuItem";
import { useMenuDrawer } from "./useMenuDrawer";

import { cn } from "~/utils/cn";

type IMenuDrawerProps = Omit<DrawerProps, "side">;
export const MenuDrawer: FC<IMenuDrawerProps> = ({
  className,
  children,
  ...restProps
}) => {
  const { menuDrawerState, toggleDrawer } = useMenuDrawer();
  return (
    <DaisyDrawer
      className={cn("lg:drawer-open", className)}
      open={menuDrawerState}
      onClickOverlay={toggleDrawer}
      side={<MenuItem />}
      {...restProps}
    >
      {children}
    </DaisyDrawer>
  );
};
