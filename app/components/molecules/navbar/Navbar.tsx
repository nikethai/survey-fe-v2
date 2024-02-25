import { FC } from "react";
import { Button, Navbar as DaisyNavbar, NavbarProps } from "react-daisyui";
import { FaHamburger } from "react-icons/fa";

import { useMenuDrawer } from "~/components/molecules";
import { cn } from "~/utils/cn";

type INavbarProps = NavbarProps;
export const Navbar: FC<INavbarProps> = ({ className, ...restProps }) => {
  const { openDrawer } = useMenuDrawer();
  return (
    <DaisyNavbar className={cn("px-4", className)} {...restProps}>
      <div className="maxLg:block hidden flex-none">
        <Button onClick={openDrawer} color="ghost">
          <FaHamburger />
        </Button>
      </div>
      Some Logo
    </DaisyNavbar>
  );
};
