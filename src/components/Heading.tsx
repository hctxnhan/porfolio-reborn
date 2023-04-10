import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { Alumni_Sans } from "next/font/google";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
});

const heading = cva<{
  size: Record<"h1" | "h2" | "h3" | "h4" | "h5", string>;
  fontFamily: Record<"alumniSans" | "inter", string>;
}>(["font-bold", "text-text"], {
  variants: {
    size: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
    },
    fontFamily: {
      alumniSans: alumniSans.className,
      inter: "",
    },
  },
});

export type IHeadingProps = VariantProps<typeof heading> & PropsWithChildren;

export function Heading(props: IHeadingProps) {
  const { size, fontFamily } = props;
  return <h1 className={heading({ size, fontFamily })}>{props.children}</h1>;
}
