import React from 'react';

export function lazyWithDelay<T extends React.ComponentType<any>>(
    factory: () => Promise<{ default: T }>,
    delay: number
): React.LazyExoticComponent<T> {
    return React.lazy(() =>
        new Promise<{ default: T }>((resolve) => {
            setTimeout(() => {
                factory().then(resolve);
            }, delay);
        })
    );
}
