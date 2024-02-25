import { NavLink } from "@remix-run/react";
import { Fragment, useMemo } from "react";
import { Divider, Menu } from "react-daisyui";

import { AvatarDropdown } from "~/components/molecules/";
import { menuData } from "~/data/menuData";
import { IMenuItem } from "~/types/menu";
import { cn } from "~/utils/cn";

export const MenuItem = () => {
  const { menuSection, helperSection } = useMemo(() => {
    const menuSection = menuData.filter((item) => item.section === "menu");
    const helperSection = menuData.filter((item) => item.section === "helper");
    return {
      menuSection,
      helperSection,
    };
  }, []);

  const renderMenuItem = (
    item: IMenuItem | Omit<IMenuItem, "section">,
    index: number
  ) => (
    <Menu.Item key={item.name + "-" + index}>
      <NavLink
        className={({ isActive }) => cn("px-3", isActive && "bg-secondary")}
        to={item.href}
      >
        {item.icon && item.icon}
        {item.name}
      </NavLink>
    </Menu.Item>
  );
  const renderMenu = (
    item: IMenuItem | Omit<IMenuItem, "section">,
    index: number
  ) => (
    <Menu.Item className="[&_summary]:px-3" key={item.name + "-" + index}>
      <Menu.Details
        className="space-y-2"
        label={
          <>
            {item.icon && item.icon}
            {item.name}
          </>
        }
      >
        {item.dropdownItems &&
          item.dropdownItems.map((dropdownItem, dropdownIndex) => (
            <Fragment key={dropdownItem.name + "-" + dropdownIndex}>
              {renderMenuItem(dropdownItem, dropdownIndex)}
            </Fragment>
          ))}
      </Menu.Details>
    </Menu.Item>
  );
  return (
    <div className="flex h-full w-60 flex-col bg-base-200 p-3 text-base-content">
      <Menu className="space-y-2 px-0">
        {menuSection.map((item, index) => {
          return item.dropdownItems
            ? renderMenu(item, index)
            : renderMenuItem(item, index);
        })}
      </Menu>
      <div className="mt-auto">
        <Menu className="mb-4 space-y-2 px-0">
          {helperSection.map((item, index) => {
            return item.dropdownItems
              ? renderMenu(item, index)
              : renderMenuItem(item, index);
          })}
        </Menu>
        <Divider className="my-2 h-2" />
        <AvatarDropdown />
      </div>
    </div>
  );
};
