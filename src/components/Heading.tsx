import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { Alumni_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
});

const heading = cva<{
  size: Record<"h1" | "h2" | "h3" | "h4" | "h5", string>;
  fontFamily: Record<"alumniSans", string>;
  weight: Record<"bold" | "normal", string>;
}>([""], {
  variants: {
    size: {
      h1: "text-6xl",
      h2: "text-5xl",
      h3: "text-4xl",
      h4: "text-3xl",
      h5: "text-2xl",
    },
    fontFamily: {
      alumniSans: alumniSans.className,
    },
    weight: {
      bold: "font-bold",
      normal: "font-normal",
    },
  },
});

export type IHeadingProps = VariantProps<typeof heading> & PropsWithChildren;

export function Heading(props: IHeadingProps) {
  const { size, fontFamily, weight } = props;
  return (
    <h1 className={twMerge(heading({ size, fontFamily, weight }))}>
      {props.children}
    </h1>
  );
}
