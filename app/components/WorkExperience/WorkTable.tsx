import { HorizontalLine } from "@/src/components/HorizontalLine";
import { IWorkItemProps, WorkItem } from "./WorkItem";

interface IWorkTableProps {
  works: IWorkItemProps[];
}

export function WorkTable({ works }: IWorkTableProps) {
  return (
    <div className='w-full'>
      <HorizontalLine />
      {works.map((workItem) => (
        <>
          <WorkItem
            key={workItem.companyName}
            companyName={workItem.companyName}
            position={workItem.position}
            startDate={workItem.startDate}
            endDate={workItem.endDate}
          />
          <HorizontalLine />
        </>
      ))}
    </div>
  );
}
