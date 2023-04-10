import { Heading } from "@/src/components/Heading";

export interface IBlogItem {
  title: string;
  image: string;
  description: string;
}

export function BlogItem(props: IBlogItem) {
  return (
    <div className="group relative h-80 flex-1 flex-grow transition-all duration-500 hover:flex-grow-[5]">
      <img
        src={props.image}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
