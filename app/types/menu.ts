export type IMenuItem = {
  id?: string;
  name: string;
  href: string;
  section: "menu" | "favourite" | "helper" | "footer";
  icon?: React.ReactNode;
  badge?: string;
  protect?: boolean;
  dropdownItems?: Omit<IMenuItem, "section">[];
  onClick?: () => void;
};
