import { Heading } from "@/src/components/Heading";

export enum IWorkPosition {
  Intern = "Internship",
  FullTime = "Full Time",
  PartTime = "Part Time",
  Contract = "Contract",
  Freelance = "Freelance",
}

export interface IWorkItemProps {
  companyName: string;
  position: IWorkPosition;
  startDate: Date;
  endDate?: Date;
}

function formatDate (date: Date) {
  const dateWithoutWeekday = date.toDateString().split(' ').slice(1).join(' ');
  return dateWithoutWeekday;
}

export function WorkItem(props: IWorkItemProps) {
  const { startDate, endDate } = props;
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : 'Present';

  return (
    <div className="grid grid-cols-4 items-center gap-4 py-4">
      <div className="col-span-2">
        <Heading size={'h4'} fontFamily={'alumniSans'}>
          {props.companyName}
        </Heading>
      </div>
      <p className="rounded-3xl border-[1px] p-2 text-center text-sm">
        {props.position}
      </p>
      <div className="flex flex-col gap-2 justify-self-end items-end">
        <p>{formattedStartDate}</p>
        <p>{formattedEndDate}</p>
      </div>
    </div>
  );
}
