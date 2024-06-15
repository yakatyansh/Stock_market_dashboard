import React from 'react';

interface TopBarProps {
    title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
    return (
        <div className='topbar'>
            <h1>Hi Yash </h1>
        </div>
    );
};

export default TopBar;