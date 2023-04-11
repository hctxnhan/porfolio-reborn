import { cva, type VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const button = cva<{
  sizes: Record<"small" | "medium" | "large", string>;
  variants: Record<"outline" | "solid" | "arrowIcon" | "link", string>;
}>(["flex gap-2 items-center transform transition"], {
  variants: {
    sizes: {
      small: "text-base",
      medium: "text-lg",
      large: "text-2xl",
    },
    variants: {
      outline: "border-2 rounded-md py-1 px-2 border-blue-500",
      solid: "bg-blue-500 text-white",
      arrowIcon: "flex items-center gap-2",
      link: "p-0 text-slate-400 hover:text-text",
    },
  },
});

export function Button(
  props: VariantProps<typeof button> &
    PropsWithChildren & {
      icon: string;
    }
) {
  const { sizes, variants, children, icon } = props;
  return (
    <button
      className={button({
        sizes,
        variants,
      })}
    >
      <p>{children}</p>
      <p>{icon}</p>
    </button>
  );
}
