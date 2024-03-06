// withTimeTracker.js
import React, { useEffect, useState } from 'react';

const withTimeTracker = (WrappedComponent) => {
    const WithTimeTracker = (props) => {
        const [timeSpent, setTimeSpent] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setTimeSpent((prevTimeSpent) => prevTimeSpent + 1);
            }, 1000);

            return () => clearInterval(interval);
        }, []);

        return <WrappedComponent {...props} timeSpent={timeSpent} />;
    };

    return WithTimeTracker;
};

export default withTimeTracker;
