import type { ReactElement } from 'react';
import type { TimelineItemProps } from './TimelineItem';
import "../css/timeline.css";

interface TimelineProps {
    children: ReactElement<TimelineItemProps> | ReactElement<TimelineItemProps>[];
}

function Timeline({ children }: TimelineProps) {
    return (
        <section className="py-5">
            <ul className="timeline">
                {children}
            </ul>
        </section>
    );
}

export default Timeline;