import { IWorkItemProps, IWorkPosition } from "./WorkItem";
import { WorkTable } from "./WorkTable";

const mockWorkExperience: IWorkItemProps[] = [
  {
    companyName: "NCCPlus Vietnam",
    position: IWorkPosition.Intern,
    startDate: new Date("2022-11-15"),
    endDate: new Date("2023-4-15"),
  },
  {
    companyName: "NCCPlus Vietnam",
    position: IWorkPosition.FullTime,
    startDate: new Date("2023-4-15"),
  },
];

export function WorkExperience() {
  return <WorkTable works={mockWorkExperience} />;
}
