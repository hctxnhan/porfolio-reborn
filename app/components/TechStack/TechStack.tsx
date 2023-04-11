import { TechStackItem } from "./TechStackItem";

const techStacks = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nest.js",
  "PostgreSQL",
  "TypeORM",
  "TailwindCSS",
  "ChakraUI",
  "Figma",
];

const pattern = [2, 7, 12];

export function TechStack() {
  const techStackMapToPattern = pattern.map((num, index) => {
    const startIndex = index === 0 ? 0 : pattern[index - 1];
    const endIndex = num;
    const stacks = techStacks.slice(startIndex, endIndex);
    return { startIndex, stacks };
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      {techStackMapToPattern.map((rows, index) => (
        <div key={index} className="flex items-center justify-center gap-4">
          {rows.stacks.map((tech, i) => (
            <TechStackItem
              key={i}
              tech={tech}
              order={rows.startIndex + i + 1}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
