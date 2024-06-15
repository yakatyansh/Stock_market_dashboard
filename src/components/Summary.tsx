import React from 'react';

interface SummaryProps {
    sentiment: string;
    body: string;
    backgroundColor?: string;
    textColor?: string;
}

const Summary: React.FC<SummaryProps> = () => {
  

    return (
        <div>
            <h2>Summary</h2>
            <p>Overall sentiment: bullish</p>
            <p>hi I am Yash</p>
        </div>
    );
};

export default Summary;