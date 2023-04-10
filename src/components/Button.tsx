import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const button = cva<{
  colors: Record<"primary" | "secondary", string>;
  sizes: Record<"small" | "medium" | "large", string>;
  variants: Record<"outline" | "solid" | "arrowIcon" | "link", string>;
}>(["flex gap-2 items-center transform transition"], {
  variants: {
    colors: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-red-500 text-white",
    },
    sizes: {
      small: "px-4 py-2 text-sm",
      medium: "px-6 py-3 text-base",
      large: "px-8 py-4 text-lg",
    },
    variants: {
      outline: "border-2 rounded-md py-1 px-2 border-blue-500",
      solid: "bg-blue-500 text-white",
      arrowIcon: "flex items-center gap-2",
      link: "text-blue-500",
    },
  },
});

export function Button(
  props: VariantProps<typeof button> &
    PropsWithChildren & {
      icon: string;
    }
) {
  const { colors, sizes, variants, children, icon } = props;
  return (
    <button
      className={button({
        colors,
        sizes,
        variants,
      })}
    >
      <p>{children}</p>
      <p>{icon}</p>
    </button>
  );
}
