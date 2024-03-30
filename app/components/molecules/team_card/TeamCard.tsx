import { ComponentPropsWithoutRef, FC } from "react";
import { Avatar, RadialProgress } from "react-daisyui";

import { Card } from "~/components/atoms";
import { cn } from "~/utils/cn";

type ITeamCardProps = {
  title: string;
  progress?: number;
  startDate?: string;
  endDate?: string;
} & ComponentPropsWithoutRef<"div">;
export const TeamCard: FC<ITeamCardProps> = ({
  className,
  title,
  startDate,
  endDate,
  progress,
}) => {
  return (
    <Card
      className={cn("cursor-pointer shadow-md", className)}
      titleClassName="text-[16px]"
      bodyClassName="p-3 text-[14px]"
      title={
        <div className="space-y-2">
          {title}
          {startDate && endDate && (
            <div className="text-xs text-neutral-500">
              {startDate} - {endDate}
            </div>
          )}
        </div>
      }
    >
      <div className="flex items-center justify-between">
        <Avatar.Group className="-space-x-4">
          <Avatar
            className="[&>div]:h-10 [&>div]:w-10"
            size="sm"
            src="https://i.pravatar.cc/30"
          />
          <Avatar
            className="[&>div]:h-10 [&>div]:w-10"
            size="sm"
            src="https://i.pravatar.cc/30"
          />
          <Avatar
            className="[&>div]:h-10 [&>div]:w-10"
            size="sm"
            src="https://i.pravatar.cc/30"
          />
          <Avatar
            className="[&>div]:h-10 [&>div]:w-10"
            size="sm"
            src="https://i.pravatar.cc/30"
          />
        </Avatar.Group>
        <RadialProgress size="42px" value={progress || 0}>
          <span className="text-primary-500 text-sm"> {progress}% </span>
        </RadialProgress>
      </div>
    </Card>
  );
};
