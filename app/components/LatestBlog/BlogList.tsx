import { BlogItem, IBlogItem } from "./BlogItem";

interface IBlogListProps {
  items: IBlogItem[];
}

export function BlogList({ items }: IBlogListProps) {
  return (
    <div className="flex">
      {items.map((item, index) => (
        <BlogItem
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}
