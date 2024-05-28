import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "~/utils/cn";

export default function CardSlide() {
  const CARD_COLORS = ["#266678", "#cb7c7a", " #36a18b"];
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.08;

  const [cards, setCards] = useState(CARD_COLORS);

  const handleMoveCard = () => {
    setCards([...cards.slice(1), cards[0]]);
  };

  return (
    <div className="grid h-[calc(100%-64px)] w-full place-content-center p-4">
      <ul className="relative h-[220px] w-[350px]">
        {cards.map((color, index) => (
          <motion.li
            key={index}
            style={{
              backgroundColor: color,
            }}
            className={cn(
              "absolute h-[220px] w-[350px] origin-bottom-left rounded-lg",
              index === 0 && "cursor-grab"
            )}
            animate={{
              zIndex: cards.length - index,
              rotate: `${-index * CARD_OFFSET}deg`,
              opacity: index === 0 ? 1 : 0.5,
            }}
            drag={index === 0 ? "y" : false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            whileDrag={{
              rotate: `-25deg`,
              scale: 1 - SCALE_FACTOR,
              transition: {
                duration: 0.6,
              },
            }}
            transition={{
              duration: 0.3,
            }}
            onDragEnd={handleMoveCard}
          ></motion.li>
        ))}
      </ul>
    </div>
  );
}
