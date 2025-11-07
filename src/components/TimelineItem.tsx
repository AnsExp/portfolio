export interface TimelineItemProps {
    title: string;
    date: string;
    description: string | React.ReactNode;
}

function TimelineItem({ title, date, description }: TimelineItemProps) {
    return (
        <li className="timeline-item mb-5">
            <small className="text-muted">{date}</small>
            <h5 className="my-0">{title}</h5>{
                typeof description === "string" ? (
                    <p className="text-muted my-0">{description}</p>
                ) : (
                    description
                )
            }
        </li>
    );
}

export default TimelineItem;
