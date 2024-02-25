import { ComponentPropsWithoutRef, FC, useRef } from "react";
import { Avatar, Dropdown } from "react-daisyui";

import dorothy from "~/assets/images/dorothy_f.jpg";
import { cn } from "~/utils/cn";

type IAvatarDropdownProps = {} & ComponentPropsWithoutRef<"div">;
export const AvatarDropdown: FC<IAvatarDropdownProps> = ({ className }) => {
  const isOpen = useRef(false);

  return (
    <Dropdown
      vertical="top"
      className={cn("w-full", className)}
      onBlur={() => {
        isOpen.current = false;
      }}
    >
      <Dropdown.Toggle
        className="flex items-center gap-x-3 [&>button]:w-full [&>button]:justify-start [&>button]:px-0"
        onClick={() => {
          if (typeof window === "undefined") return;
          if (isOpen.current) {
            (document.activeElement as HTMLElement)?.blur();
            return (isOpen.current = false);
          }
          isOpen.current = !isOpen.current;
        }}
      >
        <Avatar shape="circle" size="xs" src={dorothy} letters="FD" />
        <div className="space-y-1 text-left font-normal">
          <h3 className="line-clamp-1 text-[14px] font-semibold">
            Dorothy Franks
          </h3>
          <p className="text-base-content-secondary m-0 line-clamp-1 text-[12px]">
            f.dorothy@rhinelab.com
          </p>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
