import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

import { Card } from "~/components/atoms";
import { cn } from "~/utils/cn";

type IInfoCardProps = {
  field: ReactNode;
  fieldIcon?: ReactNode;
  data: ReactNode;
  subData?: ReactNode;
} & ComponentPropsWithoutRef<"div">;
export const InfoCard: FC<IInfoCardProps> = ({
  className,
  field,
  fieldIcon,
  data,
  subData,
}) => {
  return (
    <Card
      className={cn("border-[1px] border-solid border-info", className)}
      bodyClassName="p-4 text-[18px] font-bold"
      titleClassName="text-[14px] font-normal justify-between flex-1"
      actionsClassName="text-[14px] font-normal"
      title={
        <>
          <p>{field}</p>
          {fieldIcon}
        </>
      }
      actions={subData}
    >
      <span>{data}</span>
    </Card>
  );
};
