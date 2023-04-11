import { TechStack } from "./TechStack/TechStack";
import { WorkExperience } from "./WorkExperience/WorkExperience";

export function Work() {
  return (
    <div className="flex h-[100vh] snap-start flex-col items-center justify-center gap-16 p-8">
      <TechStack />
      <WorkExperience />
    </div>
  );
}
