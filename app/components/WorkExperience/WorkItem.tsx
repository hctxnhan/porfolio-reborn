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

export function WorkItem(props: IWorkItemProps) {
  return (
    <div className="grid grid-cols-4 items-center gap-4 py-4">
      <div className="col-span-2">
        <Heading fontFamily={"alumniSans"} size={"h4"}>
          {props.companyName}
        </Heading>
      </div>
      <p className="rounded-3xl border-[1px] p-2 text-center text-sm">
        {props.position}
      </p>
      <div className="justify-self-end">
        <p>{props.startDate.toDateString()}</p>
        <p>{props.endDate?.toDateString() ?? "present"}</p>
      </div>
    </div>
  );
}
