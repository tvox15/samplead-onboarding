import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, progress }) => {
    const fillerStyle = {
        width: `${progress}%`,
    };

    return (
        <div className='progress-bar-wrapper'>
            <div className='progress-bar-container'>
                <div className='progress-bar-filler' style={fillerStyle}>
                    {/*<span className='progress-bar-label'>{progress}%</span>*/}
                </div>
            </div>
            <div className="progress-bar-label-wrapper">
                <p className={'samplead-body--large'}>{label}</p>
            </div>

        </div>
    );
};

export default ProgressBar;
