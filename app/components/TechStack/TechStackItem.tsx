interface ITechStackItemProps {
  tech: string;
  order: number;
}

export function TechStackItem({ tech, order }: ITechStackItemProps) {
  return <div className="rounded-2xl border-border flex gap-2 border-2 px-2 py-1 items-center">
    <p>{order < 10 ? `0${order}` : order}</p>
    <p className='text-2xl uppercase'>{tech}</p>
  </div>;
}
