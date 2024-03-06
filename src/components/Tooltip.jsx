// Tooltip.js
import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import './tooltip.css';

const Tooltip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseEnter = (e) => {
        const {top, left, width, height} = e.target.getBoundingClientRect();
        setPosition({x: left + width / 2, y: top + height / 2});
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (

        <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isVisible && (
                <span className="tooltiptext">
          {text}
        </span>
            )}
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Tooltip;
