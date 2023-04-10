interface ITechStackItemProps {
    tech: string
    order: number
}

export function TechStackItem({
    tech, order
}: ITechStackItemProps) {
    return (
        <div
            className='rounded-md border-border'
        ></div>
    )
}