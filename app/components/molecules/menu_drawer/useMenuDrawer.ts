import { atom, useAtom } from "jotai";

const menuDrawerAtom = atom(false);

export const useMenuDrawer = () => {
  const [menuDrawerState, setMenuDrawerState] = useAtom(menuDrawerAtom);

  const toggleDrawer = () => setMenuDrawerState(!menuDrawerState);

  const openDrawer = () => setMenuDrawerState(true);
  const closeDrawer = () => setMenuDrawerState(false);

  return {
    menuDrawerState,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
};
