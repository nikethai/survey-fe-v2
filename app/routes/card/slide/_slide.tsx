import { LinksFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "./styles.css";

import { cn } from "~/utils/cn";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function CardStack() {
  const CARD_COLORS = ["#266678", "#cb7c7a", " #36a18b", "#f2a154", "#f2e394"];
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.08;

  const [cards, setCards] = useState(CARD_COLORS);
  const [activeIndex, setActiveIndex] = useState(1);

  const prevStyles = {
    transform: "matrix(0.98, -0.21, 0, 1, 0, 37)",
    background:
      "linear-gradient(308.23deg, #D9D8D6 40.02%, rgba(217, 216, 214, 0) 75.43%)",
  };

  const nextStyles = {
    transform: "matrix(0.98, 0.21, 0, 1, 0, 37)",
    background:
      "linear-gradient(104.11deg, #D9D8D6 49.11%, rgba(217, 216, 214, 0) 88.07%)",
  };

  const appliedStyles = (index: number) => {
    if (index === activeIndex - 1) return prevStyles;
    if (index === activeIndex + 1) return nextStyles;
    return {};
  };

  const handleMoveCard = () => {
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div className="grid h-[calc(100%-64px)] w-full place-content-center p-4">
      <div className="flex h-fit max-w-[1100px] gap-x-6 overflow-x-clip">
        {cards.map((color, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: color,
            }}
            className={cn(
              "h-[220px] w-[350px] flex-[1_0_auto] rounded-lg",
              index === activeIndex && "",
              index === activeIndex - 1 && "slide prev",
              index === activeIndex + 1 && "slide next"
            )}
            initial={appliedStyles(index)}
            animate={appliedStyles(index)}
            transition={{ duration: 0.5 }}
            drag={index === activeIndex ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleMoveCard}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}
