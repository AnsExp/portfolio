import type { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

function Container({ children }: ContainerProps) {
    return (
        <main className="d-flex justify-content-center">
            <div style={{ maxWidth: '700px' }}>
                {children}
            </div>
        </main>
    );
}

export default Container;