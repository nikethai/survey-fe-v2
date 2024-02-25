import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { Card as DaisyCard } from "react-daisyui";

import { cn } from "~/utils/cn";

export type ICardProps = {
  title?: ReactNode;
  actions?: ReactNode;
  image?: string;
  imageClassName?: string;
  titleClassName?: string;
  actionsClassName?: string;
  bodyClassName?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "title">;
export const Card: FC<ICardProps> = ({
  title,
  actions,
  image,
  children,
  className,
  imageClassName,
  titleClassName,
  actionsClassName,
  bodyClassName,
}) => {
  return (
    <DaisyCard className={cn("", className)}>
      {image && (
        <DaisyCard.Image
          className={cn("", imageClassName)}
          src={image}
          alt="card image"
        />
      )}
      <DaisyCard.Body className={cn(bodyClassName)}>
        {title && (
          <DaisyCard.Title className={cn("", titleClassName)}>
            {title}
          </DaisyCard.Title>
        )}
        {children}
        {actions && (
          <DaisyCard.Actions className={cn("", actionsClassName)}>
            {actions}
          </DaisyCard.Actions>
        )}
      </DaisyCard.Body>
    </DaisyCard>
  );
};
