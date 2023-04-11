import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const section = cva<{ layout: Record<"centered", string> }>(
  "relative h-[100vh] w-full snap-start px-8",
  {
    variants: {
      layout: {
        centered: "flex flex-col justify-center items-center",
      },
    },
  }
);

interface ISection extends VariantProps<typeof section> {
  children: React.ReactNode;
}

export function Section({ children, layout }: ISection) {
  return <section className={section({ layout })}>{children}</section>;
}
